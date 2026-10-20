const pages = {
  home: {
    title: "Home",
    heading: "Make your next video",
    description: "A creative home for AI video tools, practical production guides, and ideas to help your stories travel further.",
    category: "Your creative starting point",
    parent: null,
    icon: "01",
    detailTitle: "A whole video workflow, in one place.",
    detail: "Find the right tool, learn a new technique, and keep building your video skills. Start with the main page to explore every section.",
    aside: "Tools, learning, and inspiration",
  },
  main: {
    title: "Creation Studio",
    heading: "Creation Studio",
    description: "",
    category: "",
    parent: "home",
    icon: "02",
    detailTitle: "Your creative workspace",
    detail: "The sitemap connects the AI tooling section and Video Academy here. DIONPAI brings Malayalam learning resources into the same experience.",
    aside: "Three ways to get started",
  },
  "ai-tooling": {
    title: "Video Generating",
    heading: "Video Generating",
    description: "",
    category: "AI video tools",
    parent: "main",
    icon: "✳",
    detailTitle: "Find a tool for your next idea",
    detail: "Browse the official platforms for Kling AI, GenSpark, PixVerse, Pika Labs, Luma AI, and Flow.",
    aside: "6 tools to explore",
    children: ["kling-ai", "genspark", "pixverse", "pika-labs", "luma-ai", "flow"],
  },
  "video-academy": {
    title: "Video Creator Class",
    heading: "വീഡിയോ ക്രിയേറ്റർ ക്ലാസ്",
    description: "",
    category: "Hub & guides",
    parent: "main",
    icon: "▶",
    detailTitle: "Build your video skills",
    detail: "Explore the Academy's dedicated guides. Start with scripts and captions, then move through editing, audio, and audience growth.",
    aside: "Hub & Guides and DIONPAI",
    children: ["ai-scripts", "video-editing-tips", "audio-guides", "video-growth-tips"],
  },
  dionpai: {
    title: "DIONPAI",
    heading: "Learn and create in Malayalam",
    description: "DIONPAI is the Malayalam content section: video learning, screenplay creation, essential tips, and AI growth guidance.",
    category: "DIONPAI · മലയാളം",
    parent: "main",
    icon: "മ",
    detailTitle: "സൃഷ്ടിക്ക് ഒരു പുതിയ തുടക്കം",
    detail: "Explore dedicated Malayalam learning pages for digital video, screenplay creation, tips, and AI growth.",
    aside: "മലയാളം പഠനവിഭവങ്ങൾ",
    children: ["digital-video", "screenplay-creation", "tips", "ai-growth-tips"],
    language: "ml",
  },
  "kling-ai": {
    title: "Kling AI",
    heading: "Kling AI",
    description: "Explore the Kling AI page in the Aivideoacademy AI tooling collection.",
    category: "AI tool · video generation",
    parent: "ai-tooling",
    icon: "K",
    detailTitle: "Bring a scene to life",
    detail: "A dedicated starting point for exploring Kling AI in your video creation workflow. Continue to the other tools whenever you are ready.",
    aside: "AI Tooling collection",
  },
  genspark: {
    title: "GenSpark",
    heading: "GenSpark",
    description: "Explore the GenSpark page in the Aivideoacademy AI tooling collection.",
    category: "AI tool · creative workflow",
    parent: "ai-tooling",
    icon: "G",
    detailTitle: "Explore a new creative workflow",
    detail: "A dedicated page for GenSpark in the AI tooling section. Use the collection to compare your next creative direction.",
    aside: "AI Tooling collection",
  },
  pixverse: {
    title: "PixVerse",
    heading: "PixVerse",
    description: "Explore the PixVerse page in the Aivideoacademy AI tooling collection.",
    category: "AI tool · video generation",
    parent: "ai-tooling",
    icon: "P",
    detailTitle: "Turn ideas into visual stories",
    detail: "A dedicated starting point for PixVerse, part of the AI tooling collection mapped in the sitemap.",
    aside: "AI Tooling collection",
  },
  "pika-labs": {
    title: "Pika Labs",
    heading: "Pika Labs",
    description: "Explore the Pika Labs page in the Aivideoacademy AI tooling collection.",
    category: "AI tool · video creation",
    parent: "ai-tooling",
    icon: "P",
    detailTitle: "Make room for playful ideas",
    detail: "A dedicated page for Pika Labs. Return to AI Tooling to discover the other video creation tools.",
    aside: "AI Tooling collection",
  },
  "luma-ai": {
    title: "Luma AI",
    heading: "Luma AI",
    description: "Explore the Luma AI page in the Aivideoacademy AI tooling collection.",
    category: "AI tool · video creation",
    parent: "ai-tooling",
    icon: "L",
    detailTitle: "Explore Luma AI",
    detail: "A dedicated page for Luma AI in the AI Tooling section. Use the Back button to return to all tools.",
    aside: "AI Tooling collection",
  },
  flow: {
    title: "Flow",
    heading: "Flow",
    description: "Explore the Flow page in the Aivideoacademy AI tooling collection.",
    category: "AI tool · video creation",
    parent: "ai-tooling",
    icon: "F",
    detailTitle: "Explore Flow",
    detail: "A dedicated page for Flow in the AI Tooling section. Use the Back button to return to all tools.",
    aside: "AI Tooling collection",
  },
  "ai-scripts": {
    title: "AI Script & Caption Hub",
    heading: "AI Script & Caption Hub",
    description: "Write, save, and organize your video scripts and prompts.",
    category: "Video Academy · writing",
    parent: "video-academy",
    icon: "Aa",
  },
  "video-editing-tips": {
    title: "Video Editing Tips",
    heading: "Video Editing Tips",
    description: "A dedicated guide page for making thoughtful, polished edits.",
    category: "Video Academy · editing",
    parent: "video-academy",
    icon: "✂",
    detailTitle: "Make every cut count",
    detail: "Explore practical ideas for pacing, structure, and making your footage feel cohesive. Return to the Academy for more creator guides.",
    aside: "Hub & Guides",
  },
  "audio-guides": {
    title: "AI Voiceover and Audio Guides",
    heading: "Audio Guides",
    description: "A dedicated guide page for voiceover and audio in your video workflow.",
    category: "Video Academy · audio",
    parent: "video-academy",
    icon: "♫",
    detailTitle: "Give your story a voice",
    detail: "Explore the audio side of video creation, from voiceover to the details that help a soundtrack feel at home in your edit.",
    aside: "Hub & Guides",
  },
  "video-growth-tips": {
    title: "Video Growth Amplified Tips",
    heading: "Video Growth Tips",
    description: "A dedicated guide page for reaching and growing an audience with video.",
    category: "Video Academy · growth",
    parent: "video-academy",
    icon: "↗",
    detailTitle: "Help good videos find their audience",
    detail: "Explore the Video Academy's growth guide for ideas on sharing your work and building a more consistent video practice.",
    aside: "Hub & Guides",
  },
  "digital-video": {
    title: "ഡിജിറ്റൽ വീഡിയോ",
    heading: "ഡിജിറ്റൽ വീഡിയോ",
    description: "ഡിജിറ്റൽ വീഡിയോ സൃഷ്ടിയുടെ അടിസ്ഥാനങ്ങളിലേക്കും സാധ്യതകളിലേക്കും ഒരു ലളിതമായ തുടക്കം.",
    category: "DIONPAI · മലയാളം",
    parent: "dionpai",
    icon: "01",
    detailTitle: "വീഡിയോയുടെ ലോകത്തേക്ക്",
    detail: "വീഡിയോ ആശയം മുതൽ ചിത്രീകരണവും എഡിറ്റിംഗും വരെ പഠിക്കാൻ ഈ വിഭാഗം സഹായിക്കുന്നു.",
    aside: "ഡിജിറ്റൽ വീഡിയോ പഠനം",
    language: "ml",
  },
  "screenplay-creation": {
    title: "തിരക്കഥ സൃഷ്ടികൾ",
    heading: "തിരക്കഥ സൃഷ്ടികൾ",
    description: "ആശയങ്ങളെ ആകർഷകമായ കഥകളായും തിരക്കഥകളായും രൂപപ്പെടുത്താനുള്ള പഠനവിഭവങ്ങൾ.",
    category: "DIONPAI · മലയാളം",
    parent: "dionpai",
    icon: "02",
    detailTitle: "കഥയിൽ നിന്ന് തിരക്കഥയിലേക്ക്",
    detail: "കഥയുടെ ആശയം, രംഗങ്ങൾ, സംഭാഷണങ്ങൾ എന്നിവ ക്രമപ്പെടുത്തി തിരക്കഥ രൂപപ്പെടുത്താൻ തുടങ്ങൂ.",
    aside: "തിരക്കഥാ പഠനം",
    language: "ml",
  },
  tips: {
    title: "അടിസ്ഥാന വിവരങ്ങൾ (TIPS)",
    heading: "അടിസ്ഥാന വിവരങ്ങൾ (TIPS)",
    description: "വീഡിയോ സൃഷ്ടിക്കാനും പ്രസിദ്ധീകരിക്കാനും സഹായിക്കുന്ന അടിസ്ഥാന അറിവുകളും പ്രായോഗിക നിർദ്ദേശങ്ങളും.",
    category: "DIONPAI · മലയാളം",
    parent: "dionpai",
    icon: "03",
    detailTitle: "അടിസ്ഥാനങ്ങൾ ആത്മവിശ്വാസത്തോടെ",
    detail: "വീഡിയോ നിർമ്മാണത്തിലെ പ്രധാന ഘട്ടങ്ങൾ ലളിതമായി മനസ്സിലാക്കി നിങ്ങളുടെ അടുത്ത സൃഷ്ടിയിൽ പരീക്ഷിക്കൂ.",
    aside: "അടിസ്ഥാന വിവരങ്ങൾ",
    language: "ml",
  },
  "ai-growth-tips": {
    title: "AI Growth Tips",
    heading: "AI Growth Tips",
    description: "AI ഉപയോഗിച്ചുള്ള ഉള്ളടക്ക സൃഷ്ടിയും വളർച്ചയും മനസ്സിലാക്കാൻ സഹായിക്കുന്ന മലയാളം പഠനവിഭവങ്ങൾ.",
    category: "DIONPAI · മലയാളം",
    parent: "dionpai",
    icon: "04",
    detailTitle: "AI ഉപയോഗിച്ച് വളർച്ചയിലേക്ക്",
    detail: "AI ഉപകരണങ്ങളെ ഉത്തരവാദിത്തത്തോടെ ഉപയോഗിച്ച് ആശയങ്ങൾ വികസിപ്പിക്കാനും പ്രേക്ഷകരിലേക്ക് എത്തിക്കാനും പഠിക്കൂ.",
    aside: "AI Growth · മലയാളം",
    language: "ml",
  },
};

