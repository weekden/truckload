const StartCalculation = {
    id: "start-calculation",
    title: "Выбор конфигурации транспортного средства",
    render: (className = "container", ...rest) => {
        return `
    <section class="${className} start-calculation" id="start-calculation">
      <div class="wrapper">
                ${steps}
                <div class="select-configuration">
                  <h2 class="blocks-title">Выберите конфигурацию транспортного средства</h2>
                  <div class="configuration-car">
                    <a href="#singletruck" id="singletruck">
                      <p class="configuration-title"><span>1</span><span>ОДИНОЧНЫЙ ГРУЗОВИК</span></p>
                      <div class="configuration-car__img"><img src="./images/carModel/1111.png" alt="singletruck" /></div>
                    </a>
                  </div>
                  <div class="configuration-car">
                    <a href="#trucktrailer" id="trucktrailer">
                      <p class="configuration-title"><span>2</span><span>СЕДЕЛЬНЫЙ ТЯГАЧ + ПОЛУПРИЦЕП</span></p>
                      <div class="configuration-car__img"><img src="./images/carModel/1122.png" alt="trailer" /></div>
                    </a>
                  </div>
                </div>
            </div>
           
      </section>
  `;
    },

    init: () => {
        const store = createStore();
        const singleCar = document.querySelector("#singletruck");
        const truckTrailer = document.querySelector("#trucktrailer");
        // Добавляем во временное хранилище тип ТС
        const setTypeCar = (type) => {
            store.set("carType", type);
        };

        singleCar.addEventListener("click", () => setTypeCar("singleCar"));
        truckTrailer.addEventListener("click", () => setTypeCar("truckTrailer"));
    },
};
