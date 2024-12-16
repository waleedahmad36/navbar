const container = document.querySelector('.container');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click',()=>{
    container.classList.toggle('navigate');
});