const featuredSections = [
  { key: "ai-tooling", label: "AI TOOLING", title: "With Generate Button", description: "Five AI tools for bringing a video idea to life.", icon: "✳" },
  { key: "video-academy", label: "VIDEO ACADEMY ACADEMY", title: "Video Academy Academy", description: "Scripts, editing, audio, and growth guides for creators.", icon: "▶" },
  { key: "dionpai", label: "DIONPAI · മലയാളം", title: "DIONPAI", description: "Malayalam learning pages for video makers and storytellers.", icon: "മ" },
];

const childCards = {
  "ai-tooling": [
    ["kling-ai", "Kling AI", "Explore Kling AI as part of your video creation workflow.", "K"],
    ["genspark", "GenSpark", "Discover a new creative workflow with GenSpark.", "G"],
    ["pixverse", "PixVerse", "Explore a dedicated page for PixVerse video creation.", "P"],
    ["pika-labs", "Pika Labs", "Find inspiration and ideas for your next Pika Labs project.", "P"],
    ["luma-ai", "Luma AI", "Explore Luma AI in the AI tooling collection.", "L"],
  ],
  "video-academy": [
    ["ai-scripts", "AI Scripts and Captions Hub", "Shape your idea into a story, script, and captions.", "Aa"],
    ["video-editing-tips", "Video Editing Tips", "Practical guidance for a more considered edit.", "✂"],
    ["audio-guides", "AI Voiceover and Audio Guides", "Explore voiceover and audio for your videos.", "♫"],
    ["video-growth-tips", "Video Growth Amplified Tips", "Ideas for sharing your work and growing an audience.", "↗"],
    ["dionpai", "DIONPAI", "Explore video learning and creator guides in Malayalam.", "മ"],
  ],
  dionpai: [
    ["digital-video", "ഡിജിറ്റൽ വീഡിയോ", "ഡിജിറ്റൽ വീഡിയോ പഠനത്തിനുള്ള മലയാളം വിഭവങ്ങൾ.", "01"],
    ["screenplay-creation", "തിരക്കഥ സൃഷ്ടികൾ", "കഥയും തിരക്കഥയും സൃഷ്ടിക്കാൻ പഠിക്കൂ.", "02"],
    ["tips", "അടിസ്ഥാന വിവരങ്ങൾ (TIPS)", "വീഡിയോ സൃഷ്ടിക്കുള്ള അടിസ്ഥാന നിർദ്ദേശങ്ങൾ.", "03"],
    ["ai-growth-tips", "AI Growth Tips", "AI വളർച്ചാ ആശയങ്ങൾ മലയാളത്തിൽ.", "04"],
  ],
};

