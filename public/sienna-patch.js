/**
 * Sienna Accessibility Widget — Custom Theme Patch
 * Loaded lazily (after window.load + delay) to avoid impacting Lighthouse scores.
 */
(function patchSienna() {
  var patched = false;

  function getCSSVar(name) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
  }

  function buildCustomDropdown(sel) {
    if (patched || !sel) return;
    patched = true;

    var primary = getCSSVar("--color-primary") || "#136dec";
    var surface = getCSSVar("--color-surface") || "#ffffff";
    var border = getCSSVar("--color-border") || "#e2e8f0";
    var text = getCSSVar("--color-text") || "#0f172a";
    var bgAlt = getCSSVar("--color-bg-alt") || "#f6f7f8";
    var muted = getCSSVar("--color-text-muted") || "#64748b";

    var options = Array.from(sel.options);
    var current = sel.selectedIndex >= 0 ? sel.selectedIndex : 0;
    sel.style.display = "none";

    var wrapper = document.createElement("div");
    wrapper.id = "asw-lang-custom";
    wrapper.style.cssText =
      "position:relative;width:100%;font-size:14px;margin-bottom:4px;";

    // Trigger button - matches site's CustomSelect style
    var btn = document.createElement("button");
    btn.type = "button";
    btn.style.cssText = [
      "width:100%",
      "padding:9px 36px 9px 12px",
      "border:1px solid " + border,
      "border-radius:8px",
      "background:" + surface,
      "color:" + text,
      "cursor:pointer",
      "text-align:left",
      "font-size:14px",
      "position:relative",
      "white-space:nowrap",
      "overflow:hidden",
      "text-overflow:ellipsis",
      "box-sizing:border-box",
      "font-family:inherit",
      "transition:border-color 0.2s",
    ].join(";");
    btn.textContent = options[current]
      ? options[current].text
      : "Select language";

    btn.addEventListener("mouseover", function () {
      this.style.borderColor = primary;
    });
    btn.addEventListener("mouseout", function () {
      if (list.style.display !== "block") this.style.borderColor = border;
    });

    var chev = document.createElement("span");
    chev.textContent = "expand_more";
    chev.style.cssText = [
      "position:absolute",
      "right:10px",
      "top:50%",
      "transform:translateY(-50%)",
      "pointer-events:none",
      "color:" + muted,
      "font-family:'Material Icons'",
      "font-size:18px",
      "transition:transform 0.2s",
    ].join(";");
    btn.appendChild(chev);

    // Dropdown list panel
    var list = document.createElement("ul");
    list.style.cssText = [
      "display:none",
      "position:absolute",
      "top:calc(100% + 4px)",
      "left:0",
      "right:0",
      "max-height:200px",
      "overflow-y:auto",
      "border:1px solid " + border,
      "border-radius:8px",
      "background:" + surface,
      "z-index:99999",
      "list-style:none",
      "margin:0",
      "padding:4px 0",
      "box-shadow:0 8px 24px rgba(0,0,0,0.12)",
    ].join(";");

    function highlight(li, on) {
      var idx = parseInt(li.dataset.idx);
      if (idx === sel.selectedIndex) return;
      li.style.background = on ? getCSSVar("--color-bg-alt") : "";
      li.style.color = on
        ? getCSSVar("--color-primary")
        : getCSSVar("--color-text");
    }

    options.forEach(function (opt, i) {
      var li = document.createElement("li");
      li.textContent = opt.text;
      li.dataset.idx = i;
      li.style.cssText = [
        "padding:8px 14px",
        "cursor:pointer",
        "font-size:13px",
        "color:" + text,
        "white-space:nowrap",
        "overflow:hidden",
        "text-overflow:ellipsis",
        "border-radius:4px",
        "margin:1px 4px",
        "transition:background 0.15s,color 0.15s",
      ].join(";");

      if (i === current) {
        li.dataset.selected = "true";
        li.style.background = primary;
        li.style.color = "#fff";
      }

      li.addEventListener("mouseover", function () {
        highlight(this, true);
      });
      li.addEventListener("mouseout", function () {
        highlight(this, false);
      });

      li.addEventListener("click", function () {
        var idx = parseInt(this.dataset.idx);
        sel.selectedIndex = idx;
        sel.dispatchEvent(new Event("change", { bubbles: true }));
        // Update button text (textNode is first child, before the chev span)
        btn.firstChild.nodeValue = options[idx].text;
        list.querySelectorAll("li").forEach(function (l) {
          delete l.dataset.selected;
          l.style.background = "";
          l.style.color = getCSSVar("--color-text");
        });
        this.dataset.selected = "true";
        this.style.background = getCSSVar("--color-primary");
        this.style.color = "#fff";
        list.style.display = "none";
        chev.style.transform = "translateY(-50%) rotate(0deg)";
        btn.style.borderColor = border;
      });
      list.appendChild(li);
    });

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = list.style.display === "block";
      if (!isOpen) {
        // Refresh all colors live from current theme before showing
        var p = getCSSVar("--color-primary");
        var t = getCSSVar("--color-text");
        var s = getCSSVar("--color-surface");
        var b = getCSSVar("--color-border");
        list.style.borderColor = b;
        list.style.background = s;
        list.querySelectorAll("li").forEach(function (l) {
          var idx = parseInt(l.dataset.idx);
          if (idx === sel.selectedIndex) {
            l.dataset.selected = "true";
            l.style.background = p;
            l.style.color = "#fff";
          } else {
            delete l.dataset.selected;
            l.style.background = "";
            l.style.color = t;
          }
        });
        btn.style.borderColor = p;
      } else {
        btn.style.borderColor = getCSSVar("--color-border");
      }
      list.style.display = isOpen ? "none" : "block";
      chev.style.transform = isOpen
        ? "translateY(-50%) rotate(0deg)"
        : "translateY(-50%) rotate(180deg)";
      if (!isOpen) {
        var selLi = list.querySelector(
          "li[data-idx='" + sel.selectedIndex + "']",
        );
        if (selLi) selLi.scrollIntoView({ block: "nearest" });
      }
    });

    document.addEventListener("click", function () {
      list.style.display = "none";
      chev.style.transform = "translateY(-50%) rotate(0deg)";
      btn.style.borderColor = border;
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(list);
    sel.parentNode.insertBefore(wrapper, sel);
  }

  function tryPatch() {
    var sel = document.getElementById("asw-language");
    if (sel && !patched) buildCustomDropdown(sel);
  }

  tryPatch();
  var observer = new MutationObserver(function () {
    if (!patched) tryPatch();
    if (patched) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // --- Extra patches: reset spin + font display sync ---
  function patchResetAndAmount() {
    var resetBtn = document.querySelector(".asw-menu-reset");
    if (!resetBtn || resetBtn._ewPatched) return;
    resetBtn._ewPatched = true;

    resetBtn.addEventListener("click", function () {
      // Spin via CSS keyframe class — no inline transitions to fight
      var svg = this.querySelector("svg");
      if (svg && !svg.classList.contains("asw-spinning")) {
        svg.classList.add("asw-spinning");
        // After animation completes, remove class (snaps invisibly back to 0deg)
        setTimeout(function () {
          svg.classList.remove("asw-spinning");
        }, 580);
      }
      // Sienna resets internal state but doesn't update .asw-amount UI — fix it
      setTimeout(function () {
        var amount = document.querySelector(".asw-amount");
        if (amount) amount.textContent = "100%";
      }, 60);
    });
  }

  // Watch for Sienna widget to appear then apply extra patches
  var extraObserver = new MutationObserver(function () {
    patchResetAndAmount();
  });
  extraObserver.observe(document.body, { childList: true, subtree: true });
  patchResetAndAmount(); // try immediately
})();
