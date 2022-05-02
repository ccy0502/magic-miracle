$(function(){
	$('.navbar-brand').addClass('none');
	window.addEventListener('scroll',()=>{
		var height = $('.navbar').offset().top;
		var nav = height <= 300;
		var others = false;
		if (nav || others)
			opa0()
		else 
			opa1()
	});
	function opa0(){
		$('.navbar').removeClass('opa');
		$('.navbar-brand').addClass('none');
	};
	function opa1(){
		$('.navbar').addClass('opa');
		$('.navbar-brand').removeClass('none');
	};
	var swiper = new Swiper('.shop-swiper',{
		effect: 'coverflow',
		centeredSlides: true,
		slidesPerView: '1.8',
		coverflowEffect:{
			rotate: 20,
			stretch: 0,
			depth: 100,
			modifier: 2
		},
		autoplay:{
			delay: 5000
		},
		navigation:{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: false,
		keyboard: true,
		simulateTouch: false,
		parallax: true
	});
	$('.addcart').click(function(){
		$('.shopcheck').fadeIn();
		setTimeout(function(){
			$('.shopcheck').fadeOut();
		},500)
	});
	$('.robot').click(()=>{
		$('.chat').fadeToggle();
	});
	$('.addd').submit(()=>{
		$('body').removeClass('modal-open');
		$('body').css('padding','0');
		$('#block3').css('display','none');
		$('.modal-backdrop').css('display','none');
		alert('報名成功，報名資訊將寄至您的電子郵件信箱。');
		return false
	});
	$('.contact').submit(()=>{
		$('body').removeClass('modal-open');
		$('body').css('padding','0');
		$('#block2').css('display','none');
		$('.modal-backdrop').css('display','none');
		alert('意見提交成功，我們將會儘速為您處理。');
		return false
	});
	$('#r1').click(function(){
		$('.window').append(`
			<div class="human-chat">是否會有突起或尖銳部分？</div>
			<br>
			<div class="robot-chat">否，我們做的成品與市面上的產品不同的地方在於 我們在每一個零件上都有做真圓度以及射出後的修整 來確保我們的成品不會造成割傷的問題</div>
		`)
	});
	$('#r2').click(function(){
		$('.window').append(`
			<div class="human-chat">玩具是符合全年齡遊玩的嗎？</div>
			<br>
			<div class="robot-chat">您好，本產品提供多種依年齡對應難度之組合，可依照年齡挑選適合之產品。</div>
		`)
	});
	$('#r3').click(function(){
		$('.window').append(`
			<div class="human-chat">是否有實體店面能夠購買？</div>
			<br>
			<div class="robot-chat">您好，目前全台皆無實體門市，官方網站為唯一銷售通路。</div>
		`)
	});
	$('#r4').click(function(){
		$('.window').append(`
			<div class="human-chat">塑膠材質是否符合標準？</div>
			<br>
			<div class="robot-chat">本產品使用的塑膠是符合玩具材質標準的，我們所採用的塑膠材質皆為ABS樹酯。</div>
		`)
	});
	$('.chat-click').click(function(){
		if($('.input').val() == ''){
			return false
		}
		else{
			$('.window').append(`
				<div class="human-chat">`+$('.input').val()+`</div>
			`);
			$('.input').val('')	
		}
		
	});
})