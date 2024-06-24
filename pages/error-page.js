const ErrorPage = {
    id: "error",
    title: "Warning...",
    render: (className = "container", ...rest) => {
      return `
        <section class="${className} error-block">
          <h1>Ошибка 404</h1>
          <p>Страница не найдена, попробуйте вернуться на <a href="#main">главную</a>.</p>
        </section>
      `;
    }
  };