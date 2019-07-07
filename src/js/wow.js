module.exports = function() {
	var animateCss = (function() {

		var checkDistance = function(scrollTop, elem) {
			var offset = elem.offset().top;
			var windowHeight = Math.ceil($(window).height() / 3);
			var topBorder = offset - scrollTop - windowHeight;
			var bottomEdge = elem.outerHeight(true) + offset;
			var bottomBorder = scrollTop + windowHeight - bottomEdge;

			return topBorder <= 0 && bottomBorder <= 0;
		}

		var animationsActions = {
			toTop: function() {
				console.log('to top');
				$(this).addClass('toTop');
			},

			width: function() {
				var $this = $(this);
				var width = $this.width() + 20;
				$this.css('opacity', 1);
				$this.width(width + 'px');
				console.log('width');
			},

			toRight: function() {
				console.log('to right');
				$(this).addClass('toRight');
			}
		}

		return {
			init: function () {
				$(window).scroll(function() {
					var scrollTop = $(this.window).scrollTop();

					$('.animate').each(function() {
						var $this = $(this);

						if (checkDistance(scrollTop, $this)) {
							var animationType = $this.data('animate');
						
							if (typeof $this.data('animated') == 'undefined') {
								$this.data('animated', true);
						    animationsActions[animationType].call($this);
					    }

						}
					})
				})
			}
		};
	})();

	animateCss.init();
}