const academyGuides = {
  "video-editing-tips": [
    ["editing-workflow", "Editing Workflow Basics", "Sort and review your footage, assemble the strongest moments, then refine the cut before export."],
    ["editing-pacing", "Cuts, Pacing and Transitions", "Use intentional cuts and steady pacing to guide attention; keep transitions focused on the story."],
    ["editing-color", "Color and Visual Polish", "Balance exposure and color across shots, then apply a restrained finish that supports the mood."],
    ["editing-malayalam", "Malayalam Editing Guide", "Plan Malayalam titles and subtitles with readable fonts, accurate wording, and comfortable screen timing."],
  ],
  "audio-guides": [
    ["audio-ai-voice", "Create an AI Voiceover", "Prepare a clear script, choose a voice that fits the project, and review pronunciation before using the narration."],
    ["audio-recording", "Voiceover Recording Basics", "Record in a quiet space, keep a consistent mic distance, and leave clean pauses for editing."],
    ["audio-sound-design", "Sound Effects and Music", "Choose audio that supports the scene, and keep music and effects from competing with the spoken message."],
    ["audio-cleanup", "Clean and Mix Your Audio", "Reduce distracting noise, balance voice levels, and listen through on headphones and speakers before export."],
  ],
  "video-growth-tips": [
    ["growth-hooks", "Reels Hooks and Formats", "Lead with a specific visual or question, then deliver one focused idea in a format suited to short-form video."],
    ["growth-short-video", "Create Short-form Videos", "Keep each video centered on one takeaway, use a clear visual rhythm, and make the ending feel intentional."],
    ["growth-publishing", "Posting and Publishing Strategy", "Build a realistic publishing routine, use clear titles, and make each post easy for its intended audience to understand."],
    ["growth-insights", "Measure and Grow Your Audience", "Review retention, saves, shares, and comments to learn what resonates and guide the next experiment."],
  ],
};

