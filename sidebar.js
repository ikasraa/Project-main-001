const sideBarButton = document.getElementById('side-bar-btn');
const sideBar = document.getElementById('side-bar')
const main = document.getElementById('main')
const nav = document.getElementById('nav')

sideBarButton.addEventListener('click', ()=>{
    sideBar.classList.toggle('nav-right-open')
    sideBar.classList.toggle('nav-right-closed')
    main.classList.toggle('margin-22')
    main.classList.toggle('margin-7')
    nav.classList.toggle('margin-20')
    nav.classList.toggle('margin-5')
})