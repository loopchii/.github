const signals = [
  {
    tone: "violet",
    title: "Human consequence",
    detail: "Start where a weak assumption reaches a patient, a child, a worker, or a record that can outlast the mistake.",
    studyId: "care"
  },
  {
    tone: "warm",
    title: "Working with Loopchii",
    detail: "Range, restraint, and cross-disciplinary reading matter here more than fast certainty.",
    studyId: "work"
  },
  {
    tone: "mint",
    title: "Why high-risk domains",
    detail: "They surface drift early because the cost of vague thinking arrives quickly there.",
    studyId: "public"
  },
  {
    tone: "warm",
    title: "Media and memory",
    detail: "Recommendation, repetition, and cataloging make system behavior easier to see.",
    studyId: "media"
  },
  {
    tone: "mint",
    title: "Research should stay inspectable",
    detail: "Public work earns trust when people can open it, question it, and keep going.",
    studyId: "children"
  }
];

const studyTracks = [
  {
    id: "care",
    tone: "violet",
    kicker: "Care systems",
    title: "When a system touches a patient, ambiguity stops being stylish.",
    reason:
      "Health, triage, records, and care routing make weak claims fail quickly. They force clarity about review and what happens when a system is wrong.",
    why:
      "This is where a delay, a bad route, or a missing second look lands on a person first.",
    cta: "Continue into research",
    href: "https://www.loopchii.space/"
  },
  {
    id: "children",
    tone: "mint",
    kicker: "Children and families",
    title: "Youth safety is where persuasion, privacy, and design lose the right to be casual.",
    reason:
      "If a system shapes attention, profiles behavior, or automates contact around a minor, the design question becomes a human question immediately.",
    why:
      "This is where convenience, pressure, and duty become easy to tell apart.",
    cta: "Open the public field",
    href: "https://www.loopchii.com/"
  },
  {
    id: "media",
    tone: "warm",
    kicker: "Media and music",
    title: "Media systems show how memory, repetition, and influence travel.",
    reason:
      "Recommendation loops, cataloging, bias, and copyright pressure make media one of the clearest public laboratories for studying AI behavior.",
    why:
      "This is where people often feel the system before they can name it.",
    cta: "Inspect Stream",
    href: "https://github.com/loopchii/Stream"
  },
  {
    id: "public",
    tone: "violet",
    kicker: "Public systems",
    title: "Public infrastructure exposes whether review can still arrive in time.",
    reason:
      "Records, benefits, identity, appeals, and access decisions do not tolerate elegant language with no recovery path behind it.",
    why:
      "People need explanation, contest, correction, and a route back.",
    cta: "Visit the working environment",
    href: "https://www.loopchii.space/"
  },
  {
    id: "work",
    tone: "warm",
    kicker: "Working with Loopchii",
    title: "The work asks for people who can care in detail without performing certainty.",
    reason:
      "This is not one-discipline work. Engineering, product, policy, design, research, media, and safety all have to survive the same claim.",
    why:
      "Read widely, think carefully, write clearly, and leave room for correction.",
    cta: "Write the team",
    href: "mailto:hello@loopchii.com?subject=Loopchii%20Open%20Field"
  }
];