for (const [parentKey, guides] of Object.entries(academyGuides)) {
  pages[parentKey].children = guides.map(([key]) => key);
  for (const [key, title, description] of guides) {
    pages[key] = {
      title,
      heading: title,
      description,
      parent: parentKey,
      guideDetail: true,
    };
  }
}

const app = document.querySelector("#app");
const savedRouteKey = "aivideoacademy:last-route";
const savedScrollKey = "aivideoacademy:last-scroll";
const scriptDraftStorageKey = "aivideoacademy:script-workspace";
const scriptImagesDatabase = "aivideoacademy-script-images";
const scriptImagesStore = "attachments";
let routeStateSaveTimer;
let scriptWorkspaceDraft = { title: "", script: "", attachments: [] };
let scriptWorkspaceReady = false;
let scriptImageStorageReady = false;
const cardSections = {
  "ai-tooling": "AI tools",
  "video-academy": "Academy guides",
  dionpai: "DIONPAI learning paths",
};

function routeKey() {
  const key = window.location.hash.replace(/^#\/?/, "").split("/")[0];
  return pages[key] ? key : "home";
}

function routeHref(key) {
  return key === "home" ? "#/" : `#/${key}`;
}

function readSavedState(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.error("Unable to read saved navigation state.", error);
    return null;
  }
}

function writeSavedState(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.error("Unable to save navigation state.", error);
  }
}

