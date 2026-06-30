const signals = [
  "Inspectable work should stay useful before it becomes persuasive.",
  "Ethics and governance read better when they stop sounding like slogans.",
  "High-risk domains usually reveal where systems break before anyone else wants to admit it.",
  "Engineers trust what they can read, test, and improve without being oversold.",
  "Research surfaces should reward curiosity without pretending to expose the whole system."
];

const audiencePaths = {
  engineers: {
    intro:
      "Start with the parts that can be inspected directly: public repositories, browser surfaces, contribution guidance, and bounded claims. This path is for people who want signal before story.",
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
        title: "Read how trust is framed",
        copy: "See how the public surface handles ethics, review, consequence, and restraint without flattening everything into sales copy.",
        cta: "Read public framework",
        href: "https://github.com/loopchii/.github"
      },
      {
        tone: "mint",
        kicker: "Contact",
        title: "Ask A Specific Question",
        copy: "If something is unclear, the fastest route is usually a precise question with a link and a reason you care.",
        cta: "Write hello@loopchii.com",
        href: "mailto:hello@loopchii.com?subject=Loopchii%20GitHub%20Question"
      }
    ]
  },
  researchers: {
    intro:
      "This route is for people studying consequence, governance, media, trust, or the structure of technical claims. The public material is designed to be readable without flattening the work into buzzwords.",
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
        copy: "The research environment shows how the public story and the working environment relate without collapsing into the same surface.",
        cta: "Open research",
        href: "https://www.loopchii.space/"
      },
      {
        tone: "warm",
        kicker: "Company Context",
        title: "Use loopchii.com for context",
        copy: "The company site gives the higher-level frame without turning public materials into a product manual.",
        cta: "Visit site",
        href: "https://www.loopchii.com/"
      }
    ]
  },
  operators: {
    intro:
      "Operators usually need the shortest path to relevance: what exists, what can be trusted, what belongs in public, and how to reach someone without a maze.",
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
        copy: "Use the public repository when you need a credible artifact instead of a marketing paragraph.",
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
      "Some people land here before they know what they need. That is fine. The point of the public surface is to make the next useful step obvious without oversharing the entire system.",
    cards: [
      {
        tone: "violet",
        kicker: "Start Lightly",
        title: "Open the field",
        copy: "Use this page as a map: public repo, company site, research environment, and a direct human contact route.",
        cta: "Stay here and explore",
        href: "#top"
      },
      {
        tone: "cool",
        kicker: "Public Work",
        title: "See one real repository",
        copy: "If you only open one thing today, make it a repository with code, tests, and a public framework that actually says something.",
        cta: "Open Stream",
        href: "https://github.com/loopchii/Stream"
      },
      {
        tone: "warm",
        kicker: "Company Story",
        title: "Then open the website",
        copy: "Once you have seen the inspectable surface, the broader company story lands differently and usually more credibly.",
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
const repoCount = document.getElementById("repo-count");
const routeCount = document.getElementById("route-count");

function renderSignals() {
  signalStrip.innerHTML = signals
    .map((line) => `<li>${line}</li>`)
    .join("");
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
setCounts();
renderAudience("engineers");
bootSignalField();
