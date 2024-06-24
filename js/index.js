// Список компонент (from components.js)
const components = {
    header: Header,
    content: Content,
    popup: Popup,
    overlay: Overlay,
    footer: Footer,
};

// Список поддердживаемых роутов (from pages.js)
const routes = {
    main: HomePage,
    instructions: Instructions,
    "user-cargo": UserCargo,
    "user-login": LoginUser,
    "start-calculation": StartCalculation,
    singletruck: SingleTruck,
    trucktrailer: TruckTrailer,
    "finish-calculation": FinishCalculation,
    error: ErrorPage,
};

/* ----- spa init module --- */
const mySPA = (function () {
    /* ------- begin view -------- */
    function ModuleView() {
        let myModuleContainer = null;
        let menu = null;
        let contentContainer = null;
        let routesObj = null;

        this.init = function (container, routes) {
            myModuleContainer = container;
            routesObj = routes;
            menu = myModuleContainer.querySelector("#mainmenu");
            contentContainer = myModuleContainer.querySelector("#content");
        };

        this.renderContent = function (hashPageName) {
            let routeName = "main";

            if (hashPageName.length > 0) {
                routeName = hashPageName in routes ? hashPageName : "error";
            }

            window.document.title = routesObj[routeName].title;
            contentContainer.innerHTML = routesObj[routeName].render(`${routeName}-page`);
            routesObj[routeName].init();
            this.updateButtons(routesObj[routeName].id);

            if (
                routeName === "start-calculation" ||
                routeName === "singletruck" ||
                routeName === "trucktrailer" ||
                routeName === "finish-calculation" ||
                routeName === "userCargo"
            )
                this.changeBackgroundFromCyrcleSteps(routeName);
            if (routeName === "singletruck"){
                store.set("carType", "singleCar");
            }

            if (routeName === "trucktrailer"){
                store.set("carType", "truckTrailer");
            }
        };
        
        this.changeBackgroundFromCyrcleSteps = function (routeName) {
            const cyrcles = myModuleContainer.querySelectorAll(".steps__cyrcles li");
            cyrcles.forEach((cyrcle, index) => {
                switch (routeName) {
                    case "start-calculation":
                        if (index === 0) {
                            cyrcle.classList.add("active-step");
                        } else {
                            cyrcle.classList.remove("active-step");
                        }
                        break;
                    case "singletruck":
                    case "trucktrailer":
                        if (index <= 1) {
                            cyrcle.classList.add("active-step");
                        } else {
                            cyrcle.classList.remove("active-step");
                        }
                        break;
                    case "finish-calculation":
                        if (index <= 2) {
                            cyrcle.classList.add("active-step");
                        } else {
                            cyrcle.classList.remove("active-step");
                        }
                        break;
                    case "userCargo":
                        if (index <= 3) {
                            cyrcle.classList.add("active-step");
                        } else {
                            cyrcle.classList.remove("active-step");
                        }
                        break;
                    default:
                        break;
                }
            });
        };

        this.updateButtons = function (currentPage) {
            const menuLinks = menu.querySelectorAll(".mainmenu__link");

            for (let link of menuLinks) {
                currentPage === link.getAttribute("href").slice(1) ? link.classList.add("active") : link.classList.remove("active");
            }
        };
    }
    /* -------- end view --------- */
    /* ------- begin model ------- */
    function ModuleModel() {
        let myModuleView = null;

        this.init = function (view) {
            myModuleView = view;
        };

        this.updateState = function (pageName) {
            myModuleView.renderContent(pageName);
        };
    }

    /* -------- end model -------- */
    /* ----- begin controller ---- */
    function ModuleController() {
        let myModuleContainer = null;
        let myModuleModel = null;

        this.init = function (container, model) {
            myModuleContainer = container;
            myModuleModel = model;

            // вешаем слушателей на событие hashchange и кликам по пунктам меню
            window.addEventListener("hashchange", this.updateState);

            this.updateState(); //первая отрисовка
        };

        this.updateState = function () {
            const hashPageName = location.hash.slice(1).toLowerCase();
            myModuleModel.updateState(hashPageName);
        };
    }
    /* ------ end controller ----- */

    return {
        init: function ({ container, routes, components }) {
            this.renderComponents(container, components);

            const view = new ModuleView();
            const model = new ModuleModel();
            const controller = new ModuleController();

            //связываем части модуля
            view.init(document.getElementById(container), routes);
            model.init(view);
            controller.init(document.getElementById(container), model);
        },

        renderComponents: function (container, components) {
            const root = document.getElementById(container);
            const componentsList = Object.keys(components);
            for (let item of componentsList) {
                root.innerHTML += components[item].render("component");
            }
        },
    };
})();
/* ------ end app module ----- */

/*** --- init module --- ***/
document.addEventListener(
    "DOMContentLoaded",
    mySPA.init({
        container: "app",
        routes: routes,
        components: components,
    })
);