function restoreRouteState() {
  const savedHash = readSavedState(savedRouteKey);
  const currentHash = window.location.hash;
  const hash = currentHash && currentHash !== "#" ? currentHash : savedHash;
  const key = hash?.replace(/^#\/?/, "").split("/")[0] || "home";

  if (!pages[key]) {
    return false;
  }

  if (!currentHash || currentHash === "#") {
    window.location.hash = hash || routeHref("home");
  }

  return Boolean(currentHash || savedHash);
}

function saveRouteState() {
  const hash = window.location.hash;
  if (hash && hash !== "#") {
    writeSavedState(savedRouteKey, hash);
  } else if (!readSavedState(savedRouteKey)) {
    writeSavedState(savedRouteKey, routeHref("home"));
  }
  writeSavedState(savedScrollKey, String(window.scrollY));
}

function cardMarkup([key, title, description, icon], index) {
  const page = pages[key];
  const language = page.language ? ` lang="${page.language}"` : "";
  const fontClass = page.language ? " malayalam" : "";
  return `
    <a class="nav-card" href="${routeHref(key)}"${language}>
      <span class="card-topline">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="card-icon${fontClass}">${icon}</span>
      </span>
      <div class="card-copy">
        <h3 class="${fontClass.trim()}">${title}</h3>
        <p>${description}</p>
      </div>
      <span class="card-bottomline">
        <span class="card-category">${cardSections[page.parent] || page.category}</span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </span>
    </a>`;
}

function homeMarkup() {
  return `
    <section class="home-welcome" aria-labelledby="welcome-title">
      <h1 id="welcome-title">AI Video Academy</h1>
      <a class="welcome-button" href="#/main">Continue <span aria-hidden="true">→</span></a>
    </section>`;
}

function mainMarkup() {
  return `
    <nav class="studio-actions" aria-label="Creation Studio sections">
      <a class="studio-button" href="#/ai-tooling">Video Generating</a>
      <a class="studio-button" href="#/video-academy">Video Academy</a>
    </nav>`;
}

function videoGeneratingMarkup() {
  const tools = [
    ["Kling AI", "https://klingai.com/"],
    ["GenSpark", "https://www.genspark.ai/"],
    ["PixVerse", "https://app.pixverse.ai/"],
    ["Pika Labs", "https://pika.art/"],
    ["Luma AI", "https://lumalabs.ai/dream-machine"],
    ["Flow", "https://flow.google/"],
  ];
  return `
    <section class="tooling-page" aria-labelledby="tooling-title">
      <h1 id="tooling-title">Video Generating</h1>
      <nav class="tool-list" aria-label="Video generation tools">
        ${tools.map(([title, href]) => `
          <a class="tool-card" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${title} (opens in a new tab)">
            <span class="tool-name">${title}</span>
          </a>`).join("")}
      </nav>
    </section>`;
}

function videoAcademyMarkup() {
  const topics = [
    ["ai-scripts", "AI Script & Caption Hub"],
    ["video-editing-tips", "Video Editing Tips & Malayalam Guides"],
    ["audio-guides", "AI Voiceover & Audio Hacks"],
    ["video-growth-tips", "Viral Reels & Growth Tips"],
  ];
  return `
    <section class="academy-page-content" lang="en" aria-labelledby="academy-title">
      <h1 id="academy-title" lang="ml">വീഡിയോ ക്രിയേറ്റർ ക്ലാസ്</h1>
      <nav class="academy-list" aria-label="Video creator learning topics">
        ${topics.map(([key, title]) => `
          <a class="academy-card" href="${routeHref(key)}">
            <span>${title}</span>
          </a>`).join("")}
      </nav>
    </section>`;
}

function scriptWorkspaceMarkup() {
  return `
    <section class="script-workspace" aria-labelledby="script-workspace-title">
      <a class="script-workspace-back" href="${routeHref("video-academy")}">
        <span aria-hidden="true">←</span> Back to Video Academy
      </a>
      <header class="script-workspace-heading">
        <h1 id="script-workspace-title">AI Script &amp; Caption Hub</h1>
        <p>Saved in this browser only. Browser storage is not encrypted; avoid sensitive content.</p>
      </header>
      <form class="script-workspace-form">
        <label class="workspace-field">
          <span>Title</span>
          <input name="title" type="text" maxlength="160" placeholder="Give your script a title" autocomplete="off" disabled>
        </label>
        <label class="workspace-field">
          <span>Script / Prompt</span>
          <textarea name="script" rows="12" placeholder="Write your script, caption, or AI prompt here..." disabled></textarea>
        </label>
        <div class="workspace-field">
          <span id="script-image-label">Related images</span>
          <label class="workspace-upload" for="script-image-input">
            <span aria-hidden="true">＋</span> Attach images
            <input id="script-image-input" name="images" type="file" accept="image/*" multiple aria-labelledby="script-image-label" disabled>
          </label>
          <div class="workspace-attachments" aria-live="polite"></div>
        </div>
        <div class="workspace-actions">
          <button class="workspace-save" type="submit" disabled>Save script</button>
          <p class="workspace-status" role="status" aria-live="polite">Loading your saved workspace…</p>
        </div>
      </form>
    </section>`;
}

function openScriptImagesDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(scriptImagesDatabase, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(scriptImagesStore)) {
        database.createObjectStore(scriptImagesStore, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not open image storage."));
  });
}

