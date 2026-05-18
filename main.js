(function () {
    "use strict";

    var navToggle = document.getElementById("nav-toggle");
    var navMain = document.getElementById("nav-main");
    var stickyBar = document.getElementById("home-sticky-bar");
    var hero = document.querySelector(".home-hero");

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

    if (stickyBar && hero) {
        var stickyObserver = new IntersectionObserver(
            function (entries) {
                var pastHero = !entries[0].isIntersecting;
                document.body.classList.toggle("home-scrolled", pastHero);
                if (pastHero) {
                    stickyBar.removeAttribute("hidden");
                } else {
                    stickyBar.setAttribute("hidden", "");
                }
            },
            { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
        );
        stickyObserver.observe(hero);
    }

    var revealTargets = document.querySelectorAll(".reveal");
    if (revealTargets.length && "IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
        );
        revealTargets.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        revealTargets.forEach(function (el) {
            el.classList.add("is-visible");
        });
    }
})();
