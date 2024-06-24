const TruckTrailer = {
    id: "trucktrailer",
    title: "Выбор конфигурации транспортного средства",
    render: (className = "container", ...rest) => {
        return `
  <section class="${className} TruckTrailer" id="TruckTrailer">
    <div class="wrapper">
              ${steps}
                <div class="car-config">
                  <div class="car-config__title">
                    <h2 class="blocks-title">СЕДЕЛЬНЫЙ ТЯГАЧ + ПОЛУПРИЦЕП</h2>
                    <p><a href="#start-calculation">Изменить конфигурацию</a></p>
                  </div>
                  <div class="car-config__select-buttons">
                    <p id="select-truck" class="car-config__select-car calc-button car-config__select-car">Параметры седельного тягача</p>
                    <p id="select-trailer" class="car-config__select-car calc-button car-config__select-car">Параметры полуприцепа</p>
                  </div>
                  <div class="configuration-car__img"><img src="./images/carModel/1122.png" alt="trucktrailer" /></div>
                 ${configCargo}
                 <button class="calc-button" id="calc" href="#finish-calculation">Рассчитать</button>
                </div>
          </div>
    </section>
  `;
    },

    init: () => {
        const buttonSelectTruck = document.querySelector("#select-truck");
        const buttonSelectTrailer = document.querySelector("#select-trailer");
        const modalCargoInputs = document.querySelectorAll(".cargo-config input");
        const modalCargoSelect = document.querySelector(".cargo-config select");
        const store = createStore();
        const buttonCalc = document.querySelector("#calc");
        buttonCalc.disabled = true;
        const popup = document.querySelector("#popup");
        const overlay = document.querySelector(".overlay");
        const cargoForm = document.querySelector(".cargo-config");
        let allInputsFilled;
        let selectFilled;

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
                selectFilled = true; // Устанавливаем флаг в true, если выбрано значение
            } else {
                selectFilled = false; // Если значение не выбрано, устанавливаем флаг в false
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

        const showModal = (content, isTruck) => {
            popup.innerHTML = content;
            popup.classList.add("has-content");
            overlay.classList.add("overlay-active");

            const markCloseModal = document.querySelector("#close-modal");
            markCloseModal.addEventListener("click", hideModal);

            const buttonCancelModal = document.querySelector(".cancel");
            buttonCancelModal.addEventListener("click", (ev) => {
                ev.preventDefault();
                hideModal();
            });

            const modalTruckInputs = document.querySelectorAll(".modal-truck input");
            const modalTrailerInputs = document.querySelectorAll(".modal-trailer input");
            const buttonOKModalTruck = document.querySelector("#modal-ok-truck");
            const buttonOKModalTrailer = document.querySelector("#modal-ok-trailer");
            if (isTruck) {
                buttonOKModalTruck.addEventListener("click", (ev) => {
                    ev.preventDefault();
                    setInputsValue(modalTruckInputs);
                });
            } else {
                buttonOKModalTrailer.addEventListener("click", (ev) => {
                    ev.preventDefault();
                    setInputsValue(modalTrailerInputs);
                });
            }
        };

        buttonSelectTruck.addEventListener("click", () => showModal(modalTruck, true));
        buttonSelectTrailer.addEventListener("click", () => showModal(modalTrailer, false));

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