function readScriptImages(database) {
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(scriptImagesStore, "readonly");
    const request = transaction.objectStore(scriptImagesStore).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not load saved images."));
  });
}

function writeScriptImages(database, attachments) {
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(scriptImagesStore, "readwrite");
    const store = transaction.objectStore(scriptImagesStore);
    store.clear();
    for (const { id, name, type, blob } of attachments) {
      store.put({ id, name, type, blob });
    }
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not save image attachments."));
    transaction.onabort = () => reject(transaction.error || new Error("Saving image attachments was cancelled."));
  });
}

function setWorkspaceStatus(message, isError = false) {
  const status = app.querySelector(".workspace-status");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", isError);
  status.setAttribute("role", isError ? "alert" : "status");
}

function renderScriptAttachments() {
  const container = app.querySelector(".workspace-attachments");
  if (!container) return;

  container.replaceChildren();
  for (const attachment of scriptWorkspaceDraft.attachments) {
    const item = document.createElement("div");
    item.className = "workspace-attachment";

    const image = document.createElement("img");
    image.alt = attachment.name;
    attachment.objectUrl ||= URL.createObjectURL(attachment.blob);
    image.src = attachment.objectUrl;

    const name = document.createElement("span");
    name.className = "workspace-attachment-name";
    name.textContent = attachment.name;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "workspace-remove";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${attachment.name}`);
    remove.addEventListener("click", () => {
      URL.revokeObjectURL(attachment.objectUrl);
      scriptWorkspaceDraft.attachments = scriptWorkspaceDraft.attachments
        .filter((entry) => entry.id !== attachment.id);
      renderScriptAttachments();
      setWorkspaceStatus("Image removed. Save your script to keep this change.");
    });

    item.append(image, name, remove);
    container.append(item);
  }
}

async function initializeScriptWorkspace() {
  const form = app.querySelector(".script-workspace-form");
  if (!form) return;

  scriptWorkspaceReady = false;
  const titleInput = form.elements.namedItem("title");
  const scriptInput = form.elements.namedItem("script");
  const fileInput = form.elements.namedItem("images");
  const saveButton = form.querySelector(".workspace-save");
  let hasSavedDraft = false;

  try {
    const savedDraft = window.localStorage.getItem(scriptDraftStorageKey);
    hasSavedDraft = Boolean(savedDraft);
    if (savedDraft) {
      const parsedDraft = JSON.parse(savedDraft);
      if (typeof parsedDraft.title !== "string" || typeof parsedDraft.script !== "string") {
        throw new Error("The saved script has an unexpected format.");
      }
      scriptWorkspaceDraft.title = parsedDraft.title;
      scriptWorkspaceDraft.script = parsedDraft.script;
    } else {
      scriptWorkspaceDraft = { title: "", script: "", attachments: [] };
    }
  } catch (error) {
    console.error("Unable to load the script workspace.", error);
    setWorkspaceStatus("Could not load saved data. Check browser storage settings and reload.", true);
    saveButton.disabled = true;
    fileInput.disabled = true;
    return;
  }

  titleInput.value = scriptWorkspaceDraft.title;
  scriptInput.value = scriptWorkspaceDraft.script;
  try {
    const database = await openScriptImagesDatabase();
    if (routeKey() !== "ai-scripts" || !app.contains(form)) {
      database.close();
      return;
    }
    try {
      scriptWorkspaceDraft.attachments = await readScriptImages(database);
    } finally {
      database.close();
    }
    scriptImageStorageReady = true;
  } catch (error) {
    console.error("Unable to load script image attachments.", error);
    scriptWorkspaceDraft.attachments = [];
    scriptImageStorageReady = false;
  }
  if (routeKey() !== "ai-scripts" || !app.contains(form)) return;

  scriptWorkspaceReady = true;
  titleInput.disabled = false;
  scriptInput.disabled = false;
  saveButton.disabled = false;
  fileInput.disabled = !scriptImageStorageReady;
  renderScriptAttachments();
  setWorkspaceStatus(scriptImageStorageReady
    ? (hasSavedDraft ? "Your saved script is ready." : "Your script is saved only when you select Save.")
    : "Text saving is available, but this browser could not open image storage.", !scriptImageStorageReady);

  titleInput.addEventListener("input", () => {
    scriptWorkspaceDraft.title = titleInput.value;
  });
  scriptInput.addEventListener("input", () => {
    scriptWorkspaceDraft.script = scriptInput.value;
  });
  fileInput.addEventListener("change", () => {
    const files = Array.from(fileInput.files || []);
    const invalidFile = files.find((file) => !file.type.startsWith("image/"));
    if (invalidFile) {
      setWorkspaceStatus("Only image files can be attached.", true);
      fileInput.value = "";
      return;
    }
    for (const file of files) {
      scriptWorkspaceDraft.attachments.push({
        id: window.crypto.randomUUID
          ? window.crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: file.name,
        type: file.type,
        blob: file,
      });
    }
    fileInput.value = "";
    renderScriptAttachments();
    if (files.length) setWorkspaceStatus("Images attached. Save your script to keep them.");
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!scriptWorkspaceReady) return;
    saveButton.disabled = true;
    try {
      scriptWorkspaceDraft.title = titleInput.value;
      scriptWorkspaceDraft.script = scriptInput.value;
      window.localStorage.setItem(scriptDraftStorageKey, JSON.stringify({
        title: scriptWorkspaceDraft.title,
        script: scriptWorkspaceDraft.script,
        updatedAt: new Date().toISOString(),
      }));
    } catch (error) {
      console.error("Unable to save the script text.", error);
      setWorkspaceStatus("Could not save your script. Check browser storage space and permissions.", true);
      saveButton.disabled = false;
      return;
    }
    if (scriptImageStorageReady) {
      let database;
      try {
        database = await openScriptImagesDatabase();
      } catch (error) {
        console.error("Unable to open image storage while saving.", error);
        setWorkspaceStatus("Your script text was saved, but image storage could not be opened.", true);
        saveButton.disabled = false;
        return;
      }
      try {
        await writeScriptImages(database, scriptWorkspaceDraft.attachments);
      } catch (error) {
        console.error("Unable to save script image attachments.", error);
        setWorkspaceStatus("Your script text was saved, but image attachments could not be saved.", true);
        saveButton.disabled = false;
        return;
      } finally {
        database.close();
      }
    }
    setWorkspaceStatus(scriptImageStorageReady
      ? "Saved on this device."
      : "Script saved on this device; image storage is unavailable.");
    saveButton.disabled = false;
  });
}

function academyTopicMarkup(key) {
  const page = pages[key];
  const guides = academyGuides[key];
  return `
    <section class="academy-topic-content" aria-labelledby="academy-topic-title">
      <h1 id="academy-topic-title">${page.heading}</h1>
      <nav class="academy-topic-list" aria-label="${page.title} guides">
        ${guides.map(([guideKey, title]) => `
          <a class="academy-topic-link" href="${routeHref(guideKey)}">${title}</a>`).join("")}
      </nav>
    </section>`;
}

function academyGuideMarkup(key) {
  const guide = pages[key];
  return `
    <article class="academy-guide-content" aria-labelledby="academy-guide-title">
      <h1 id="academy-guide-title">${guide.heading}</h1>
      <p>${guide.description}</p>
    </article>`;
}

function parentLink(key) {
  const links = [];
  let current = key;
  while (current) {
    const href = pages[current].parent === null ? "#/" : `#/${current}`;
    links.unshift(`<a href="${href}">${pages[current].title}</a>`);
    current = pages[current].parent;
  }
  return links.join('<span aria-hidden="true">/</span>');
}

