let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let headerBg = document.querySelector('.header__bg');
let menuItem = document.querySelectorAll('.header__menu-item');
let body = document.body;
const btnUp = document.getElementById('btn-up');
console.dir(btnUp);

btnUp.onclick = function scrollUpFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById('btn-up').style.right = '2%';
  } else {
    document.getElementById('btn-up').style.right = '-20%';
  }
}

function menueToggle() {
  burger.classList.toggle('burger_active');  
  menu.classList.toggle('toggle');
  body.classList.toggle('no-scroll');
  headerBg.classList.toggle('black');
}

burger.addEventListener('click', function() {  
  menueToggle();
});

headerBg.addEventListener('click', function() {  
  menueToggle(); 
});


  menuItem.forEach(function(item){
    item.addEventListener('click', function(){
      clearClass();
      item.classList.add('active');    
    });       
  });
  function clearClass(){
    menuItem.forEach (function(item){
      item.classList.remove('active');
    })
};
if(body.classList.contains('no-scroll')) {
  body.addEventListener('click', function() {
    console.log('click');
    menu.classList.remove('toggle');
  });
}  