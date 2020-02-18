window.addEventListener('load', () => {

    let openMenu = document.getElementsByClassName('menu-button')[0];
    let close = document.getElementsByClassName('close')[0];
    let hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
    let button = document.getElementById('enter-form');

    openMenu.addEventListener('click', () => {
        hamburgerMenu.style.display = 'block';
    });

    close.addEventListener('click', () => {
        hamburgerMenu.style.display = 'none';
    });
    // button.addEventListener ('click', () => {
    //     hamburgerMenu.style.display = 'none';
    // });
}); 


function pdOpenWindows (a, content) {
    let pdInnerForm = document.getElementById('pdInnerForm');
    
    if (content === 1) {
        formName = 'Вход';
        placeholderLogin = 'Введите логин';
        placeholderPassword = 'Введите пароль';
        button = 'Войти';
    } else if (content === 2) {
        formName = 'Регистрация';
        placeholderLogin = 'Придумайте логин';
        placeholderPassword = 'Придумайте пароль';
        button = 'Зарегистрироваться';
    }
    
    if (a) {
        pdInnerForm.innerHTML = `
            <section class="form">
                <div class="form-options">
                    <span class="form-name" id="form-name">${formName}</span>
                    <img src="./assets/images/cancel.png" alt="" class="form-image" id="close-button" onclick="closeForm()">
                </div>
                <div class="enter-options">
                    <p class="placeholder-login" id="placeholder-login">${placeholderLogin}</p>
                    <input type="text" class="login" id="login">
                    <p class="placeholder-password" id="placeholder-password">${placeholderPassword}</p>
                    <div class="password-container">
                        <input type="password" class="password" id="password">
                        <img src="./assets/images/show.png" id="show-password" onclick="switchPassword()">
                    </div>
                    <button type="submit" class="enter-form" id='enter-form' onclick="closeForm()">${button}</button>
                </div>
            </section> 

            <div style="position: fixed; top: 0; left: 0; bottom: 0; right: 0; background: rgba(0, 0, 0, 0.301); z-index: 100;" onclick="pdOpenWindows(false)"></div>
        `
    } else {
        pdInnerForm.innerHTML = '';
    }
}

function switchPassword () {
    let password = document.getElementById('password');
    let showPassword = document.getElementById('show-password');

    if (password.type == "password") {
        password.type = "text";
        showPassword.src = "../assets/images/eye.png";
    } else if (password.type == "text") {
        password.type = "password";
        showPassword.src = "../assets/images/show.png";
    }
}

function closeForm () {
    pdInnerForm.innerHTML = '';
}