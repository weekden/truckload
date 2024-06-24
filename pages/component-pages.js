const steps = `<div class="steps">
<ul class="steps__cyrcles">
    <li>
        <span>1</span>
        <div>Выберите конфигурацию транспортного средства</div>
    </li>
    <li>
        <span>2</span>
        <div>Введите данные по нагрузке</div>
    </li>
    <li>
        <span>3</span>
        <div>Получите детальный расчет</div>
    </li>
    <li>
        <span>4</span>
        <div>Сохраните данные о расчете</div>
    </li>
</ul>
</div>`

const configCargo = `<form class="cargo-config">
  <div class="cargo-config__inputs">
    <div class="cargo-config__input">
      <label for="pallet-weight">Вес одной паллеты(кг):</label>
      <input id="pallet-weight" name="pallet-weight" type="number" >
    </div>
    <div class="cargo-config__input">
      <label for="pallet-coin">Колличество паллето-мест:</label>
      <input id="pallet-coin" name="pallet-coin" type="number" >
    </div>
    <div class="cargo-config__input">
      <label for="pallet-size">Размер паллет:</label>
      <select id="pallet-size" name="pallet-size" >
        <option selected disabled>Размер паллет</option>
        <option value="small">0.8(m) x 1.2(m)</option>
        <option value="large">1(m) x 1.2(m)</option>
      </select>
    </div>
  </div>
</form>`

const modalSingle = `<form class="modal-car">
<i class="fa-solid fa-xmark fa-2xl" id="close-modal"></i>
<div class="configuration-car__img"><img src="./images/carModel/1111.png" alt="trailer" /></div>
<div class="car__inputs">
  <div class="car__input">
    <label for="car-lenght">База шасси(мм):</label>
    <input id="car-lenght" type="number" name="car-length"  >
  </div>
  <div class="car__input">
    <label for="car-weight">Собственная масса шасси(кг):</label>
    <input id="car-weight" type="number" name="car-weight"  >
  </div>
  <div class="car__input">
    <label for="car-l1">Расстояни от передней оси до середины кузова(мм):</label>
    <input id="car-l1" type="number"  name="car-l1"  >
  </div>
  <div class="car__input">
    <label for="car-axis">Количество осей задней тележки (поставьте 1, если сзади просто ось):</label>
    <input id="car-axis" type="number" name="car-axis"  >
  </div>
  <div class="car__input">
    <label for="car-boxlenght">Длинна кузова(мм):</label>
    <input id="car-boxlenght" type="number" name="car-boxlength" >
  </div>
  <p class="errro-inputs">Введите корректные данные</p>
  <div class="car__buttons">
    <button class="button ok">Ok</button>
    <button class="button cancel">Отмена</button>
  </div>
</div>
</form>
`

const modalTruck = `<form class="modal-truck">
<i class="fa-solid fa-xmark fa-2xl" id="close-modal"></i>
<div class="configuration-car__img"><img src="./images/carModel/1122-truck.png" alt="truck" /></div>
<div class="car__inputs truck__inputs">
  <div class="car__input">
    <label for="truck-length">База шасси(мм):</label>
    <input id="truck-length" type="number" name="truck-length" >
  </div>
  <div class="car__input">
    <label for="truck-weigth">Собственная масса шасси(кг):</label>
    <input id="truck-weigth" type="number" name="truck-weigth" >
  </div>
  <div class="car__input">
    <label for="truck-l1">Расстояни от передней оси до сцепного устройства(мм):</label>
    <input id="truck-l1" type="number" name="truck-l1" >
  </div>
  <div class="car__input">
    <label for="truck-axis">Количество осей задней тележки (поставьте 1, если сзади просто ось):</label>
    <input id="truck-axis" type="number" name="truck-axis" >
  </div>
  <div class="car__buttons">
    <button class="button ok" id="modal-ok-truck" >Ok</button>
    <button class="button cancel">Отмена</button>
  </div>
</div>
</form>
`

const modalTrailer = `<form class="modal-trailer">
<i class="fa-solid fa-xmark fa-2xl" id="close-modal"></i>
 <div class="configuration-car__img"><img src="./images/carModel/1122-trailer.png" alt="trailer" /></div>
 <div class="car__inputs trailer__inputs">
   <div class="car__input">
     <label for="trailer-weigth">Масса пустого полуприцепа(кг):</label>
     <input id="trailer-weigth" type="number" name="trailer-weigth" >
   </div>
   <div class="car__input">
     <label for="trailer-boxlength">Погрузочная (полезная) длинна полуприцепа(мм):</label>
     <input id="trailer-boxlength" type="number" name="trailer-boxlength" >
   </div> 
   <div class="car__input">
     <label for="trailer-Lb">Расстояние от средней оси до точки сцепки полуприцепа(мм):</label>
     <input id="trailer-Lb" type="number" name="trailer-Lb" >
   </div>
   <div class="car__input">
     <label for="trailer-Lc">Расстояние от средней оси до задней стенки полуприцепа(мм):</label>
     <input id="trailer-Lc" type="number" name="trailer-Lc" >
   </div>
   <div class="car__input">
     <label for="trailer-axis">Количество осей задней тележки (поставьте 1, если сзади просто ось):</label>
     <input id="trailer-axis" type="number" name="trailer-axis" >
   </div>
   <div class="car__buttons">
     <button class="button ok" id="modal-ok-trailer">Ok</button>
     <button class="button cancel">Отмена</button>
   </div>
 </div>
</form>

`
const modalSave = `<form class="modal-save">
  <i class="fa-solid fa-xmark fa-xl" id="close-modal"></i>
  <div class="car__inputs" id="car__inputs-save">
   <div class="car__input">
     <label for="cargo-name">Наименование груза:</label>
     <input id="cargo-name" type="name" name="cargo-name" >
   </div>
   <div class="car__buttons">
     <button class="button ok" id="modal-ok-save">Ok</button>
     <button class="button cancel" id="modal-cancel-save" >Отмена</button>
   </div>
 </div>
</form>`

const modalDelete = `<form class="modal-delete">
  <i class="fa-solid fa-xmark fa-xl" id="close-modal-delete"></i>
  <div class="car__inputs ">
   <div class="car__buttons">
     <button class="button ok" id="modal-ok-delete">Ok</button>
     <button class="button cancel" id="modal-cancel-delete" >Отмена</button>
   </div>
 </div>
</form>`

const modalShowCargoFromUserCabinet = `
<i class="fa-solid fa-xmark fa-xl" id="close-modal"></i>
<h2 class="blocks-title modal-title">Схематическое расположение груза:<span></span></h2>
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

`

  

