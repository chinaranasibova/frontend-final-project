$(document).ready(function () {
  $(".dropdownn").click(function (e) {
    e.preventDefault();
  
    if ($(this).find(".ul-listt").css('display') == 'none') {
      $(this).find('svg').css('transform', 'rotate(-180deg)');
    }
    else {
      $(this).find('svg').css('transform', 'rotate(0deg)');
    }



    $(".ul-listt").slideToggle();

  });





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

});

