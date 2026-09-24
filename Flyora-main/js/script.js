```javascript
const body = document.documentElement;


/* =========================
   DAY / NIGHT MODE
========================= */

const themeButton =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("flyoraTheme");


if (savedTheme === "dark") {

    body.setAttribute(
        "data-theme",
        "dark"
    );

    if (themeButton) {
        themeButton.textContent = "☀";
    }

}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            const current =
                body.getAttribute(
                    "data-theme"
                );


            if (current === "dark") {

                body.removeAttribute(
                    "data-theme"
                );

                localStorage.setItem(
                    "flyoraTheme",
                    "light"
                );

                themeButton.textContent =
                    "☾";

            } else {

                body.setAttribute(
                    "data-theme",
                    "dark"
                );

                localStorage.setItem(
                    "flyoraTheme",
                    "dark"
                );

                themeButton.textContent =
                    "☀";

            }

        }
    );

}


/* =========================
   SEARCH FORM
========================= */

const flightSearch =
    document.getElementById(
        "flightSearch"
    );


if (flightSearch) {

    flightSearch.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const from =
                document.getElementById(
                    "from"
                ).value;


            const to =
                document.getElementById(
                    "to"
                ).value;


            const notice =
                document.getElementById(
                    "searchNotice"
                );


            if (from && to) {

                notice.textContent =
                    `Great! Searching flights from ${from} to ${to}.`;

                notice.classList.add(
                    "show"
                );

            }

        }
    );

}


/* =========================
   FLIGHT FILTER
========================= */

const filters =
    document.querySelectorAll(
        ".filter"
    );


const flightCards =
    document.querySelectorAll(
        ".flight-card"
    );


filters.forEach(
    function(filter) {

        filter.addEventListener(
            "click",
            function() {

                filters.forEach(
                    function(button) {

                        button.classList.remove(
                            "active"
                        );

                    }
                );


                filter.classList.add(
                    "active"
                );


                const type =
                    filter.dataset.filter;


                flightCards.forEach(
                    function(card) {

                        if (
                            type === "all" ||
                            card.dataset.type === type
                        ) {

                            card.style.display =
                                "grid";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }
);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const notice =
                document.getElementById(
                    "formNotice"
                );


            notice.textContent =
                "Thank you! Your message has been received by the Flyora team.";


            notice.classList.add(
                "show"
            );


            contactForm.reset();

        }
    );

}
```
