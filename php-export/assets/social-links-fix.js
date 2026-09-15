(function () {
  var FOOTER_LINKEDIN = "https://www.linkedin.com/company/sbcglobal/";
  var FACEBOOK_URL = "https://www.facebook.com/sbcgroup.in";
  var INSTAGRAM_URL = "https://www.instagram.com/sbcgroup.in";
  var FOUNDER_LINKEDIN = "https://www.linkedin.com/in/drsagarburse/";

  function buildIconLi(svgInner, label, href) {
    var li = document.createElement("li");
    li.className = "flex items-start gap-2 text-[14px] leading-relaxed break-words";
    li.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide mt-0.5 size-4 shrink-0 text-paper" aria-hidden="true">' +
      svgInner +
      '</svg><a href="' +
      href +
      '" target="_blank" rel="noreferrer" class="text-paper/85 transition-colors hover:text-gold">' +
      label +
      "</a>";
    return li;
  }

  function patchFooter(footer) {
    var linkedinAnchor = null;
    var anchors = footer.querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      if (a.textContent.trim() === "LinkedIn" && a.closest("li")) {
        linkedinAnchor = a;
        break;
      }
    }
    if (!linkedinAnchor) return;

    if (linkedinAnchor.getAttribute("href") !== FOOTER_LINKEDIN) {
      linkedinAnchor.setAttribute("href", FOOTER_LINKEDIN);
      linkedinAnchor.setAttribute("target", "_blank");
      linkedinAnchor.setAttribute("rel", "noreferrer");
    }

    var linkedinLi = linkedinAnchor.closest("li");
    var hasFacebook = !!footer.querySelector('a[href="' + FACEBOOK_URL + '"]');
    if (!hasFacebook) {
      var fbLi = buildIconLi(
        '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
        "Facebook",
        FACEBOOK_URL
      );
      var igLi = buildIconLi(
        '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>',
        "Instagram",
        INSTAGRAM_URL
      );
      linkedinLi.insertAdjacentElement("afterend", igLi);
      linkedinLi.insertAdjacentElement("afterend", fbLi);
    }
  }

  function patchFounderButton() {
    var anchors = document.querySelectorAll('a[href="https://www.linkedin.com/company/sbcgroup-in/"]');
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      if (a.textContent.trim() === "LinkedIn Profile") {
        a.setAttribute("href", FOUNDER_LINKEDIN);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noreferrer");
      }
    }
  }

  function runPatch() {
    var footers = document.querySelectorAll("footer");
    for (var i = 0; i < footers.length; i++) {
      patchFooter(footers[i]);
    }
    patchFounderButton();
  }

  function start() {
    runPatch();
    var scheduled = false;
    var observer = new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        runPatch();
      });
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  // Wait until after hydration (window "load" fires once every script, including
  // the deferred hydration module, has finished its initial synchronous run) plus
  // a short buffer, so this doesn't get clobbered by React reconciling the DOM.
  if (document.readyState === "complete") {
    setTimeout(start, 100);
  } else {
    window.addEventListener("load", function () {
      setTimeout(start, 100);
    });
  }
})();
