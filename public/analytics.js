(function () {
  "use strict";

  var endpoint = "https://karingforkids.justneedsdone.com/api/analytics";

  function sessionId() {
    var key = "jnd_analytics_session";
    var value = sessionStorage.getItem(key);
    if (!value) {
      value = typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : Date.now().toString(36) + Math.random().toString(36).slice(2);
      sessionStorage.setItem(key, value);
    }
    return value;
  }

  function deviceType() {
    if (window.innerWidth < 768) return "mobile";
    if (window.innerWidth < 1100) return "tablet";
    return "desktop";
  }

  function isOptedOut() {
    return document.cookie.split(";").some(function (cookie) {
      return cookie.trim() === "jnd_analytics_opt_out=1";
    });
  }

  function safeTarget(link) {
    var href = link.getAttribute("href") || "";
    if (href.indexOf("tel:") === 0) return "business-telephone";
    if (href.indexOf("mailto:") === 0 || href.indexOf("/cdn-cgi/l/email-protection") === 0) return "business-email";
    try {
      var destination = new URL(link.href, window.location.href);
      return destination.origin === window.location.origin
        ? destination.pathname
        : destination.hostname + destination.pathname;
    } catch (_error) {
      return href.slice(0, 300);
    }
  }

  function send(eventType, target) {
    if (navigator.doNotTrack === "1" || isOptedOut()) return;

    var url = new URL(window.location.href);
    var referrerHost;
    try {
      referrerHost = document.referrer ? new URL(document.referrer).hostname : undefined;
    } catch (_error) {
      referrerHost = undefined;
    }

    var body = JSON.stringify({
      siteId: "just-needs-done",
      eventType: eventType,
      target: target,
      sessionId: sessionId(),
      path: url.pathname,
      referrerHost: referrerHost,
      deviceType: deviceType(),
      utmSource: url.searchParams.get("utm_source") || undefined,
      utmMedium: url.searchParams.get("utm_medium") || undefined,
      utmCampaign: url.searchParams.get("utm_campaign") || undefined,
      utmContent: url.searchParams.get("utm_content") || undefined
    });

    var blob = new Blob([body], { type: "text/plain;charset=UTF-8" });
    if (!navigator.sendBeacon(endpoint, blob)) {
      fetch(endpoint, { method: "POST", body: body, mode: "no-cors", keepalive: true });
    }
  }

  send("page_view");

  document.addEventListener("click", function (event) {
    var target = event.target;
    var link = target && target.closest ? target.closest("a") : null;
    if (!link) return;

    var href = link.getAttribute("href") || "";
    if (href.indexOf("#") === 0) return;
    var eventType = href.indexOf("tel:") === 0 || href.indexOf("mailto:") === 0 || href.indexOf("/cdn-cgi/l/email-protection") === 0
      ? "contact_click"
      : "link_click";
    send(eventType, safeTarget(link));
  });
})();