function pageMarkup(key) {
  const page = pages[key];
  const parent = page.parent;
  const isMalayalam = page.language === "ml";
  const titleClass = isMalayalam ? "malayalam" : "";
  const language = isMalayalam ? ' lang="ml"' : "";
  const children = childCards[key] || [];
  const detailCopy = page.detail;

  return `
    <section class="subpage-hero"${language}>
      <nav class="breadcrumbs" aria-label="Breadcrumb">${parentLink(key)}</nav>
      ${parent ? `<a class="back-link" href="${routeHref(parent)}"><span aria-hidden="true">←</span> Back <span class="back-destination">to ${pages[parent].title}</span></a>` : ""}
      <p class="eyebrow">${page.category}</p>
      <h1 class="${titleClass}">${page.heading}</h1>
      <p class="lead">${page.description}</p>
    </section>
    <section class="detail-panel"${language}>
      <div>
        <p class="eyebrow">Aivideoacademy</p>
        <h2 class="${titleClass}">${page.detailTitle}</h2>
        <p>${detailCopy}</p>
      </div>
      <div class="detail-aside">
        <span>Explore this section</span>
        <strong class="${titleClass}">${page.aside}</strong>
      </div>
    </section>
    ${children.length ? `
      <section class="section">
        <div class="section-heading">
          <h2>${page.title === "Main Page" ? "Choose your next step." : "Explore this section."}</h2>
          <p>${page.title === "Main Page" ? "Every branch leads to its own page. Follow the one that fits your idea." : "Select a topic to open its dedicated page."}</p>
        </div>
        <div class="card-grid${children.length === 4 ? " two-col" : ""}">${children.map(cardMarkup).join("")}</div>
      </section>` : ""}
    ${key === "main" ? `
      <section class="section">
        <div class="section-heading">
          <h2>Continue exploring.</h2>
          <p>Pick a section to browse its dedicated pages.</p>
        </div>
        <div class="card-grid">${featuredSections.map((item, index) => cardMarkup(
          [item.key, item.title, item.description, item.icon], index,
        )).join("")}</div>
      </section>` : ""}
  `;
}

