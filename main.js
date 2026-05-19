(function () {
    "use strict";

    var navToggle = document.getElementById("nav-toggle");
    var navMain = document.getElementById("nav-main");

    if (navToggle && navMain) {
        var closeNav = function () {
            navMain.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Open menu");
            document.body.classList.remove("nav-open");
        };

        navToggle.addEventListener("click", function () {
            var isOpen = navMain.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
            document.body.classList.toggle("nav-open", isOpen);
        });

        navMain.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeNav);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeNav();
            }
        });
    }
})();
