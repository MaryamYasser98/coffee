let navbar =  document.querySelector('.navbar');
let bar = document.querySelector('#menu-btn')

let cartitem =  document.querySelector('.cart-items-container');
let cartbtn = document.querySelector('#cart-btn')

let searchform =  document.querySelector('.search-form');
let searchbtn = document.querySelector('#search-btn')

bar.onclick = () =>{
    navbar.classList.toggle('active')
    cartitem.classList.remove('active')
    searchform.classList.remove('active')
}

cartbtn.onclick = () =>{
    cartitem.classList.toggle('active')
    navbar.classList.remove('active')
    searchform.classList.remove('active')
}

searchbtn.onclick = () =>{
    searchform.classList.toggle('active')
    navbar.classList.remove('active')
    cartitem.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    cartitem.classList.remove('active')
    searchform.classList.remove('active')
}