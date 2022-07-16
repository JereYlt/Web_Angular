/*
$(document).ready(function(){

    var btn= $('#collapse1');
    var card1 = $('.card-body1');

 	var btn2= $('#collapse2');
    var card2 = $('.card-body2');

    var btn3= $('#collapse3');
    var card3 = $('.card-body3');


	$('.card-body1').hide();

  btn.on('click', function(){

  
  	card1.toggle();
  })


	$('.card-body2').hide();

  btn2.on('click', function(){

  
  	card2.toggle(300);
  })

  	$('.card-body3').hide();

  btn3.on('click', function(){

  
  	card3.toggle(300);
  })


   });
    
    
$(document).ready(function ($) {
    //Set default open/close settings

    var divs=$('.accordion>div').hide(); //Hide/close all containers
     

    var h2s=$('.accordion>h2').on(function () {

        h2s.not(this).removeClass('active')
        $(this).toggleClass('active')
        divs.not($(this).next()).slideUp()
        $(this).next().slideToggle()
        return false; //Prevent the browser jump to the link anchor

    });


});

*/
