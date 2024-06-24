const FinishCalculation = {
    id: "finish-calculation",
    title: "Выбор конфигурации транспортного средства",
    render: (className = "container", ...rest) => {
        return `
    <section class="${className}" id="finish-calculation">
      <div class="wrapper">
            ${steps}
            <div >
                <div class="finish-content">
                    <canvas width="100" height="550"></canvas>
                    <div class="wrapper-direction__info">
                        <div>
                            <h4 class="wrapper-direction__info-title blocks-title">Транспорт</h4>
                            <div class="wrapper-direction__info-car wrapper-directio__info-disctiption"></div>
                            <h4 class="wrapper-direction__info-title blocks-title">Грузы</h4>
                            <div class="wrapper-direction__info-cargo wrapper-directio__info-disctiption"></div>
                        </div>
                        <table id="axis-load__table"></table>
                    </div>
                </div>
            </div>
            <div class="car__buttons buttons-login">
                <button class="button ok" id="save-result">Сохранить</button>
                <a href="#main"><button class="button cancel" id="not-save-result">Выход</button></a>
            </div>
            <div class="car__buttons buttons-logout">
                <a href="#main"><button class="button cancel" id="to-main">На главную</button></a>
            </div>
        </div>
    </section>
  `;
    },

    init: () => {
        const store = createStore();
        const m = 35; // масштаб
        const carBodyWidth = 2.5 * m;
        const bordercarBodyWidth = 2; // Ширина рамки кузова

        // canvas
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        // cargo
        const palletWidth = store.get("pallet-width") * m;
        const palletLength = store.get("pallet-length") * m;
        const palletWeight = store.get("pallet-weight");
        let palletCoin = store.get("pallet-coin");
        const cargoWeight = palletCoin * palletWeight;
        store.set("cargo-weight", cargoWeight);
        const cargoName = store.get("cargo-name");

        // singleCar
        const singleCarWeight = store.get("car-weight");
        const singleCarLength = store.get("car-length");
        const singleCarN1 = singleCarWeight * 0.3;
        const singleCarN2 = singleCarWeight - singleCarN1;
        const singleCarAxis = store.get("car-axis");
        const lenghtWithL1ToCargoCenterWight = store.get("car-l1");
        const singlrCarBoxLength = store.get("car-boxlength");
        let coinAxisForSingleCar = singleCarAxis + 1;

        //Truck
        const truckLength = store.get("truck-length");
        const tuckWeight = store.get("truck-weigth");
        const l1 = store.get("truck-l1");
        const truckN1 = tuckWeight * 0.7;
        const truckN2 = tuckWeight - truckN1;
        const truckAxis = store.get("truck-axis");

        //Trailer
        const trailerWeight = store.get("trailer-weigth");
        const trailerLength = store.get("trailer-boxlength");
        const LPb = store.get("trailer-Lb");
        const LPc = store.get("trailer-Lc");
        const LPd = trailerLength - LPb - LPc;
        const LPN1 = trailerWeight * 0.2;
        const LPN2 = trailerWeight - LPN1;
        const trailerAxis = store.get("trailer-axis");
        let coinAxisforTruckTrailer = truckAxis + trailerAxis + 1;

        let carBodyLength = null;
        let axisData = null;
        let axisCoin = null;
        let carTotalWeight = null;
        let maxWeightOnFront = null;
        let coinFront = null;

        const buttonsFinishCalcForLogIn = document.querySelector(".buttons-login");
        const buttonsFinishCalcForLogOut = document.querySelector(".buttons-logout");
        const buttonSave = document.querySelector("#save-result");
        const popup = document.querySelector("#popup");
        const overlay = document.querySelector(".overlay");

        // ПРоверка на авторизацию пользователя в зависимости от этого даем возможность на сохранение груза
        function checkUser() {
            if (buttonsFinishCalcForLogIn || buttonsFinishCalcForLogOut) {
                // Если авторизированный пользователь
                if (localStorage.getItem("userId")) {
                    buttonsFinishCalcForLogOut.classList.add("hide-elem");

                    function hideModal() {
                        popup.classList.remove("has-content");
                        overlay.classList.remove("overlay-active");
                    }
                    // Показываем модалку
                    function showModal() {
                        popup.innerHTML = `${modalSave}`;
                        popup.classList.add("has-content");
                        overlay.classList.add("overlay-active");

                        const markCloseModal = document.querySelector("#close-modal");
                        markCloseModal.addEventListener("click", hideModal);

                        const buttonCancelModal = document.querySelector("#modal-cancel-save");
                        buttonCancelModal.addEventListener("click", (ev) =>{
                            ev.preventDefault()
                            hideModal()});

                        const buttonOkModal = document.querySelector("#modal-ok-save");

                        buttonOkModal.addEventListener("click", (ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();

                            const cargoNameInput = document.querySelector("#cargo-name"); // Модалка по сохранению груза

                            const cargoNameValue = cargoNameInput.value; // Получаем имя груза для сохранения
                            store.set("cargo-name", cargoNameValue); // Сет во временное хранилище
                            const allValue = store.getAll(); // Получаем полный объект из временного хранилища
                            createCargoData(allValue); // Вызов функции по создаю нового груза в БД
                            hideModal(); // Скрываем модалку
                        });
                    }

                    buttonSave.addEventListener("click", showModal);
                } else {
                    // Если не авторизированный пользователь
                    buttonsFinishCalcForLogIn.classList.add("hide-elem"); // Просто кнопка вернутся на главную
                }
            } else return;
        }
        checkUser();
        // Проверка на вид транспортного средства
        function checkTypeCar() {
            if (store.get("carType") === "singleCar") {
                carBodyLength = (singlrCarBoxLength / 1000) * m;
                axisCoin = coinAxisForSingleCar;
                maxWeightOnFront = [4500, 5500];
                coinFront = 2;
                carTotalWeight = store.get("car-weight");
                axisData = axisLoadFromSingleCar();
            }

            if (store.get("carType") === "truckTrailer") {
                carBodyLength = (trailerLength / 1000) * m;
                axisCoin = coinAxisforTruckTrailer;
                maxWeightOnFront = [5500, 5700, 6200, 5700];
                coinFront = 4;
                carTotalWeight = store.get("truck-weigth") + store.get("trailer-weigth");
                axisData = axisLoadFromTruckTrailer();
            }
        }
        checkTypeCar();

        const frontLength = carBodyLength / coinFront;
        // Схематическая отрисовка кузова автомобиля
        function drawCarBoxTrailer() {
            // Рисуем прямоугольник основы полуприцепа
            ctx.fillStyle = "#808080";
            ctx.fillRect(0, 0, carBodyWidth, carBodyLength);

            ctx.strokeStyle = "#000000";
            ctx.lineWidth = bordercarBodyWidth;
            ctx.strokeRect(bordercarBodyWidth / 2, bordercarBodyWidth / 2, carBodyWidth - bordercarBodyWidth, carBodyLength - bordercarBodyWidth);

            // Рисуем линии двери
            ctx.beginPath();
            ctx.moveTo(0, carBodyLength);
            ctx.lineTo(carBodyWidth * 0.35, carBodyLength * 1.05);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(carBodyWidth, carBodyLength);
            ctx.lineTo(carBodyWidth * 0.6, carBodyLength * 1.05);
            ctx.stroke();
        }
        drawCarBoxTrailer();

        // Схематическая отрисовка паллет в кузове автомобиля
        function drawPallets(coinPalletForDraw, startX, startY) {
            // Определяем количество сторок и столбцов
            let cols = Math.floor(carBodyWidth / palletWidth);
            let rows = Math.ceil(coinPalletForDraw / cols);
            let x = null;
            let y = null;
            let row = null;
            let col = null;
            let count = 0;

            // Функция для отрисовки в один столбец
            function drawOneCol() {
                // Отрисовка паллеты
                x = startX + (carBodyWidth - palletWidth) / 2;
                y = startY + row * palletLength;
                ctx.fillStyle = "#654321";
                ctx.fillRect(x, y, palletWidth, palletLength);
                ctx.strokeStyle = "#000000";
                ctx.lineWidth = 1;
                ctx.strokeRect(x, y, palletWidth, palletLength);
                // Текст с содержимым
                const weightText = `${palletWeight} кг`;
                const textX = x + palletWidth / 2;
                const textY = y + palletLength / 2;
                ctx.fillStyle = "#000000";
                ctx.font = "10px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(weightText, textX, textY);
            }
            // Функция для отрисовки в два столбца
            function drawTwoCol() {
                // Отрисовка паллеты
                x = startX + col * palletWidth + bordercarBodyWidth;
                y = startY + row * palletLength;
                ctx.fillStyle = "#654321";
                ctx.fillRect(x, y, palletWidth, palletLength);
                ctx.strokeStyle = "#000000";
                ctx.lineWidth = 1;
                ctx.strokeRect(x, y, palletWidth, palletLength);
                // Текст с содержимым
                const weightText = `${palletWeight} кг`;
                const textX = x + palletWidth / 2;
                const textY = y + palletLength / 2;
                ctx.fillStyle = "#000000";
                ctx.font = "10px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(weightText, textX, textY);
            }

            // Если общая длина паллет позволяет разместить все в одном столбце
            if (palletLength * coinPalletForDraw <= frontLength) {
                cols = 1;
                rows = coinPalletForDraw;

                for (row = 0; row < rows; row++) {
                    for (col = 0; col < cols; col++) {
                        if (count >= coinPalletForDraw) break;
                        drawOneCol();
                        count++;
                    }
                }
                // Отрисовка в два столбца
            } else {
                // Если четное кол-во ставим по 2
                if (coinPalletForDraw % 2 === 0) {
                    for (row = 0; row < rows; row++) {
                        for (col = 0; col < cols; col++) {
                            if (count >= coinPalletForDraw) break;
                            drawTwoCol();
                            count++;
                        }
                    }
                    // Если нечетное кол-во ставим по 2 а в конце 1 посередине
                } else {
                    for (row = 0; row < rows; row++) {
                        for (col = 0; col < cols; col++) {
                            if (count > coinPalletForDraw) break;
                            if (count === coinPalletForDraw - 1) {
                                drawOneCol();
                                break;
                            } else {
                                drawTwoCol();
                                count++;
                            }
                        }
                    }
                }
            }
        }
        // Определение максимальной нагрузки на борт
        function maxWightOnFront(palletWeight, maxWeightOnFront) {
            let maxPalletsOnFront = 0;
            let currentWeight = 0;

            while (currentWeight + palletWeight <= maxWeightOnFront) {
                currentWeight += palletWeight;
                maxPalletsOnFront++;
            }

            return maxPalletsOnFront;
        }

        // Расчет паллет для отрисовки на каждый борт
        function render() {
            let remainingPallets = palletCoin; // текущий количество паллет
            let currentFront = 0; // текущий борта
            let firstPointY = 0; //  точка Y для текущего борта
            let rowsToDraw = null; // колличество рядов
            // Делаем расчет пока не закончатся паллеты либо борта
            for (let i = 0; i < coinFront && remainingPallets > 0; i++) {
                // Определяем максимальное количество паллет на текущий борт
                let maxPalletsOnCurrentFront = maxWightOnFront(palletWeight, maxWeightOnFront[i]);
                let palletsToDraw = Math.min(maxPalletsOnCurrentFront, remainingPallets); // Передаем количество рядов
                // Проверяем позволяет ли количество паллет поставить их в один стотлбец
                palletLength * palletsToDraw <= frontLength ? (rowsToDraw = palletsToDraw) : (rowsToDraw = Math.ceil(palletsToDraw / 2));
                // Пердаем на отрисовку количество паллет и координаты для отрисовки первого борта
                drawPallets(palletsToDraw, 0, firstPointY);
                // Уменьшаем количество паллет
                remainingPallets -= palletsToDraw;

                // Устанавливаем начальную точку Y для следующего борту
                firstPointY += rowsToDraw * palletLength;
                // Переход к следующему борту
                currentFront++;
            }
        }
        render();

        // Расчет осевых нагрузок для тягача с полуприцепом
        function axisLoadFromTruckTrailer() {
            // Массив для сета нагрузок и передачи на отрисовку с таблице
            let returnArray = [];
            const Fpt = Math.ceil(((trailerLength / 2 - LPd) * cargoWeight) / LPb + LPN2);
            const Fpc = trailerWeight + cargoWeight - Fpt;
            const Ft2 = Math.ceil((Fpc * l1) / truckLength + truckN2);
            const Ft1 = Math.ceil(Fpc + tuckWeight - Ft2);
            // Записываем первую ось
            returnArray.push(Ft1);

            // Логика по записи в масси нагрузок в зависимости от количества осей тележки тягача
            if (truckAxis > 1) {
                for (let i = 0; i < truckAxis; i++) {
                    returnArray.push(Math.ceil(Ft2 / truckAxis));
                }
            } else {
                returnArray.push(Ft2);
            }

            // Логика по записи в масси нагрузок в зависимости от количества осей тележки полуприцепа
            if (trailerAxis > 1) {
                for (let i = 0; i < trailerAxis; i++) {
                    returnArray.push(Math.ceil(Fpt / trailerAxis));
                }
            } else {
                returnArray.push(Fpt);
            }

            return returnArray;
        }

        // Расчет осевых нагрузок для одиночного грузовика
        function axisLoadFromSingleCar() {
            // Массив для сета нагрузок и передачи на отрисовку с таблице
            let returnArray = [];
            const Fs2 = Math.ceil((cargoWeight * lenghtWithL1ToCargoCenterWight) / singleCarLength + singleCarN2);
            const Fs1 = singleCarWeight + cargoWeight - Fs2;

            // Записываем первую ось
            returnArray.push(Fs1);

            // Логика по записи в масси нагрузок в зависимости от количества задних осей тележки грузовика
            if (singleCarAxis > 1) {
                for (let i = 0; i < singleCarAxis; i++) {
                    returnArray.push(Fs2 / singleCarAxis);
                }
            } else {
                returnArray.push(Fs2);
            }
            return returnArray;
        }

        // Создание таблицы осевых нагрузок
        const createTable = () => {
            // Создаем таблицу
            const table = document.querySelector("#axis-load__table");

            // Создаем голову таблицы
            const tableHeader = table.createTHead();
            const headerRow = tableHeader.insertRow();
            const headerCell = headerRow.insertCell();
            headerCell.colSpan = `${axisCoin}`;
            headerCell.textContent = "Осевое распределение нагрузок";

            // Создаем тело таблицы
            const tableBody = table.createTBody();
            const bodyRow = tableBody.insertRow();

            // Создаем колонки таблицы в зависимости от количества осей
            for (let i = 1; i <= axisCoin; i++) {
                const cell = bodyRow.insertCell();
                cell.textContent = `${i} ось`;
            }
            // Создаем новую строку таблицы в зависимости от количества осей передаем осевые нагрузки
            const bodyRow2 = tableBody.insertRow();
            if (!axisData) return;
            axisData.forEach((item) => {
                const cell = bodyRow2.insertCell();
                cell.textContent = item;
            });
        };
        createTable();

        // Создание блока по описанию груза, массы, и характеристик мышины
        const crateCarCargoInfoBlock = () => {
            const cargoInfoBlock = document.querySelector(".wrapper-direction__info-cargo");
            const carInfoBlock = document.querySelector(".wrapper-direction__info-car");

            const carLength = document.createElement("p");
            carLength.innerHTML = `Длинна = ${carBodyLength / m} м`;

            const carWidth = document.createElement("p");
            carWidth.innerHTML = `Ширина = 2.5 м`;

            const carWeight = document.createElement("p");
            carWeight.innerHTML = `Масса = ${carTotalWeight} кг`;

            carInfoBlock.append(carLength, carWidth, carWeight);

            const cargoCoin = document.createElement("p");
            cargoCoin.innerHTML = `Колличество = ${palletCoin} шт`;

            const cargoTotalWeight = document.createElement("p");
            cargoTotalWeight.innerHTML = `Вес груза = ${cargoWeight} кг`;

            const totalWeght = document.createElement("p");
            totalWeght.innerHTML = `Общий вес = ${carTotalWeight + cargoWeight} кг`;

            cargoInfoBlock.append(cargoCoin, cargoTotalWeight, totalWeght);
        };
        crateCarCargoInfoBlock();

        // Сохранение данных в БД
        function createCargoData(value) {
            const cargoId = new Date().getTime(); // Присваиваем ID груза
            const userId = localStorage.getItem("userId"); // Берем ID пользователя из localStorage
            myAppDB
                // Устанавливаем путь в БД и сохраняем полный объект с грузом и ТС
                .ref(`users/${userId}/cargos/${cargoId}`)
                .set({ value })
                .then(function () {
                    console.log("Груз добавлен в коллецию cargos");
                })
                .catch(function (error) {
                    console.error("Ошибка добавления груза: ", error);
                });
        }
    },
};

