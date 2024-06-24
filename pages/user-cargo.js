const UserCargo = {
    id: "user-cargo",
    title: "Мои грузы",

    render: (className = "container", ...rest) => {
        return `
            <section class="${className} user-cargo">
                <div class="home-page__img">
                    <img src="./images/head/2.webp" alt="title-image">
                    <div class="home-page__img-main">
                        <h2>Личный кабинет пользователя</h2> 
                        <button class="calc-button"><a href="#start-calculation">Рассчитать</a></button>
                    </div>
                </div>
                <div class="wrapper">
                    <h2 class="blocks-title">4 ПРОСТЫХ ШАГА ДЛЯ РАСЧЁТА</h2>
                    ${steps}
                    <i class="fa-solid fa-right-from-bracket fa-xl" id="icon-logout" title="Выход"></i>
                    <div class="columns">
                        <div class="column">
                            <div class="cargos-list">
                                <h4 class="title is-4 blocks-title">Мои грузы:</h4>
                                <table id="users-list" class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                                    <thead>
                                        <tr class="user-list__header">
                                            <td>Наименование</td>
                                            <td>Обший вес</td>
                                            <td>Число паллет</td>
                                            <td>Операции</td>
                                        </tr>
                                    </thead>
                                    <tbody id="cargos-list__container"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },
    // Проверяем есть ли пользователь
    getUserId: function () {
        return localStorage.getItem("userId");
    },

    // Создаем таблицу грузов пользователя
    createRow: function (cargoId, cargoData) {
        if (!cargoId || !cargoData) return;
        const { "cargo-name": name, "cargo-weight": weight, "pallet-coin": coin } = cargoData;

        // Создаем строку с классом ID груза для понимания с каким грузом работает
        const row = document.createElement("tr");
        row.classList.add(`cargo-row-${cargoId}`);

        const createDeleteIcon = () => {
            const deleteIcon = document.createElement("i");
            deleteIcon.className = "fa-regular fa-trash-can fa-xl";
            deleteIcon.title = "Удалить";
            deleteIcon.onclick = () => this.showDeleteModal(name, cargoId);
            return deleteIcon;
        };

        const createShowIcon = () => {
            const showIcon = document.createElement("i");
            showIcon.className = "fa-solid fa-calculator fa-xl";
            showIcon.title = "Показать";
            showIcon.onclick = () => this.showCargoInfo(cargoData);
            return showIcon;
        };

        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");

        td1.textContent = name;
        td2.textContent = weight;
        td3.textContent = coin;
        td4.classList.add(".td-icon");
        td4.append(createDeleteIcon(), createShowIcon());

        row.append(td1, td2, td3, td4);
        return row;
    },
    // Получаем данные из БД
    loadDataFromDatabase: function () {
        // Устанавливаем путь пользователю
        myAppDB.ref(`users/${this.getUserId()}/cargos`).once(
            "value",
            (snapshot) => {
                const cargosListContainer = document.querySelector("#cargos-list__container");
                cargosListContainer.innerHTML = "";
                // Перебираем объект пользователя
                snapshot.forEach((cargoSnapshot) => {
                    // Получаем ID груза в виде ключа
                    const cargoId = cargoSnapshot.key;
                    // Получаем значение ключа в виде значения ключа
                    const cargoData = cargoSnapshot.val().value; // Обращаемся к объекту "value"
                    // Создаем стоку в таблице по данным текущей иттерации
                    const cargoRow = this.createRow(cargoId, cargoData);
                    // Добавляем строку в контейнер
                    cargosListContainer.append(cargoRow);
                });
            },
            (error) => {
                console.error("Ошибка загрузки грузов: ", error);
            }
        );
    },
    // Удаляем строку из БД и из таблицы
    deleteCargo: function (cargoId) {
        myAppDB
            .ref(`users/${this.getUserId()}/${cargoId}`)
            .remove()
            .then(() => {
                console.info("Груз удален из коллеции cargos");
                const rowToDelete = document.querySelector(`.cargo-row-${cargoId}`);
                if (rowToDelete) {
                    rowToDelete.remove();
                }
            })
            .catch((error) => {
                console.error("Ошибка удаления груза: ", error);
            });
    },
    // Предуппрердительное сообщение перед удалением
    showDeleteModal: function (name, cargoId) {
        const popup = document.querySelector("#popup");
        const overlay = document.querySelector(".overlay");

        popup.innerHTML = modalDelete;
        const modalDeleteForm = document.querySelector(".modal-delete");
        const modalHeader = document.createElement("p");
        modalHeader.classList.add("delete-modal__title");
        modalHeader.innerHTML = `Вы действительно хотите удалить груз <span class="highlighted">${name}</span>`;
        modalDeleteForm.prepend(modalHeader);

        const buttonDeleteCargo = document.querySelector("#modal-ok-delete");
        buttonDeleteCargo.onclick = () => {
            this.deleteCargo(cargoId);
            popup.classList.remove("has-content");
            overlay.classList.remove("overlay-active");
        };

        const buttonCancelDeleteCargo = document.querySelector("#modal-cancel-delete");
        buttonCancelDeleteCargo.onclick = () => {
            popup.classList.remove("has-content");
            overlay.classList.remove("overlay-active");
        };

        const iconCloseDeleteForm = document.querySelector("#close-modal-delete");
        iconCloseDeleteForm.onclick = () => {
            popup.classList.remove("has-content");
            overlay.classList.remove("overlay-active");
        };

        popup.classList.add("has-content");
        overlay.classList.add("overlay-active");
    },
    // Показ модалки с информацией о сохраненных грузах
    showCargoInfo: function (cargoData) {
        const popup = document.querySelector("#popup");
        const overlay = document.querySelector(".overlay");

        this.hideModal();

        popup.innerHTML = modalShowCargoFromUserCabinet;
        popup.classList.add("has-content");
        overlay.classList.add("overlay-active");

        const iconCancelModal = document.querySelector("#close-modal");
        iconCancelModal.addEventListener("click", () => this.hideModal());

        store.setAll(cargoData);

        FinishCalculation.init();
    },

    hideModal: function () {
        const popup = document.querySelector("#popup");
        const overlay = document.querySelector(".overlay");
        popup.classList.remove("has-content");
        overlay.classList.remove("overlay-active");
    },

    init: function () {
        // Если есть пользователь то загружаем его данные из БД
        if (this.getUserId()) {
            this.loadDataFromDatabase();
        }
        const userCargoPage = document.querySelector("#user-cargo__btn");
        const userLoginPage = document.querySelector("#user-login__btn");
        const logOutIcon = document.querySelector("#icon-logout");

        logOutIcon.addEventListener("click", () => {
            LoginUser.logout();
            userCargoPage.classList.remove("has-content");
            userLoginPage.classList.remove("dnthas-content");
            window.location.href = "#main";
        });
    },
};
