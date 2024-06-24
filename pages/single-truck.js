const SingleTruck = {
    id: "singletruck",
    title: "Выбор конфигурации транспортного средства",
    render: (className = "container", ...rest) => {
        return `
            <section class="${className} singletruck" id="singletruck">
                <div class="wrapper">
                    ${steps}
                    <div class="car-config">
                        <div class="car-config__title">
                            <h2 class="blocks-title">ОДИНОЧНЫЙ ГРУЗОВИК</h2>
                            <p><a href="#start-calculation">Изменить конфигурацию</a></p>
                        </div>
                        <div class="car-config__select-buttons">
                            <p id="select-singletruck" class="car-config__select-car calc-button">Параметры грузовика</p>
                        </div>
                        <div class="configuration-car__img"><img src="./images/carModel/1111.png" alt="singletruck" /></div>
                        ${configCargo}
                        <button class="calc-button" id="calc" href="#finish-calculation" disabled>Рассчитать</button>
                    </div>
                </div>
            </section>
        `;
    },
    init: () => {
        const buttonSelectSingleTruck = document.querySelector("#select-singletruck");
        const buttonCalc = document.querySelector("#calc");
        buttonCalc.disabled = true;
        const popup = document.querySelector("#popup");
        const overlay = document.querySelector(".overlay");
        const store = createStore();
        const modalCargoInputs = document.querySelectorAll(".cargo-config input");
        const modalCargoSelect = document.querySelector(".cargo-config select");
        const cargoForm = document.querySelector(".cargo-config");
        let allInputsFilled = false;
        let selectFilled = false;

        // Получаем значения с инпутов
        const setInputsValue = (nodeList) => {
            // Устанавливаем флаг что все поля заполнены
            allInputsFilled = true;

            nodeList.forEach((item) => {
                // Валидация
                const value = +item.value;
                if (item.value.trim() === "" || value <= 0 || !Number.isInteger(value)) {
                    allInputsFilled = false;
                    // Сохраняем данные с инпутов во впеменное хранилище
                } else store.set(item.name, +item.value);
            });

            // При заполнении всех форм можем закрыть модалку
            if (allInputsFilled) {
                hideModal();
            }
        };

        // Получаем значения с select
        const setSelectValue = () => {
            let length, width;
            // Устанавливаем флаг
            selectFilled = false;

            if (modalCargoSelect.value === "small" || modalCargoSelect.value === "large") {
                length = modalCargoSelect.value === "small" ? 0.8 : 1;
                width = 1.2;
                selectFilled = true;
            }
            // Сохраняем данные с select во впеменное хранилище
            store.set("pallet-length", length);
            store.set("pallet-width", width);
        };

        cargoForm.addEventListener("input", () => {
            setInputsValue(modalCargoInputs);
            checkAllInputsFilled();
        });

        modalCargoSelect.addEventListener("change", () => {
            setSelectValue();
            checkAllInputsFilled();
        });

        const hideModal = () => {
            popup.classList.remove("has-content");
            overlay.classList.remove("overlay-active");
        };

        const showModal = () => {
            popup.innerHTML = `${modalSingle}`;
            popup.classList.add("has-content");
            overlay.classList.add("overlay-active");

            const markCloseModal = document.querySelector("#close-modal");
            const modalCarInputs = document.querySelectorAll(".modal-car input");

            markCloseModal.addEventListener("click", hideModal);

            const buttonCancelModal = document.querySelector(".cancel");
            buttonCancelModal.addEventListener("click", (ev) => {
                ev.preventDefault();
                hideModal();
            });

            const buttonOKModal = document.querySelector(".ok");
            buttonOKModal.addEventListener("click", (ev) => {
                setInputsValue(modalCarInputs);
                ev.preventDefault();
            });
        };

        buttonCalc.addEventListener("click", () => setInputsValue(modalCargoInputs));
        buttonSelectSingleTruck.addEventListener("click", showModal);
        // Если все данные введены то кнопка Рассчитать активна и переходим к странице с результатами
        const checkAllInputsFilled = () => {
            if (allInputsFilled && selectFilled) {
                buttonCalc.disabled = false;
                buttonCalc.addEventListener("click", () => {
                    window.location.href = buttonCalc.getAttribute("href");
                });
            }
        };
    },
};