const audiencePaths = {
  engineers: {
    intro:
      "Start with the parts that can be inspected directly: repositories, browser surfaces, contribution guidance, and bounded claims.",
    cards: [
      {
        tone: "cool",
        kicker: "Public Repository",
        title: "Stream",
        copy: "Open the media-analysis surface, inspect the live dashboard, trace the API, and contribute to a public codebase with real tests behind it.",
        cta: "Open Stream",
        href: "https://github.com/loopchii/Stream"
      },
      {
        tone: "warm",
        kicker: "Public Framework",
        title: "Read the field notes",
        copy: "See how the public surface handles ethics, review, human consequence, and restraint without collapsing into product theater.",
        cta: "Read public framework",
        href: "https://github.com/loopchii/.github"
      },
      {
        tone: "mint",
        kicker: "Contact",
        title: "Ask a precise question",
        copy: "If something is unclear, the shortest route is still a specific question with context, a link, and a reason you care.",
        cta: "Write hello@loopchii.com",
        href: "mailto:hello@loopchii.com?subject=Loopchii%20GitHub%20Question"
      }
    ]
  },
  researchers: {
    intro:
      "This route is for people studying consequence, behavior, media, trust, or the shape of technical claims in public.",
    cards: [
      {
        tone: "mint",
        kicker: "Research Surface",
        title: "Follow Stream",
        copy: "Use the public media-analysis work as an entry point into how Loopchii approaches inspectable methods, narrative framing, and bounded interpretation.",
        cta: "Read Stream",
        href: "https://github.com/loopchii/Stream"
      },
      {
        tone: "violet",
        kicker: "Working Environment",
        title: "Visit loopchii.space",
        copy: "The research environment shows how the public story and the working environment relate without pretending they are the same thing.",
        cta: "Open research",
        href: "https://www.loopchii.space/"
      },
      {
        tone: "warm",
        kicker: "Company Context",
        title: "Use loopchii.com for the outer frame",
        copy: "The company site gives the broader context without turning public materials into a product manual.",
        cta: "Visit site",
        href: "https://www.loopchii.com/"
      }
    ]
  },
  operators: {
    intro:
      "Operators usually need the shortest path to relevance: what exists, what can be trusted, and how to reach someone without a maze.",
    cards: [
      {
        tone: "warm",
        kicker: "Fastest Route",
        title: "Use the company site",
        copy: "If you need a broad overview, use loopchii.com first. It is the shortest path to the outer story and the clearest contact route.",
        cta: "Open loopchii.com",
        href: "https://www.loopchii.com/"
      },
      {
        tone: "cool",
        kicker: "Public Proof",
        title: "Inspect the public repo",
        copy: "Use the public repository when you need a credible artifact instead of another promise.",
        cta: "Open Stream",
        href: "https://github.com/loopchii/Stream"
      },
      {
        tone: "mint",
        kicker: "Human Contact",
        title: "Reach a person",
        copy: "The cleanest route for serious questions is still a direct email with context, domain, and purpose.",
        cta: "Email hello@loopchii.com",
        href: "mailto:hello@loopchii.com?subject=Loopchii%20Operational%20Question"
      }
    ]
  },
  curious: {
    intro:
      "Some people land here before they know what they need. The point is to make the next useful step obvious without oversharing the system.",
    cards: [
      {
        tone: "violet",
        kicker: "Start Here",
        title: "Use the field like a map",
        copy: "Open a study track, follow a route, and let the public work tell you where to go next.",
        cta: "Stay here and explore",
        href: "#study"
      },
      {
        tone: "cool",
        kicker: "One Real Artifact",
        title: "Open a repository before a pitch",
        copy: "If you only open one thing today, make it a repository with code, tests, and a public frame that says something.",
        cta: "Open Stream",
        href: "https://github.com/loopchii/Stream"
      },
      {
        tone: "warm",
        kicker: "Company Story",
        title: "Then open the website",
        copy: "Once you have seen the inspectable surface, the broader company story usually lands more credibly and with less noise.",
        cta: "Open loopchii.com",
        href: "https://www.loopchii.com/"
      }
    ]
  }
};

const switcher = document.getElementById("audience-switcher");
const intro = document.getElementById("audience-intro");
const cards = document.getElementById("audience-cards");
const signalStrip = document.getElementById("signal-strip");
const studyGrid = document.getElementById("study-grid");
const studyDetail = document.getElementById("study-detail");
const repoCount = document.getElementById("repo-count");
const routeCount = document.getElementById("route-count");

function getDailyOffset(size) {
  if (!size) {
    return 0;
  }

  const todayKey = new Date().toISOString().slice(0, 10);
  const seed = Array.from(todayKey).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return seed % size;
}

function rotateByOffset(items) {
  const offset = getDailyOffset(items.length);
  return items.slice(offset).concat(items.slice(0, offset));
}

const orderedSignals = rotateByOffset(signals);
const orderedStudyTracks = rotateByOffset(studyTracks);

