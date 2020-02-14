window.addEventListener('load', () => {

    let openMenu = document.getElementsByClassName('menu-button')[0];
    let close = document.getElementsByClassName('close')[0];
    let hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];

    openMenu.addEventListener('click', () => {
        hamburgerMenu.style.display = 'block';
    });

    close.addEventListener('click', () => {
        hamburgerMenu.style.display = 'none';
    });
}); 

function openWindow(a) {
    console.log(a)
    let form = document.getElementsByClassName('form')[0];
    let formName = document.getElementById('form-name');
    let button = document.getElementById('enter-form');
    let closeForm = document.getElementById('close-button');


    form.style.display = 'block';
    formName.innerHTML = a;
    button.innerHTML = a;

    closeForm.addEventListener ('click', () => {
        form.style.display = 'none';
    });


}