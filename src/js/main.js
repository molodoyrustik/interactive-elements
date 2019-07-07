$(document).ready(function(){

	// dropdown
	(function(){
		var nav = $('.nav');
		$('.nav__item-link, .dropdown').on({
			mouseenter : function (e) {
				nav.addClass('active');
			},

			mouseleave : function () {
				nav.removeClass('active');
			}
		});
		
	}());
	
	// очереднь анимаций
	(function(){

		var flag = true;
	    
		$('.line__trigger').on('click', function(e){
		    e.preventDefault();

			var block = $('.line__block'),
				anotherState = $.Deferred();

			if (flag) {
				flag = false;

				$.when(animateIt(), anotherState).done(function () {
					flag = true;
				});
			}

			function animateIt() {
				var animationState = $.Deferred(),
					isActive = block.hasClass('active'),
					values = isActive ? "0px" : "500px";

					block.toggleClass('active');

					block.css({
						left : values
					});

					setTimeout(function () {
						anotherState.resolve();
					}, 3000)

					block.on('transitionend', function () {
						animationState.resolve();
					});

				return animationState;
			}
		});

	})();
	
	// анимация с рекурсией
	(function(){
		var items = $('.blocks__item');
		var startColor = 0x16a085;
		var counter = 0;

		function each() {
			var item = items.eq(counter).find('.blocks__link');

			item.css({
				'background-color' : '#' + startColor.toString(16)
			});

			startColor = startColor + 0x000002;
			counter++;

			// if (counter === items.length) {
			// 	if (typeof timer != 'undefined') {
			// 		clearTimeout(timer);
			// 	}
			// 	counter = 0;
			// }
			// timer = setTimeout(each, 100);
			
			// выход из рекурсии
			if (counter < items.length) {
				timer = setTimeout(each, 1000);
			}
			
		}

		each();
	}());

}); // -> ready_end;

var title = require('./title');
title();

if (document.querySelector('.section__elem')) {
	var wow = require('./wow');
	wow();
}
