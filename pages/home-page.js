const HomePage = {
  id: "main",
  title: "Главная страница примера SPA",
  render: (className = "container", ...rest) => {
      return `
    <section class="${className} home-page">
    
      <div class="home-page__img">
        <img src="./images/head/1.webp">
        <div class="home-page__img-main">
          <h2>Быстрый расчет осевых нагрузок</h2>
          <button class="calc-button"><a href="#start-calculation">Рассчитать</a></button>
        </div>
      </div>
      <div class="wrapper">
      <div class="home-page__steps">
        
        <h2 class="blocks-title">4 ПРОСТЫХ ШАГА ДЛЯ РАСЧЁТА</h2>
          ${steps}
        </div>
      
      <div class="home-page__block-text">
        
          <h2 class="blocks-title block-text__title">РАСЧЕТ ОСЕВЫХ НАГРУЗОК: НЕОБХОДИМАЯ МЕРА ДЛЯ ВСЕХ ГРУЗОПЕРЕВОЗЧИКОВ</h2>
          <div class="block-text__text">
            <p>С 1 июля 2015 года предельная изменяются допустимая общая масса для грузового автомобиля и нагрузки на ось. Таким образом, размещение общего груза на автомобиле должно быть осуществлено так, чтобы общий вес груженого транспортного средства не превышал их допустимую массу, что четко прописано в приложении № 1 к Правилам перевозок грузов автомобильным транспортом.</p>
            <p>Расчет допустимой нагрузки на ось позволяет обозначить именно такую максимальную нагрузку, которую оказывают колеса одной оси транспортного средства на конкретное дорожное покрытие. Для каждого типа автомобиля существуют свои значения допустимых нагрузок на ось, что четко обозначено в соответствующих нормативных актах и обновленных Правилах перевозок грузов.</p>
            <p>Тщательный контроль со стороны государства за состояние автотранспортных средств призван максимально сохранить дорожное покрытие на ведущих автомагистралях страны. В связи с этим на магистралях близ мостов и туннелей все чаще можно встретить специальные весы, которые служат для определения массы автомобиля на каждую ось. В случае, если максимально допустимая масса транспортного средства будет превышена, владельцу автотранспортного средства нужно будет заплатить огромный штраф.</p>
            <p>Поэтому самым простым и надежным способом избежать такого казуса является предварительный расчет осевых нагрузок, который можно произвести в режиме «онлайн» непосредственно на нашем сайте, воспользовавшись простым и удобным КТГ-калькулятором – это онлайн программа расчета нагрузки на ось и размера вреда, причиняемого транспортными средствами (тягачи, полуприцепы, автопоезда, грузовые автомобили и др.)</p>
          </div>
        </div>
        <button class="calc-button"><a href="#start-calculation">Рассчитать</a></button>
      </div>
    </section>
  `;
  },

  init: () => {}
};