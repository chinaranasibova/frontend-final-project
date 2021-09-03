$(document).ready(function () {
  


  const body = document.querySelector('body');
  const itemWorks = document.querySelector('.item-works');
  const smallBox = document.querySelector('.small-box');
  const itemResoruces = document.querySelector('.item-resources');
  const bigBox = document.querySelector('.big-box');
  
  itemWorks.addEventListener('click', function(e){
      smallBox.classList.toggle('active');
      const icon1=document.querySelector('.dropdown-small .down-icon');
      icon1.classList.toggle('active');
      
  
  });
  
  itemResoruces.addEventListener('click', function(){
      bigBox.classList.toggle('active')
      const icon2=document.querySelector('.dropdown-big .down-icon');
      icon2.classList.toggle('active');
  })
  




  $(".dropdownright").click(function (e) {
    e.preventDefault();

    if ($(this).find(".dropdown-right").css('display') == 'none') {
      $(this).find('svg').css('transform', 'rotate(-180deg)');
    }
    else {
      $(this).find('svg').css('transform', 'rotate(0deg)');
    }

    $(".dropdown-right").slideToggle();

  })



  $('.image-icon').click(function (e) {
    
    if ($(this).parent().next(".accordion-contentt").css('display') == 'none') {
      $(this).find('img').css('transform', 'rotate(90deg)');
    }
    else {
     
      $(this).find('img').css('transform', 'rotate(0)');

    }



    $(this).parent().next().slideToggle();
  })

  const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuScreen =document.querySelector('.hamburger-menu-screen')
const clickSmall = document.querySelector('.click-small');
const clickBig = document.querySelector('.click-big');
const menuIconSmall = document.querySelector('.down-icon.icon-small');
const menuIconBig = document.querySelector('.icon-big');
const openSmall = document.querySelector('.dropdown-open.open-small');
const openBig = document.querySelector('.open-big');

hamburgerMenu.addEventListener('click', function(){
    hamburgerMenuScreen.classList.toggle('active');

})

clickSmall.addEventListener('click', function(){
    openBig.classList.remove('active');
    menuIconBig.classList.remove('active');
    openSmall.classList.toggle('active');
    menuIconSmall.classList.toggle('active')
})

clickBig.addEventListener('click', function(){
    openSmall.classList.remove('active');
    menuIconSmall.classList.remove('active')
    openBig.classList.toggle('active');
    menuIconBig.classList.toggle('active');
})


  // $('#card-section .card-elements').click(function(){
  //   $('#card-section .card-elements').not($(this)).css('opacity',0.6);
  //   $(this).css('opacity','1');
  // });


});

const cardElements=document.querySelectorAll("#card-section .card-elements");

function clearOpacity(){
  cardElements.forEach(elem=>{
    elem.style.opacity=0.6;
    elem.style.borderBottom="none";
  });
}


  cardElements.forEach(elem => {
      elem.addEventListener('click',function(){
        clearOpacity();
        elem.style.opacity = 1;
        elem.style.borderBottom="1px solid #ff9a83";

      })
   });

  document.querySelector('.image-iconn').addEventListener('click',function(){
    document.querySelector('.modal').style.display='block';
  });

  document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modal').style.display='none';
    document.querySelector('iframe').setAttribute('src',document.querySelector('iframe').getAttribute('src'));
  });

