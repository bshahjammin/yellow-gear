(function () {
  "use strict";

  function showTab(tabId) {
    document.querySelectorAll(".panel").forEach(function (panel) {
      panel.classList.toggle("active", panel.id === tabId);
    });

    document.querySelectorAll(".nav button").forEach(function (button) {
      button.classList.toggle("active", button.dataset.tab === tabId);
    });

    window.scrollTo({
      top: document.querySelector(".nav").offsetTop,
      behavior: "smooth"
    });
  }

  document.querySelectorAll("[data-tab]").forEach(function (button) {
    button.addEventListener("click", function () {
      showTab(button.dataset.tab);
    });
  });

  document.querySelectorAll("[data-go]").forEach(function (button) {
    button.addEventListener("click", function () {
      showTab(button.dataset.go);
    });
  });

  document.getElementById("shareBtn").addEventListener("click", async function () {
    var shareData = {
      title: "Yellow StormGears BIOGLOW Team HQ",
      text: "Yellow StormGears first-year BIOGLOW FLL Challenge reference guide.",
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      window.alert("App link copied.");
    } catch (error) {
      return;
    }
  });
}());
