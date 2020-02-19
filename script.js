window.addEventListener('load', () => {
    openInformationSection();
    openFooter();
}); 

function openHeader () {
    let header = document.getElementById('openHeader');

    header.innerHTML = `
        <div class="header-container">
            <div class="logo"><img src="/assets/images/logo.svg" alt="logo" onclick="location.href='/'"></div>

            <div class="navi-underline ${document.location.pathname === '/' ? 'navi-underline-selected' : ''}"><a href="/">Главная</a></div>
            <div class="navi-underline ${document.location.pathname === '/learn/' ? 'navi-underline-selected' : ''}"><a href="/learn/">Не Главная</a></div>

            <div class="login">
                <button class="enter" id="enter" onclick="pdOpenWindows(true, 1)">Войти</span>
                <button class="registration" id="registr" onclick="pdOpenWindows(true, 2)">Зарегистрироваться</span>
                <button class="menu-button"><img src="/assets/images/menu.png" onclick="showHamburgerMenu()"></button>
            </div>
        </div>
    `
}


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
            <div class="form-inner">
                <div class="form-options">
                    <span class="form-name" id="form-name">${formName}</span>
                    <img src="/assets/images/cancel.png" alt="" class="form-image" id="close-button" onclick="closeForm()">
                </div>
                <div class="enter-options">
                    <p class="placeholder-login" id="placeholder-login">${placeholderLogin}</p>
                    <input type="text" class="login" id="login">
                    <p class="placeholder-password" id="placeholder-password">${placeholderPassword}</p>
                    <div class="password-container">
                        <input type="password" class="password" id="password">
                        <img src="/assets/images/show.png" id="show-password" onclick="switchPassword()">
                    </div>
                    <button type="submit" class="enter-form" id='enter-form' onclick="closeForm()">${button}</button>
                </div>
            </div>
            </section> 

            <div style="position: fixed; top: 0; left: 0; bottom: 0; right: 0; background: rgba(0, 0, 0, 0.301); z-index: 100;" onclick="pdOpenWindows(false)"></div>
        `
    } else {
        pdInnerForm.innerHTML = '';
    }
} //pdOpenWindows()

function switchPassword () {
    let password = document.getElementById('password');
    let showPassword = document.getElementById('show-password');

    if (password.type == "password") {
        password.type = "text";
        showPassword.src = "./assets/images/eye.png";
    } else if (password.type == "text") {
        password.type = "password";
        showPassword.src = "./assets/images/show.png";
    }
}

function closeForm () {
    pdInnerForm.innerHTML = '';
}

function showHamburgerMenu() {
    let hamburgerMenu = document.getElementById('menu-button');

    hamburgerMenu.innerHTML = `

        <div class="hamburger-menu">
            <ul>
                <li><img src="/assets/images/cancel.png" alt="" class="close" onclick="closeHamburgerMenu ()"></li>
                <li><a href="/">Главная</a></li>
                <li><a href="/learn/">Не Главная</a></li>
                <li class="suggest-menu" id="enter" onclick="pdOpenWindows(true, 1)">Войти</li>
                <li class="suggest-menu" id="registr" onclick="pdOpenWindows(true, 2)">Зарегистрироваться</li>
                
            </ul>
        </div>

    `
}

function closeHamburgerMenu () {
    let hamburgerMenu = document.getElementById('menu-button');
    hamburgerMenu.innerHTML = '';
}


function openInformationSection() {
    let information = document.getElementById('information');

    information.innerHTML = `
    <section class="information">
            <div class="information-container">

                <div class="main-information">
                    <span class="information-title">Общая информация</span>
                    <p class="information-subtitle">Оператором криптоплатформы BYNEX является Общество с ограниченной ответственностью «ЕРПБЕЛ». УНП 690610877 <br><br>
                        Адрес: 220141, г. Минск, пр. Независимости, 172, офис 308 Банковские реквизиты: р/с BY54BAPB30122317100170000000 в ОАО "Белагропромбанк" <br><br>
                        Адрес банка: 220036 г. Минск, пр. Жукова, 3, БИК BAPBBY2X Адрес электронной почты: <a href="mailto:support@bynex.by">support@bynex.by</a> <br><br>
                        Общество с ограниченной ответственностью «ЕРПБЕЛ» является резидентом Парка высоких технологий с 2008 года 
                        (свидетельство о регистрации № 0000054 от 10.10.2008) и осуществляет свою деятельность в соответствии с Декретом Президента Республики Беларусь
                        от 21 декабря 2017 г. № 8 и иным законодательством. <br><br>
                        Торги токенами на криптоплатформе BYNEX проводятся круглосуточно.</p>
                </div>

                <div class="links">
                    <span class="information-title">Полезные ссылки</span>
                    <p class="information-subtitle">Котировальный лист расположен по ссылке 
                        <a href="https://bynex.by/docs/quotation_sheet">https://bynex.by/docs/quotation_sheet</a> <br><br> 
                        Архив цен на токены, по которым совершались сделки с токенами на криптоплатформе BYNEX расположен по 
                        ссылке <a href="https://bynex.by/docs/price_archive">https://bynex.by/docs/price_archive</a> <br><br>
                        Общие условия реализации расположены по ссылке <a href="https://bynex.by/docs/terms">https://bynex.by/docs/terms</a> <br><br> 
                        Порядок управления конфликтом интересов расположен по 
                        ссылке — <a href="https://bynex.by/docs/conflict_of_interest">https://bynex.by/docs/conflict_of_interest</a> <br><br> 
                        Требования к рекламе деятельности оператора криптоплатформы расположены по ссылке — 
                        <a href="https://bynex.by/docs/ads">https://bynex.by/docs/ads</a></p>
                </div>

                <div class="immaterial-information">
                    <div class="dispute">
                        <span class="information-title">Разрешение споров</span>
                        <p class="information-subtitle">В случае, несогласия ПОЛЬЗОВАТЕЛЯ с действиями (бездействием) ООО «ЕРПБЕЛ» ПОЛЬЗОВАТЕЛЬ вправе обратиться 
                            в суд в соответствии с порядком, указанном в ПОЛЬЗОВАТЕЛЬСКОМ СОГЛАШЕНИИ, учитывая досудебный (претензионный) порядок разрешения споров. 
                            ПОЛЬЗОВАТЕЛЬ вправе предложить ООО «ЕРПБЕЛ» урегулировать возникший спор посредством медиации.</p>
                    </div>

                    <div class="report">
                        <span class="information-title">Хранение отчетов</span>
                        <p class="information-subtitle">Услуги по хранению (депонированию) отчетов о действиях пользователей на криптоплатформе BYNEX и количестве их 
                            активов в соответствии с требованиями ПВТ оказываются Обществом с ограниченной ответственностью «Бидмартс». Адрес: 220141, г. Минск, 
                            пр-т. Независимости 172, офис 311 <br>
                            Адрес электронной почты: <a href="mailto:bfi@bidmart.by">bfi@bidmart.by</a> 
                            Контактный телефон: <a href="tel:+375 (29) 645-37-10">+375 (29) 645-37-10</a></p>
                    </div>
                </div>
            </div> 
        </section>
    `
}

function openFooter() {
    let footerDiv = document.getElementById('footer');

    footerDiv.innerHTML = `
    <footer>
        <span class="footer-quote">2020 BYNEX.BY</span>
    </footer>
    `
}