(function($) {
	$.fn.gScaled = function() {
		return this.each(function() {
			var o = $(this);
			var f = $(o).data("format").split(':');

			f[0] = parseFloat(f[0]);
			f[1] = parseFloat(f[1]);

			var h = ($(o).width() / f[0]) * f[1];

			$(o).height(h + "px");
		});
	};
})(jQuery);
