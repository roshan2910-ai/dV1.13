/* Inside Track: one fixed editorial colour identity + optional dark appearance */
(function () {
  "use strict";
  var MODE_KEY = "insideTrackDisplayMode";
  var root = document.documentElement;

  function safeGet(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch (e) { return fallback; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function applyMode(mode) {
    var selected = mode === "dark" ? "dark" : "light";
    root.setAttribute("data-mode", selected);
    safeSet(MODE_KEY, selected);
    var toggle = document.getElementById("insideTrackModeToggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", selected === "dark" ? "true" : "false");
      toggle.setAttribute("aria-label", selected === "dark" ? "Switch to light mode" : "Switch to dark mode");
      toggle.textContent = selected === "dark" ? "☀" : "☾";
      toggle.title = selected === "dark" ? "Switch to light mode" : "Switch to dark mode";
    }
    var label = document.querySelector("#insideTrackAppearanceControl .it-mode-label");
    if (label) label.textContent = selected === "dark" ? "Light mode" : "Dark mode";
  }

  /* Lock the website to its unified brand palette. */
  root.setAttribute("data-theme", "original");

  function addControl() {
    if (document.getElementById("insideTrackAppearanceControl")) return;
    var wrap = document.createElement("div");
    wrap.id = "insideTrackAppearanceControl";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Display mode");

    var mode = document.createElement("button");
    mode.type = "button";
    mode.id = "insideTrackModeToggle";
    mode.className = "it-mode-toggle";
    mode.addEventListener("click", function () {
      applyMode(root.getAttribute("data-mode") === "dark" ? "light" : "dark");
    });

    var modeText = document.createElement("span");
    modeText.className = "it-mode-label";
    modeText.textContent = "Dark mode";

    wrap.appendChild(mode);
    wrap.appendChild(modeText);

    var topBar = document.querySelector(".top-bar-content") ||
                 document.querySelector(".topbar-inner") ||
                 document.querySelector(".topbar .container") ||
                 document.querySelector(".top-bar") ||
                 document.querySelector(".topbar") ||
                 document.querySelector(".announcement-bar");
    if (topBar) {
      topBar.appendChild(wrap);
      topBar.classList.add("it-topbar-controls-host");
    } else {
      document.body.insertBefore(wrap, document.body.firstChild);
    }
    applyMode(safeGet(MODE_KEY, "light"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addControl);
  else addControl();
})();
