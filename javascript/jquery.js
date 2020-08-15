$(document).ready(function(){
	var flag=0;
	$(".ul_2 .living_room").css("background-color", 'green');
	$('.ul_2 li').click(function(){
		$(this).css('background-color', 'green');
		$(this).siblings().css('background-color', '#2c3e50');
	});

	$('.living_room').click(function(){
		flag=0;
		$('.photo_living_room').css('display', 'block');
		$('.photo').animate({height: '200px' , width: '240px'});
		$('.photo').siblings().css('display','block');
		$('.photo_living_room').siblings().css('display', 'none');
	});

	$('.bed_room').click(function(){
		flag=0;
		$('.photo_bed_room').css('display', 'block');
		$('.photo').animate({height: '200px' , width: '240px'});
		$('.photo').siblings().css('display','block');
		$('.photo_bed_room').siblings().css('display', 'none');
	});

	$('.office_furniture').click(function(){
		flag=0;
		$('.photo_office_furniture').css('display', 'block');
		$('.photo').animate({height: '200px' , width: '240px'});
		$('.photo').siblings().css('display','block');
		$('.photo_office_furniture').siblings().css('display', 'none');
	});

	$('.bathroom').click(function(){
		flag=0;
		$('.photo_bathroom').css('display', 'block');
		$('.photo').animate({height: '200px' , width: '240px'});
		$('.photo').siblings().css('display','block');
		$('.photo_bathroom').siblings().css('display', 'none');
	});

	$('.photo').click(function(){
		flag++;
		if(flag%2==1){
			$('this').animate({
				height: '100%',
				width: '100%'
			}, 1000);
			$(this).siblings().css('display', 'none');
			$('.price').parent().css('display','block');
			$('.price').html($(this).attr("value"));
			$('.price').fadeIn(2000);
		} else{
			$('.price').fadeOut(100);
			$(this).animate({
				height: '200px',
				width: '240px'
			}, 500, function(){
				$(this).siblings().css('display', 'block');
			});
		}
	});
	
});