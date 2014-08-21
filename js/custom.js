var totalDuration = 0.6;
var totalStep = 30;
var timer;
var marginAnimPlayed = false;

$( document ).ready(function() 
{
	/* VEACON MOUSE ANIM */
	$("#veacon").mouseover(function()
	{
		var bgx = parseInt($("#veacon").css("background-position"));
		var step = totalStep - (bgx / -420);
		var duration = totalDuration * step / totalStep;
		var cssString = "background " + duration +"s steps(" + step +", end)";

		$("#veacon").css({"transition": cssString});
		$("#veacon").css({"background-position": "-12600px 0"});

		window.clearTimeout(timer);
		timer = setTimeout(showbutton, 1.1*duration*1000);
	});


	$("#veacon").mouseout(function()
	{
		if ($(".purchase").css("opacity") > 0.0 )
		{
			$(".purchase").stop().fadeOut(function()
			{
				var bgx = parseInt($("#veacon").css("background-position"));
				var step = bgx / -420;
				var duration = totalDuration * step / totalStep;
				var cssString = "background " + duration +"s steps(" + step +", end)";

				$("#veacon").css({"transition": cssString});
				$("#veacon").css({"background-position": "0 0"});
			});	
		}
		else
		{
			var bgx = parseInt($("#veacon").css("background-position"));
			var step = bgx / -420;
			var duration = totalDuration * step / totalStep;
			var cssString = "background " + duration +"s steps(" + step +", end)";

			$("#veacon").css({"transition": cssString});
			$("#veacon").css({"background-position": "0 0"});
		}
	});
	/* HEADER & APP SCROLL ANIM */
	$(window).scroll(function()
	{

		if(!marginAnimPlayed && $(window).scrollTop() >= 2000 )
		{
				$(".va-app").stop().animate({"margin-left":"0px"}, 1000, "swing");
				$(".va-white").stop().animate({"margin-right":"-80px"}, 1000, "swing");
			
				marginAnimPlayed = true;
		}	

		if($(window).scrollTop() <= 100 )
		{
			$("header").removeClass("header-sticky");
		} else if($(window).scrollTop() > 100 )
		{
				$("header").addClass("header-sticky");
		}		

	});

	$('.mobile-menu-btn').click(function(){
		$('.mobile-menu').slideToggle();
	});

	    $('#subscribe').submit(function() {
        $('.notify-area .left-side p').html('<br>Adding email address...');
            $.ajax({
               url: 'inc/store-address.php',
               data: 'ajax=true&email=' + escape($('#email').val()),
               success: function(msg) {
               $('.notify-area .left-side p').html('<br>' + msg);
               }
            });
            return false;
    });

});

/* SHOW PURCHASE BUTTON ANIM */
function showbutton()
{
 		var bgx = parseInt($("#veacon").css("background-position"));

 		console.log(bgx);

 		if(bgx <= -12180)
 		{
			$(".purchase").stop().fadeIn();
 		}
 }



                    




