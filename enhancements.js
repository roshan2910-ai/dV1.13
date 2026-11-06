/* Inside Track motion and visitor notice interactions */
(function () {
  "use strict";
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  ready(function () {
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Subtle reveal-on-scroll for content blocks.
    var revealTargets = document.querySelectorAll(".section-heading, .story-card, .stat-item, .archive-card, .journalist-card, .exhibition-card, .document-card, .about-content");
    if ("IntersectionObserver" in window && !reduceMotion) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("it-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealTargets.forEach(function (el) { el.classList.add("it-reveal"); observer.observe(el); });
    }

    // Rotating homepage highlights. Controls and reduced-motion preference are respected.
    var carousel = document.getElementById("itHighlightsCarousel");
    if (carousel) {
      var slides = Array.prototype.slice.call(carousel.querySelectorAll(".it-slide"));
      var dots = Array.prototype.slice.call(document.querySelectorAll(".it-dot"));
      var index = 0, timer = null, paused = !!reduceMotion;
      function show(next) {
        index = (next + slides.length) % slides.length;
        slides.forEach(function (slide, i) {
          var active = i === index;
          slide.classList.toggle("is-active", active);
          slide.setAttribute("aria-hidden", active ? "false" : "true");
        });
        dots.forEach(function (dot, i) {
          var active = i === index;
          dot.classList.toggle("is-active", active);
          dot.setAttribute("aria-pressed", active ? "true" : "false");
        });
      }
      function stop() { if (timer) window.clearInterval(timer); timer = null; }
      function start() {
        stop();
        if (!paused && slides.length > 1) timer = window.setInterval(function () { show(index + 1); }, 6500);
      }
      dots.forEach(function (dot, i) { dot.addEventListener("click", function () { show(i); start(); }); });
      var prev = document.querySelector(".it-prev"), next = document.querySelector(".it-next");
      var pause = document.querySelector(".it-pause");
      if (prev) prev.addEventListener("click", function () { show(index - 1); start(); });
      if (next) next.addEventListener("click", function () { show(index + 1); start(); });
      if (pause) pause.addEventListener("click", function () {
        paused = !paused;
        pause.textContent = paused ? "▶" : "Ⅱ";
        pause.setAttribute("aria-label", paused ? "Resume automatic highlights" : "Pause automatic highlights");
        if (paused) stop(); else start();
      });
      carousel.addEventListener("mouseenter", stop);
      carousel.addEventListener("mouseleave", start);
      carousel.addEventListener("focusin", stop);
      carousel.addEventListener("focusout", start);
      show(0); start();
    }

    // Scrolling announcement ticker on the homepage only.
    if (document.body && document.getElementById("home") && !document.querySelector(".it-ticker")) {
      var ticker = document.createElement("div");
      ticker.className = "it-ticker";
      ticker.setAttribute("aria-label", "Museum announcement");
      ticker.innerHTML = '<div class="it-ticker-track">PRESERVING JOURNALISM HISTORY • EXPLORE THE ARCHIVE • DISCOVER THE PEOPLE BEHIND THE HEADLINES • SUPPORT RESEARCH AND EDUCATION •&nbsp;&nbsp; PRESERVING JOURNALISM HISTORY • EXPLORE THE ARCHIVE • DISCOVER THE PEOPLE BEHIND THE HEADLINES • SUPPORT RESEARCH AND EDUCATION •&nbsp;&nbsp;</div>';
      var hero = document.querySelector(".hero");
      if (hero && hero.parentNode) hero.parentNode.insertBefore(ticker, hero.nextSibling);
    }

    // Gentle, dismissible visitor notice. No payment is collected and no donation is implied.
    var isAdmin = /admin\.html$/i.test(window.location.pathname);
    var noticeDismissed = false;
    try { noticeDismissed = sessionStorage.getItem("insideTrackNoticeDismissed") === "1"; } catch (e) {}
    if (!isAdmin && !noticeDismissed) {
      window.setTimeout(function () {
        if (document.getElementById("insideTrackVisitorNotice")) return;
        var notice = document.createElement("aside");
        notice.className = "it-notice";
        notice.id = "insideTrackVisitorNotice";
        notice.setAttribute("role", "dialog");
        notice.setAttribute("aria-label", "Inside Track museum information");
        notice.innerHTML =
          '<div class="it-notice-top"><span class="it-notice-label">Museum notice</span><button type="button" class="it-notice-close" aria-label="Close notice">×</button></div>' +
          '<h3>Help preserve the stories that matter.</h3>' +
          '<p>Inside Track is dedicated to preserving journalism history. If you would like to support this mission, please contact the museum through its official channels for verified contribution information. Online donations are not enabled on this website.</p>' +
          '<a href="' + (document.getElementById("about") ? "#about" : "index.html#about") + '" class="it-notice-link">Read our mission →</a>';
        document.body.appendChild(notice);
        var close = notice.querySelector(".it-notice-close");
        function dismiss() {
          notice.remove();
          try { sessionStorage.setItem("insideTrackNoticeDismissed", "1"); } catch (e) {}
        }
        close.addEventListener("click", dismiss);
        notice.querySelector(".it-notice-link").addEventListener("click", dismiss);
      }, 12000);
    }
  });
})();
