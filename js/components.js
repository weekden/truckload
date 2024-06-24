const Header = {
    render: (customClass = "") => {
        return `
        <header class="header ${customClass}" id="header">
            <div class = "header__logo footer__logo">
                <a class = "header__logo-logo" href="#main">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="80" viewBox="0 0 256 256" xml:space="preserve">
                        <defs>
                        </defs>
                        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                            <path d="M 71.787 59.762 c -0.008 0 -0.016 0 -0.024 0 l -4.066 -0.099 c -0.543 -0.014 -0.976 -0.457 -0.976 -1 V 34.067 c 0 -0.552 0.447 -1 1 -1 H 80.12 c 0.338 0 0.653 0.171 0.838 0.454 l 8.88 13.618 C 89.943 47.301 90 47.49 90 47.685 v 10.979 c 0 0.548 -0.44 0.993 -0.987 1 l -7.968 0.099 c -0.005 0 -0.009 0 -0.013 0 c -0.547 0 -0.993 -0.439 -1 -0.987 c -0.007 -0.553 0.436 -1.006 0.987 -1.013 L 88 57.676 v -9.694 l -8.422 -12.915 H 68.721 v 22.621 l 3.091 0.074 c 0.552 0.014 0.988 0.472 0.976 1.024 C 72.773 59.33 72.328 59.762 71.787 59.762 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 67.721 59.663 H 42.313 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 24.408 V 27.616 H 26.456 v 30.047 h 6.611 c 0.552 0 1 0.447 1 1 s -0.448 1 -1 1 h -7.611 c -0.552 0 -1 -0.447 -1 -1 V 26.616 c 0 -0.552 0.448 -1 1 -1 h 42.265 c 0.553 0 1 0.448 1 1 v 32.047 C 68.721 59.216 68.273 59.663 67.721 59.663 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 37.689 64.385 c -3.1 0 -5.623 -2.522 -5.623 -5.623 s 2.522 -5.623 5.623 -5.623 c 3.101 0 5.623 2.522 5.623 5.623 S 40.79 64.385 37.689 64.385 z M 37.689 55.139 c -1.998 0 -3.623 1.625 -3.623 3.623 s 1.625 3.623 3.623 3.623 s 3.623 -1.625 3.623 -3.623 S 39.687 55.139 37.689 55.139 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 18.782 51.433 H 7.701 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 11.081 c 0.552 0 1 0.447 1 1 S 19.334 51.433 18.782 51.433 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 18.782 45.351 H 4.183 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 14.599 c 0.552 0 1 0.448 1 1 S 19.334 45.351 18.782 45.351 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 18.782 39.27 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 17.782 c 0.552 0 1 0.448 1 1 S 19.334 39.27 18.782 39.27 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 89 48.685 H 72.899 c -0.553 0 -1 -0.447 -1 -1 V 38.27 c 0 -0.552 0.447 -1 1 -1 h 9.961 c 0.553 0 1 0.448 1 1 s -0.447 1 -1 1 h -8.961 v 7.415 H 89 c 0.553 0 1 0.447 1 1 S 89.553 48.685 89 48.685 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 89 54.532 h -3.818 c -0.553 0 -1 -0.447 -1 -1 s 0.447 -1 1 -1 H 89 c 0.553 0 1 0.447 1 1 S 89.553 54.532 89 54.532 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 76.409 64.385 c -3.1 0 -5.622 -2.522 -5.622 -5.623 s 2.522 -5.623 5.622 -5.623 c 3.101 0 5.623 2.522 5.623 5.623 S 79.51 64.385 76.409 64.385 z M 76.409 55.139 c -1.997 0 -3.622 1.625 -3.622 3.623 s 1.625 3.623 3.622 3.623 c 1.998 0 3.623 -1.625 3.623 -3.623 S 78.407 55.139 76.409 55.139 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <circle cx="37.69" cy="58.76" r="1.32" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                            <circle cx="76.41" cy="58.76" r="1.32" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                            <path d="M 67.721 54.532 H 45.933 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 21.788 c 0.553 0 1 0.447 1 1 S 68.273 54.532 67.721 54.532 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 29.274 54.532 h -3.818 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 3.818 c 0.552 0 1 0.447 1 1 S 29.826 54.532 29.274 54.532 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                        </g>
                    </svg>
                </a>
                <p class="header__logo-text">Optimal<span>WEIGHT</span></p>
            </div>
            <nav class="mainmenu ${customClass}" id="mainmenu">
            <ul class="mainmenu__list">
                <li><a class="mainmenu__link" href="#main">Главная</a></li>
                <li><a class="mainmenu__link" href="#instructions">Инструкции</a></li>
                <li><a class="mainmenu__link" id="user-cargo__btn" href="#user-cargo">Личный кабинет</a></li>
                <li><a class="mainmenu__link" id="nav__calc-btn" href="#start-calculation">Рассчитать</a></li>
                <li><a class="mainmenu__link" id="user-login__btn"href="#user-login">Вход<br>Регистрация</a></li>
            </ul>
            </nav>
            <div class="burger-menu">
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            </div>
        </header>
      `;
    },

    init: () => {
        document.addEventListener("DOMContentLoaded", function () {
            const burgerMenu = document.querySelector(".burger-menu");
            const mainMenuList = document.querySelector(".mainmenu__list");

            const toggleMenu = () => {
                mainMenuList.classList.toggle("show");
                burgerMenu.classList.toggle("active");
            };

            const closeMenu = () => {
                mainMenuList.classList.remove("show");
                burgerMenu.classList.remove("active");
            };

            burgerMenu.addEventListener("click", toggleMenu);
            mainMenuList.addEventListener("click", closeMenu);

            // Обработчик события resize
            window.addEventListener("resize", () => {
                //  Закрываем бургер-меню при данном разрешении
                if (window.innerWidth > 768) {
                    mainMenuList.classList.remove("show");
                }
            });
          
            
            const userCargoPage = document.querySelector("#user-cargo__btn");
            const userLoginPage = document.querySelector("#user-login__btn");
            if (!!localStorage.getItem("userId")) {
                userCargoPage.classList.add("has-content");
                userLoginPage.classList.add("dnthas-content");
            }
        });
    },
};
Header.init();

