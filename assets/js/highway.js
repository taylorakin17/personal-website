/* Taylor Akin — Night Drive interactive highway (chase-cam perspective)
   Drone-behind-the-car view: perspective road rolling toward the viewer,
   exits on an overhead gantry. Infinite loop — exits approach only when
   chosen (click / keyboard), via blinker + veer-off transition. */
(function () {
  "use strict";

  var PATHS = [
    { key: "dev", href: "ai-development/", exit: "Exit 1", label: "AI & Development", tint: "teal" },
    { key: "music", href: "music/", exit: "Exit 2", label: "Music Performance", tint: "rose" },
    { key: "consulting", href: "consulting-leadership/", exit: "Exit 3", label: "Consulting & Leadership", tint: "green" }
  ];
  var HOME = { key: "home", href: ".", exit: "Re-enter", label: "Back on the highway", tint: "sodium" };

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function stars() {
    var out = "";
    for (var i = 0; i < 30; i++) {
      var x = Math.round(Math.random() * 1440);
      var y = Math.round(Math.random() * 200);
      var r = (0.7 + Math.random() * 0.9).toFixed(1);
      var o = (0.15 + Math.random() * 0.45).toFixed(2);
      var tw = Math.random() > 0.6 ? ' class="hw-twinkle" style="animation-delay:' + (Math.random() * 4).toFixed(1) + 's"' : "";
      out += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#f4f1e8" opacity="' + o + '"' + tw + "/>";
    }
    return out;
  }

  var MESAS = "M0 60 L0 34 L90 34 L110 20 L150 20 L170 34 L320 34 L320 60 Z " +
    "M360 60 L360 42 L520 42 L545 28 L600 28 L620 42 L780 42 L780 60 Z " +
    "M950 60 L950 36 L1040 36 L1058 22 L1118 22 L1136 36 L1290 36 L1290 60 Z " +
    "M1320 60 L1320 44 L1440 44 L1440 60 Z";

  /* Rear view of the car — 1959 Cadillac Eldorado (decision #26) */
  function carSVG() {
    return '<div class="hw-carbob"><svg viewBox="0 0 260 170" aria-hidden="true">' +
      '<ellipse cx="130" cy="154" rx="108" ry="7" fill="#000000" opacity="0.5"/>' +
      /* tires */
      '<rect x="52" y="134" width="30" height="16" rx="5" fill="#05060a"/>' +
      '<rect x="178" y="134" width="30" height="16" rx="5" fill="#05060a"/>' +
      /* tailfins */
      '<path d="M26 88 L31 46 C32 42 36 42 37 46 L44 88 Z" fill="#2b2144"/>' +
      '<path d="M216 88 L223 46 C224 42 228 42 229 46 L234 88 Z" fill="#2b2144"/>' +
      /* cabin + panoramic glass */
      '<path d="M62 88 C64 66 74 56 92 54 L168 54 C186 56 196 66 198 88 Z" fill="#372a54"/>' +
      '<path d="M74 86 C77 70 84 62 96 61 L164 61 C176 62 183 70 186 86 Z" fill="#171326"/>' +
      /* wide low body */
      '<path d="M18 142 L18 108 C18 96 24 90 34 88 L226 88 C236 90 242 96 242 108 L242 142 Z" fill="#372a54"/>' +
      '<line x1="48" y1="100" x2="212" y2="100" stroke="#5b4a86" stroke-width="1.5" opacity="0.4"/>' +
      /* bullet taillights in the fins */
      '<circle class="hw-tl" cx="35" cy="72" r="5" fill="#e2554d"/>' +
      '<circle cx="35" cy="72" r="8" fill="none" stroke="#e2554d" stroke-width="1.5" opacity="0.4"/>' +
      '<circle class="hw-tl" cx="225" cy="72" r="5" fill="#e2554d"/>' +
      '<circle cx="225" cy="72" r="8" fill="none" stroke="#e2554d" stroke-width="1.5" opacity="0.4"/>' +
      /* right bullet doubles as the turn signal */
      '<circle class="hw-signal" cx="225" cy="72" r="6" fill="#f0a63f"/>' +
      /* chrome bumper, exhausts, plate */
      '<rect x="20" y="126" width="220" height="13" rx="6" fill="#9aa1af" opacity="0.8"/>' +
      '<ellipse cx="70" cy="132" rx="6" ry="3" fill="#05060a"/>' +
      '<ellipse cx="190" cy="132" rx="6" ry="3" fill="#05060a"/>' +
      '<rect x="118" y="127" width="24" height="11" rx="2" fill="#10141c" stroke="#262c3a"/>' +
      "</svg></div>";
  }

  function sceneHTML() {
    return '<svg class="hw-sky" viewBox="0 0 1440 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + stars() + "</svg>" +
      '<svg class="hw-mesas" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="' + MESAS + '" fill="#0e1119"/></svg>' +
      '<div class="hw-horizon" aria-hidden="true"></div>' +
      '<div class="hw-ground" aria-hidden="true">' +
      '<div class="hw-plane">' +
      '<div class="hw-roll hw-dashline hw-dashline--l"></div>' +
      '<div class="hw-roll hw-dashline hw-dashline--r"></div>' +
      '<div class="hw-roll hw-ticks hw-ticks--left"></div>' +
      '<div class="hw-roll hw-ticks hw-ticks--right"></div>' +
      "</div>" +
      '<div class="hw-passer"><span></span><span></span></div>' +
      "</div>" +
      '<div class="hw-beamglow" aria-hidden="true"></div>' +
      '<div class="hw-car" aria-hidden="true">' + carSVG() + "</div>";
  }

  function signHTML(exit) {
    return '<a class="hw-sign hw-sign--' + exit.tint + '" href="' + exit.href + '" data-exit>' +
      '<span class="hw-sign-exit">' + exit.exit + "</span>" +
      '<span class="hw-sign-label">' + exit.label + "</span>" +
      "</a>";
  }

  function build(container) {
    var mode = container.getAttribute("data-highway") || "full";
    var current = container.getAttribute("data-current") || "";
    container.classList.add("highway--" + mode);

    var exits;
    if (mode === "full") {
      exits = PATHS.slice();
    } else {
      exits = [];
      if (current !== "home") exits.push(HOME);
      PATHS.forEach(function (p) { if (p.key !== current) exits.push(p); });
    }

    container.innerHTML = sceneHTML() +
      '<nav class="hw-signs" aria-label="' + (mode === "full" ? "Choose a path" : "Highway navigation") + '">' +
      exits.map(signHTML).join("") + "</nav>";

    /* Exit-taking transition: blinker, speed up, veer off, fade */
    var links = container.querySelectorAll("[data-exit]");
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (reducedMotion || container.classList.contains("is-exiting")) return;
        e.preventDefault();
        container.classList.add("is-exiting");
        link.classList.add("is-taken");
        setTimeout(function () { window.location.href = link.href; }, 1050);
      });
    });

    /* Arrow keys steer between signs */
    container.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var list = Array.prototype.slice.call(links);
      var i = list.indexOf(document.activeElement);
      if (i === -1) return;
      e.preventDefault();
      var next = e.key === "ArrowRight" ? Math.min(i + 1, list.length - 1) : Math.max(i - 1, 0);
      list[next].focus();
    });

    /* Rare oncoming car (skipped under reduced motion) */
    if (!reducedMotion) {
      var passer = container.querySelector(".hw-passer");
      var schedule = function () {
        setTimeout(function () { passer.classList.add("run"); }, 14000 + Math.random() * 16000);
      };
      passer.addEventListener("animationend", function () {
        passer.classList.remove("run");
        schedule();
      });
      schedule();
    }
  }

  document.querySelectorAll("[data-highway]").forEach(build);
})();
