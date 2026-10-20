import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import {
  deleteObject,
  getBlob,
  getStorage,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBADzv-qyBrj3qszMgmS5bXFMf9EBPkQWQ",
  authDomain: "ai-video-academy-4afcf.firebaseapp.com",
  projectId: "ai-video-academy-4afcf",
  storageBucket: "ai-video-academy-4afcf.firebasestorage.app",
  messagingSenderId: "421368392368",
  appId: "1:421368392368:web:badc408217381d5bd86975",
  measurementId: "G-658TGXXDL6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);
const workspaceDocument = (uid) => doc(database, "users", uid, "scriptWorkspace", "current");
const userImagePath = (uid, fileId) => `users/${uid}/script-images/${fileId}`;

export function watchGoogleUser(onChange, onError) {
  getRedirectResult(auth).catch(onError);
  return onAuthStateChanged(auth, onChange, onError);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    if (["auth/popup-blocked", "auth/operation-not-supported-in-this-environment"].includes(error.code)) {
      await signInWithRedirect(auth, provider);
      return null;
    }
    throw error;
  }
}

export function signOutGoogleUser() {
  return signOut(auth);
}

export async function loadScriptWorkspace(user) {
  const snapshot = await getDoc(workspaceDocument(user.uid));
  if (!snapshot.exists()) return null;

  const data = snapshot.data();
  const images = await Promise.all((data.images || []).map(async (image) => {
    const expectedPrefix = `users/${user.uid}/script-images/`;
    if (typeof image.path !== "string" || !image.path.startsWith(expectedPrefix)) {
      throw new Error("Saved image path is not valid for this account.");
    }
    return {
      id: image.id,
      name: image.name,
      type: image.type,
      blob: await getBlob(ref(storage, image.path)),
      storagePath: image.path,
    };
  }));

  return {
    title: typeof data.title === "string" ? data.title : "",
    script: typeof data.script === "string" ? data.script : "",
    attachments: images,
  };
}

export async function saveScriptWorkspace(user, draft) {
  const oldSnapshot = await getDoc(workspaceDocument(user.uid));
  const oldImages = oldSnapshot.exists() ? oldSnapshot.data().images || [] : [];
  const images = [];

  for (const attachment of draft.attachments) {
    const path = attachment.storagePath || userImagePath(user.uid, attachment.id);
    if (!attachment.storagePath) {
      await uploadBytes(ref(storage, path), attachment.blob, {
        contentType: attachment.type,
      });
    }
    images.push({
      id: attachment.id,
      name: attachment.name,
      type: attachment.type,
      path,
    });
  }

  await setDoc(workspaceDocument(user.uid), {
    title: draft.title,
    script: draft.script,
    images,
    updatedAt: serverTimestamp(),
  });

  const currentPaths = new Set(images.map((image) => image.path));
  await Promise.all(oldImages
    .filter((image) => typeof image.path === "string"
      && image.path.startsWith(`users/${user.uid}/script-images/`)
      && !currentPaths.has(image.path))
    .map((image) => deleteObject(ref(storage, image.path))));
}