const Overlay = {
    render: (customClass = "") => {
        return `<div class="overlay" >
        </div>`;
    },
};

const Content = {
    render: (customClass = "") => {
        return `<div class="content ${customClass}" id="content">
        </div>`;
    },
};

const Popup = {
    render: (customClass = "") => {
        return `<div class="content ${customClass}" id="popup"></div>`;
    },
};

const Footer = {
    render: (customClass = "") => {
        return `
        <footer class="footer ${customClass}">
            <div class = "footer__wrapper">
                <div class="footer__logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="80" viewBox="0 0 256 256" xml:space="preserve">
                        <defs>
                        </defs>
                        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                            <path d="M 71.787 59.762 c -0.008 0 -0.016 0 -0.024 0 l -4.066 -0.099 c -0.543 -0.014 -0.976 -0.457 -0.976 -1 V 34.067 c 0 -0.552 0.447 -1 1 -1 H 80.12 c 0.338 0 0.653 0.171 0.838 0.454 l 8.88 13.618 C 89.943 47.301 90 47.49 90 47.685 v 10.979 c 0 0.548 -0.44 0.993 -0.987 1 l -7.968 0.099 c -0.005 0 -0.009 0 -0.013 0 c -0.547 0 -0.993 -0.439 -1 -0.987 c -0.007 -0.553 0.436 -1.006 0.987 -1.013 L 88 57.676 v -9.694 l -8.422 -12.915 H 68.721 v 22.621 l 3.091 0.074 c 0.552 0.014 0.988 0.472 0.976 1.024 C 72.773 59.33 72.328 59.762 71.787 59.762 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 67.721 59.663 H 42.313 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 24.408 V 27.616 H 26.456 v 30.047 h 6.611 c 0.552 0 1 0.447 1 1 s -0.448 1 -1 1 h -7.611 c -0.552 0 -1 -0.447 -1 -1 V 26.616 c 0 -0.552 0.448 -1 1 -1 h 42.265 c 0.553 0 1 0.448 1 1 v 32.047 C 68.721 59.216 68.273 59.663 67.721 59.663 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 37.689 64.385 c -3.1 0 -5.623 -2.522 -5.623 -5.623 s 2.522 -5.623 5.623 -5.623 c 3.101 0 5.623 2.522 5.623 5.623 S 40.79 64.385 37.689 64.385 z M 37.689 55.139 c -1.998 0 -3.623 1.625 -3.623 3.623 s 1.625 3.623 3.623 3.623 s 3.623 -1.625 3.623 -3.623 S 39.687 55.139 37.689 55.139 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 18.782 51.433 H 7.701 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 11.081 c 0.552 0 1 0.447 1 1 S 19.334 51.433 18.782 51.433 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 18.782 45.351 H 4.183 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 14.599 c 0.552 0 1 0.448 1 1 S 19.334 45.351 18.782 45.351 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 18.782 39.27 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 17.782 c 0.552 0 1 0.448 1 1 S 19.334 39.27 18.782 39.27 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 89 48.685 H 72.899 c -0.553 0 -1 -0.447 -1 -1 V 38.27 c 0 -0.552 0.447 -1 1 -1 h 9.961 c 0.553 0 1 0.448 1 1 s -0.447 1 -1 1 h -8.961 v 7.415 H 89 c 0.553 0 1 0.447 1 1 S 89.553 48.685 89 48.685 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 89 54.532 h -3.818 c -0.553 0 -1 -0.447 -1 -1 s 0.447 -1 1 -1 H 89 c 0.553 0 1 0.447 1 1 S 89.553 54.532 89 54.532 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rrgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 76.409 64.385 c -3.1 0 -5.622 -2.522 -5.622 -5.623 s 2.522 -5.623 5.622 -5.623 c 3.101 0 5.623 2.522 5.623 5.623 S 79.51 64.385 76.409 64.385 z M 76.409 55.139 c -1.997 0 -3.622 1.625 -3.622 3.623 s 1.625 3.623 3.622 3.623 c 1.998 0 3.623 -1.625 3.623 -3.623 S 78.407 55.139 76.409 55.139 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <circle cx="37.69" cy="58.76" r="1.32" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                            <circle cx="76.41" cy="58.76" r="1.32" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                            <path d="M 67.721 54.532 H 45.933 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 21.788 c 0.553 0 1 0.447 1 1 S 68.273 54.532 67.721 54.532 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                            <path d="M 29.274 54.532 h -3.818 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 3.818 c 0.552 0 1 0.447 1 1 S 29.826 54.532 29.274 54.532 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                        </g>
                    </svg>
                    <p class="footer header__logo-text">Optimal<span>WEIGHT</span></p>
                </div>
                <div class="footer__info-container">
                    <p class="author"><span>&#169;</span>2024 Denis Nedelko | <span class="name-progect">Рассчет осевых нагрузок</span><p class="customer">BY It-Academy FD2-138-24</p></p>
                </div>
            </div>
      </footer>`;
    },
};
