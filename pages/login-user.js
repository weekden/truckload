// Проверяем залогинен ли пользователь мало-ли очититься localStorage
auth.onAuthStateChanged(function (user) {
    if (user) {
        localStorage.setItem("userId", user.uid);

        console.log("User is login");
    } else {
        console.log("User is not login");
    }
});

const LoginUser = {
    id: "user-login",
    title: "Вход",

    render: (className = "container", ...rest) => {
        return `
    <section class="${className} user-login">
    <div class="home-page__img">
        <img src="./images/head/5.webp">
        <div class="home-page__img-main">
          <h2>Регистрация пользователей</h2>
          <button class="calc-button"><a href="#start-calculation">Рассчитать</a></button>
        </div>
      </div>
      <div class="wrapper">
        <h2 class="blocks-title">4 ПРОСТЫХ ШАГА ДЛЯ РАСЧЁТА</h2>
        ${steps}
        <form class="login-form" action="">
    <div class="mb-3">
        <label for="exampleInputEmail" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail"  name="useremail" required>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword" name="userpassword" required>
    </div>
    <button class="btn btn-entery" id="btn-entery">Вход</button>
    <button class="btn btn-registration" id="btn-registration">Регистрация</button>
    <p class="form-label__message" id="message__negative-input">Неверное имя пользователя или пароль</p>
    <p class="form-label__message" id="message__positive-regist">Поздравляем с успешной регистрацией</p>
</form>

      </div>
    </section>
  `;
    },

    // Показ сообщений при регистрации и некоректном входе в систему
    showSuccessMessage: function (isSuccess) {
        const userEmailInput = document.querySelector("#exampleInputEmail");
        const userPasswordInput = document.querySelector("#exampleInputPassword");
        const messageNegativeInput = document.querySelector("#message__negative-input");
        const messagePositiveRegist = document.querySelector("#message__positive-regist");

        if (isSuccess) {
            messageNegativeInput.classList.add("show-elem");
            messagePositiveRegist.classList.remove("show-elem");
            userEmailInput.value = "";
            userPasswordInput.value = "";
        } else {
            messagePositiveRegist.classList.add("show-elem");
            messageNegativeInput.classList.remove("show-elem");
        }
    },
 
    createUser: function (emailInput, passwordInput) {
        auth.createUserWithEmailAndPassword(emailInput, passwordInput)
            .then((userCredential) => {
                const user = userCredential.user;
                myAppDB
                    .ref(`users/${user.uid}`)
                    .set({ login: user.email})
                    .then(function () {
                    })
                    .catch(function (error) {
                        console.error("Ошибка добавления user: ", error);
                    });
                this.showSuccessMessage(false);
            })
            .catch((error) => {
                console.error("Ошибка добавления пользователя в базу данных:", error);
            });
    },
    
    // Регистрация пользователя
    login: function (emailInput, passwordInput) {
        auth.signInWithEmailAndPassword(emailInput, passwordInput)
            .then((response) => {
                localStorage.setItem("userId", response.user.uid);
                window.location.href = "#user-cargo";
            })
            .catch((error) => {
                this.showSuccessMessage(true);
                console.error("Error: " + error.message);
            });
    },
    // Выход пользователя
    logout: function () {
        auth.signOut().then(() => {
            localStorage.removeItem("userId");
        });
    },

    init: function () {
        const userCargoPage = document.querySelector("#user-cargo__btn");
        const userLoginPage = document.querySelector("#user-login__btn");
        const loginForm = document.querySelector(".login-form");

        // Обработчик событий на форму и регистрация или вход
        loginForm.addEventListener("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();

            const userEmailInput = document.querySelector("#exampleInputEmail").value;
            const userPasswordInput = document.querySelector("#exampleInputPassword").value;

            if (ev.target && ev.target.id === "btn-registration") {
                if (userEmailInput.trim() === "" || userPasswordInput.trim() === "") {
                    userEmailInput = "";
                    userPasswordInput = "";
                    return;
                }
                LoginUser.createUser(userEmailInput, userPasswordInput);
                userCargoPage.classList.add("has-content");
                userLoginPage.classList.add("dnthas-content");
                setTimeout(() => {
                    window.location.href = "#main";
                }, 2000);
            } else if (ev.target && ev.target.id === "btn-entery") {
                LoginUser.login(userEmailInput, userPasswordInput);
                userCargoPage.classList.add("has-content");
                userLoginPage.classList.add("dnthas-content");
            }
        });
    },
};
