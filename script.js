let navOpen = document.getElementById('toggle-menu');
let navClose = document.getElementById('toggle-close');
let navList = document.getElementById('nav-links');

navOpen.addEventListener('click', function(){
    navList.style.right = '0%';
    navOpen.style.right = '-100%';
})

navClose.addEventListener('click', function(){
    navList.style.right = '-100%';
    navOpen.style.right =  '15px';
})