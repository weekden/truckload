const Instructions = {
    id: "instructions",
    title: "Инструкции",
    render: (className = "container", ...rest) => {
        return `
    <section class="${className} instructions">
    <div class="home-page__img">
        <img src="./images/head/4.jpg">
        <div class="home-page__img-main">
          <h2>Инструкции по вычилениям</h2>
        </div>
      </div>
      <div class="wrapper">
        <h2 class="blocks-title">Инструкции по измерениям</h2>
        <div class="instructions-img"><img src="./images/instruction/12.jpg" alt="truck-photo"></div>
        <div class="instructions-text">
          <h3>Параметры тягача</h3>
          <p>Lт - база тягач</p>
          <P>l1 - Расстояние от передней оси до центра приложения массы загрузки (седла)</P>
          <P>l2 - Расстояние от задней оси до центра приложения массы загрузки (седла)</P>
          <P>N1 - нагрузка на переднюю ось</P>
          <P>N2 - нагрузка на заднюю ось</P>
        </div>
        <div class="instructions-img"><img src="./images/instruction/22.jpg" alt="trailer-photo"></div>
        <div class="instructions-text">
          <h3>Параметры полуприцепа</h3>
          <p>La - погрузочная (полезная) длинна полуприцепа</p>
          <P>Lb - расстояние от средней оси до точки сцепки полуприцепа</P>
          <P>Lc - расстояние от средней оси до задней стенки полуприцепа</P>
        </div>
        <div class="instructions-text">
          <h3>Методика расчета нагрузки на ось </h3>
          <p>Расчет нагрузки на ось производится очень просто, согласно специальным формулам. При этом, масса конкретного транспортного средства напрямую зависит от нагрузок на обе его оси.</p>
          <P>В связи с этим рассчитать ось на нагрузку можно по формуле: масса автотранспортного средства автомобиля (снаряженная или же не полная) равна нагрузке на переднюю ось авто плюс нагрузка на заднюю ось.</P>
          <P>Вы всегда сможете произвести расчет нагрузки на ось тягача и полуприцепа, автопоезда и грузового автомобиля или любого автотранспортного средства, используя наш удобный онлайн калькулятор нагрузки на ось. Такой предварительный расчет необходимо производить и транспортным компаниям, которые занимаются перевозками грузов любой специфики, и бизнесменам, которые собираются заказать услугу «транспортировка груза» в профильной компании.</P>
        </div>
        <button class="calc-button"><a href="#start-calculation">Рассчитать</a></button>
      </div>

    </section>
  `;
    },

    init: () => {}
};