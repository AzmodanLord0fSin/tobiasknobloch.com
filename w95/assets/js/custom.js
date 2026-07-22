/*! Version: 21.12.23 */

// highlight.js
hljs.initHighlightingOnLoad();

jQuery(document).ready(function ($) {
	// Clock
	setInterval('updateClock()', 1000);

	// Main nav toggle
	$("#nav-toggle").on('click', function (e) {
		$(this).toggleClass("active");
		e.preventDefault();
		return false;
	});

	// Share Buttons
	$('.social-media-share').on('click', 'a', function (e) {
		e.preventDefault();

		var popup_url = $(this).prop('href'),
			popup = window.open(popup_url, '', 'height=250,width=600,toolbar=0,menubar=0,location=0');

		if (window.focus) {
			popup.focus();
		}
	});
});

jQuery(window).on('load', function () {
	// Main nav
	jQuery('.nav-slide-button').on('click', function () {
		jQuery('.pull').fadeToggle();
	});
	jQuery('.top-nav ul > li > a').on('click', function () {
		jQuery('.pull').fadeToggle();
		jQuery("#nav-toggle").toggleClass("active");
	});
});

function updateClock (){
	var currentTime = new Date ( );
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );

	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	// Choose either "AM" or "PM" as appropriate
	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

	// Convert the hours component to 12-hour format if needed
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

	// Convert an hours component of "0" to "12"
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

	// Compose the string for display
	var currentTimeString = currentHours + ":" + currentMinutes + timeOfDay;

	jQuery("#w95-clock").html(currentTimeString);
}