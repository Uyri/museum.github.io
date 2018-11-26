
/*главное меню*/
$(function(){	
	$('.menuBurger').on('click', function(){		
		$('.menu__ul').slideToggle(600, function(){			
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
		}		
	});	
 });	
});

/*подменю сайдбара*/		
		$('.menu__lv1 > li > a').click(function (e) {
        e.preventDefault();        
        $('.menu__lv1 > li > a').removeClass('active');  
        $(this).addClass('active');     
    });
	
		// $('.menu__lv2 > li > a').click(function (e) {
  //       e.preventDefault();        
  //       $('.menu__lv2 > li > a').removeClass('active');  
  //       $(this).addClass('active');     
  //   });
	
	$('.menu__lv2 > li > a').click(function (e) {
        e.preventDefault();          
        $(this).toggleClass('active');     
    });

/*карусель*/
		$('.owl-car1').owlCarousel({
		    margin:10,
		    nav:true,		    
			items:1,
			onInitialized: counter,
			onTranslated: counter,
		});

	    function counter(event) {
	        var element = event.target;
	        var items = event.item.count;
	        var item = event.item.index + 1;
	        $('.carousel-counter').html(item + "/" + items)
	    }
	
/*карусель*/	
			$('.owl-car2').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        570:{
		            items:2
		        },
		        839:{
		            items:3
		        },
		        1140:{
		            items:4
		        }
		    }
		});

/*карусель*/	
			$('.owl-car3').owlCarousel({
			loop: true,
		    margin:10,
		    nav:true,
		    items:1		        
		});


		