function render() {
  const key = routeKey();
  const page = pages[key];
  if (key !== "ai-scripts") {
    for (const attachment of scriptWorkspaceDraft.attachments) {
      if (attachment.objectUrl) URL.revokeObjectURL(attachment.objectUrl);
    }
    scriptWorkspaceReady = false;
    scriptImageStorageReady = false;
  }
  app.innerHTML = key === "home"
    ? homeMarkup()
    : key === "main"
      ? mainMarkup()
      : key === "ai-tooling"
        ? videoGeneratingMarkup()
        : key === "video-academy"
          ? videoAcademyMarkup()
          : key === "ai-scripts"
            ? scriptWorkspaceMarkup()
          : academyGuides[key]
            ? academyTopicMarkup(key)
            : page.guideDetail
              ? academyGuideMarkup(key)
      : pageMarkup(key);
  document.body.classList.toggle("home-page", key === "home");
  document.body.classList.toggle("main-page", key === "main");
  document.body.classList.toggle("ai-tooling-page", key === "ai-tooling");
  document.body.classList.toggle("academy-page", key === "video-academy");
  document.body.classList.toggle("academy-topic-page", Boolean(academyGuides[key]));
  document.body.classList.toggle("academy-detail-page", Boolean(page.guideDetail));
  document.body.classList.toggle("script-workspace-page", key === "ai-scripts");
  const headerAction = document.querySelector(".header-cta");
  if (key === "main" || key === "ai-tooling" || key === "video-academy" || key === "ai-scripts" || academyGuides[key] || page.guideDetail) {
    const backKey = key === "main" ? "home" : page.parent;
    headerAction.href = routeHref(backKey);
    headerAction.setAttribute("aria-label", `Back to ${pages[backKey].title}`);
    headerAction.innerHTML = '<span aria-hidden="true">←</span> Back';
  } else {
    headerAction.href = "#/main";
    headerAction.removeAttribute("aria-label");
    headerAction.innerHTML = 'Start creating <span aria-hidden="true">↗</span>';
  }
  document.title = key === "home"
    ? "AI Video Academy"
    : `${page.title} — Aivideoacademy`;
  if (key === "ai-scripts") initializeScriptWorkspace();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
window.addEventListener("hashchange", saveRouteState);
window.addEventListener("pagehide", saveRouteState);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    saveRouteState();
  }
});
window.addEventListener("scroll", () => {
  window.clearTimeout(routeStateSaveTimer);
  routeStateSaveTimer = window.setTimeout(saveRouteState, 150);
}, { passive: true });

const shouldRestoreScroll = restoreRouteState();
const savedScroll = shouldRestoreScroll ? Number(readSavedState(savedScrollKey)) : 0;
render();
if (Number.isFinite(savedScroll) && savedScroll > 0) {
  window.requestAnimationFrame(() => {
    window.scrollTo(0, savedScroll);
    saveRouteState();
  });
} else {
  saveRouteState();
}
