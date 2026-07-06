/* Taylor Akin — Night Drive behaviors */
(function () {
  "use strict";

  /* Nav scroll state */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Scroll reveals */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Timeline filters (Résumé page) */
  var filterBar = document.querySelector(".filter-bar");
  if (filterBar) {
    var pills = filterBar.querySelectorAll(".filter-pill");
    var entries = document.querySelectorAll(".timeline-entry");
    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        pills.forEach(function (p) { p.classList.remove("is-active"); });
        pill.classList.add("is-active");
        var filter = pill.getAttribute("data-filter");
        entries.forEach(function (entry) {
          var cats = (entry.getAttribute("data-cats") || "").split(" ");
          var show = filter === "all" || cats.indexOf(filter) !== -1;
          entry.classList.toggle("is-dimmed", !show);
        });
      });
    });
  }

  /* Contact form: intent routing + helper text */
  var form = document.querySelector(".contact-form");
  if (form) {
    var helpers = {
      project: "A sentence about the manual process you're stuck with is a perfect start.",
      booking: "Include dates, venue, and repertoire if you have them.",
      role: "A link to the role or a line about the team is plenty.",
      other: ""
    };
    var helperEl = form.querySelector(".intent-helper");
    var intentPills = form.querySelectorAll(".intent-pill");
    intentPills.forEach(function (pill) {
      var input = pill.querySelector("input");
      input.addEventListener("change", function () {
        intentPills.forEach(function (p) { p.classList.remove("is-selected"); });
        pill.classList.add("is-selected");
        if (helperEl) helperEl.textContent = helpers[input.value] || "";
      });
    });

    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      if (action.indexOf("FORM_ENDPOINT") !== -1) {
        /* Backend not wired yet — wired up at deploy (Formspree or Vercel function) */
        e.preventDefault();
        if (status) {
          status.textContent =
            "The form backend isn't connected yet — it gets wired up at deploy. For now, reach out on LinkedIn.";
        }
      }
    });
  }

  /* Footer year */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
