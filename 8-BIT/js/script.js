function menu() {
	$('.menu').click(function() {
		$('.menu_selected').removeClass('menu_selected');
		$(this).addClass('menu_selected');
		$('#sec_overview').css('display','none');
		$('#sec_help').css('display','none');
		$('#sec_updatelog').css('display','none');
	});
	$('#menu_overview').click(function(){$('#sec_overview').css('display','block');});
	$('#menu_help').click(function(){$('#sec_help').css('display','block');});
	$('#menu_updatelog').click(function(){$('#sec_updatelog').css('display','block');});

	$('#more_launcher').mouseenter(function(){
		$(this).css("text-decoration","none");
		$('#more_launchers').fadeIn(250);
	});

	$('#1b').mouseover(function(){$('#text_promotion').text('Here comes 8-BIT to stimulates your emotion');});
	$('#1b_g').mouseover(function(){$('#text_promotion').text('Here comes 8-BIT to stimulates your emotion');});
	$('#1b_k').mouseover(function(){$('#text_promotion').text('Here comes 8-BIT to stimulates your emotion');});
	$('#8b').mouseover(function(){$('#text_promotion').text('Here comes 8-BIT to stimulates your emotion');});
	$('#8m').mouseover(function(){$('#text_promotion').text('Here comes 8-BIT to stimulates your emotion');});
}



function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;

    if(this.diff > 0) {
        self.count += Math.ceil(this.diff / 15);
    }

    this.target_frame.innerHTML = this.formatNumber(this.count);

    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, 20);
    } else {
        clearTimeout(this.timer);
    }
};
numberCounter.prototype.formatNumber = function(num) {
    num+= '';
    x = num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};


$(window).scroll(function() {
	if (document.height === null) { // this is for old IE
		pageYOffset = document.documentElement.scrollTop;
	}
	//$('#feature1').html(pageYOffset + ', ' + ($('header').outerHeight() + $('#sec1').outerHeight()));

	var animation_ready = 300 - $(window).height();

	var sec0_height = ($('header').outerHeight() + $('#sec0').outerHeight());
	var sec1_height = (sec0_height + $('#sec1').outerHeight());
	var sec2_height = (sec1_height + $('#sec2').outerHeight());
	var sec3_height = (sec2_height + $('#sec3').outerHeight());

	function scroll_animation() {
		if (pageYOffset > sec0_height + animation_ready && pageYOffset <= sec1_height + animation_ready) { //sec1
			$('#phone').css({'top':sec0_height+'px'});
			$('#img_f2').fadeOut();
			$('#img_f3').fadeOut();
			$('#img_f1').fadeIn();

			$('#feature1').css({'opacity':'1','padding-left':'360px'});
		}

		if (pageYOffset > sec1_height + animation_ready && pageYOffset <= sec2_height + animation_ready) { //sec2
			$('#phone').css({'top':sec1_height+'px'});
			$('#img_f1').fadeOut();
			$('#img_f3').fadeOut();
			$('#img_f2').fadeIn();

			$('#feature2').css({'opacity':'1','padding-left':'360px'});
			if ($('#icons_num').text()=="2800") {
				new numberCounter("icons_num", 2800);
			}
		}

		if (pageYOffset > sec2_height + animation_ready && pageYOffset <= sec3_height + animation_ready) { //sec3
			$('#phone').css({'top':sec2_height+'px'});
			$('#img_f1').fadeOut();
			$('#img_f2').fadeOut();
			$('#img_f3').fadeIn();

			$('#feature3').css({'opacity':'1','padding-left':'360px'});
		}

		if (pageYOffset > sec3_height + animation_ready ) { //sec4
			$('#feature_down').css({'opacity':'1','margin':'0'});
			$('.reviews').delay( 800 ).css({'opacity':'1','margin':'0 0 3em 0'});
		}
	}
	if ($(window).width()>=600) {
		scroll_animation();
	};
});

$(function() {
	menu();
	$('#phone').css({'top':($('header').outerHeight() + $('#sec0').outerHeight())+'px'});
});