function scrollToStudy() {
  document.getElementById("study")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSignals() {
  signalStrip.innerHTML = orderedSignals
    .map(
      (signal) => `
        <button class="signal-chip signal-chip--${signal.tone}" type="button" data-study="${signal.studyId}">
          <strong>${signal.title}</strong>
          <span>${signal.detail}</span>
        </button>
      `
    )
    .join("");

  signalStrip.querySelectorAll("[data-study]").forEach((button) => {
    button.addEventListener("click", () => {
      renderStudy(button.dataset.study);
      scrollToStudy();
    });
  });
}

function renderStudy(selectedId) {
  studyGrid.innerHTML = orderedStudyTracks
    .map(
      (track) => `
        <button
          class="study-card ${track.id === selectedId ? "is-active" : ""}"
          type="button"
          data-study-card="${track.id}"
          data-tone="${track.tone}"
        >
          <span>${track.kicker}</span>
          <strong>${track.title}</strong>
        </button>
      `
    )
    .join("");

  const selected = orderedStudyTracks.find((track) => track.id === selectedId) ?? orderedStudyTracks[0];

  studyDetail.innerHTML = `
    <div class="study-detail-panel" data-tone="${selected.tone}">
      <p class="study-detail-kicker">${selected.kicker}</p>
      <h3>${selected.title}</h3>
      <p>${selected.reason}</p>
      <p class="study-detail-impact">${selected.why}</p>
      <div class="study-detail-actions">
        <a class="study-detail-link" href="${selected.href}">${selected.cta}</a>
        <span class="study-detail-note">Public continuation, not the whole map.</span>
      </div>
    </div>
  `;

  studyGrid.querySelectorAll("[data-study-card]").forEach((button) => {
    button.addEventListener("click", () => renderStudy(button.dataset.studyCard));
  });
}

function renderAudience(selectedKey) {
  const keys = Object.keys(audiencePaths);
  switcher.innerHTML = keys
    .map((key) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      const selected = key === selectedKey;
      return `<button class="audience-pill" role="tab" aria-selected="${selected}" data-key="${key}">${label}</button>`;
    })
    .join("");

  const selected = audiencePaths[selectedKey];
  intro.innerHTML = `<p>${selected.intro}</p>`;
  cards.innerHTML = selected.cards
    .map(
      (card) => `
        <a class="audience-card" data-tone="${card.tone}" href="${card.href}">
          <span class="card-kicker">${card.kicker}</span>
          <strong>${card.title}</strong>
          <p>${card.copy}</p>
          <span class="card-cta">${card.cta}</span>
        </a>
      `
    )
    .join("");

  switcher.querySelectorAll("[data-key]").forEach((button) => {
    button.addEventListener("click", () => renderAudience(button.dataset.key));
  });
}

function setCounts() {
  repoCount.textContent = String(1).padStart(2, "0");
  routeCount.textContent = String(4).padStart(2, "0");
}

function bootSignalField() {
  const canvas = document.getElementById("signal-field");
  const context = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let frame = 0;
  const points = Array.from({ length: 24 }, (_, index) => ({
    index,
    anchorX: 0.12 + (index % 6) * 0.16,
    anchorY: 0.14 + Math.floor(index / 6) * 0.18,
    offset: index * 0.43
  }));

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw() {
    frame += prefersReducedMotion ? 0 : 0.0048;
    context.clearRect(0, 0, width, height);

    const resolved = points.map((point) => ({
      x: width * point.anchorX + Math.sin(frame + point.offset) * 22,
      y: height * point.anchorY + Math.cos(frame * 1.2 + point.offset) * 16
    }));

    context.lineWidth = 1;
    resolved.forEach((point, index) => {
      for (let next = index + 1; next < resolved.length; next += 1) {
        const target = resolved[next];
        const dx = target.x - point.x;
        const dy = target.y - point.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 220) {
          const alpha = 0.16 * (1 - distance / 220);
          const gradient = context.createLinearGradient(point.x, point.y, target.x, target.y);
          gradient.addColorStop(0, `rgba(167, 139, 250, ${alpha})`);
          gradient.addColorStop(1, `rgba(251, 146, 60, ${alpha * 0.92})`);
          context.strokeStyle = gradient;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(target.x, target.y);
          context.stroke();
        }
      }
    });

    resolved.forEach((point, index) => {
      const radius = 1.4 + (index % 3) * 0.8;
      const dot = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, 14);
      dot.addColorStop(0, "rgba(255, 240, 224, 0.95)");
      dot.addColorStop(0.4, index % 2 === 0 ? "rgba(167, 139, 250, 0.82)" : "rgba(251, 146, 60, 0.82)");
      dot.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = dot;
      context.beginPath();
      context.arc(point.x, point.y, radius * 4.5, 0, Math.PI * 2);
      context.fill();
    });

    if (!prefersReducedMotion) {
      window.requestAnimationFrame(draw);
    }
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

renderSignals();
renderStudy(orderedStudyTracks[0]?.id);
setCounts();
renderAudience("engineers");
bootSignalField();
