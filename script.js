window.addEventListener('load', () => {

    let openMenu = document.getElementsByClassName('menu-button')[0];
    let close = document.getElementsByClassName('close')[0];
    let hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
    let menuItem = document.getElementsByClassName('suggest-menu');
    let registration = document.getElementById('registr');
    let enter = document.getElementById('enter');
    let form = document.getElementsByClassName('form')[0];

    openMenu.addEventListener('click', () => {
        hamburgerMenu.style.display = 'block';
    });

    close.addEventListener('click', () => {
        hamburgerMenu.style.display = 'none';
    });

    for (let index = 0; index < menuItem.length; index++) {
        menuItem[index].addEventListener('click', () => {
            hamburgerMenu.style.display = 'none';
        } )

    }

    // menuItem.addEventListener ('click', () => {
    //     hamburgerMenu.style.display = 'none';
    // });
}); 

function openWindow(a) {
    console.log(a)
    let form = document.getElementsByClassName('form')[0];
    let formName = document.getElementById('form-name');
    let button = document.getElementById('enter-form');


    form.style.display = 'block';
    formName.innerHTML = a;
    button.innerHTML = a;


}