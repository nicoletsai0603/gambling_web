// Detect request animation frame
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1200
    });
});
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function(callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
var elementsToShow2 = document.querySelectorAll('.show-on-scroll2');
var elementsToShow3 = document.querySelectorAll('.show-on-scroll3');
var elementsToShow4 = document.querySelectorAll('.show-on-scroll4');
var elementsprogress1 = document.querySelectorAll('.show-progress1');
var elementsprogress2 = document.querySelectorAll('.show-progress2');
var elementsprogress3 = document.querySelectorAll('.show-progress3');
var elementsprogress4 = document.querySelectorAll('.show-progress4');
var elementsprogress5 = document.querySelectorAll('.show-progress5');
var elementsprogress6 = document.querySelectorAll('.show-progress6');
var counterShow = document.querySelectorAll('.progress-percent');

function loop() {
    Array.prototype.forEach.call(elementsprogress1, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('cost_one');
        } else {
            element.classList.remove('cost_one');
        }
    });
    Array.prototype.forEach.call(elementsprogress2, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('cost_two');
        } else {
            element.classList.remove('cost_two');
        }
    });
    Array.prototype.forEach.call(elementsprogress3, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('cost_three');
        } else {
            element.classList.remove('cost_three');
        }
    });
    Array.prototype.forEach.call(elementsprogress4, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('cost_four');
        } else {
            element.classList.remove('cost_four');
        }
    });
    Array.prototype.forEach.call(elementsprogress5, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('cost_five');
        } else {
            element.classList.remove('cost_five');
        }
    });
    Array.prototype.forEach.call(elementsprogress6, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('cost_six');
        } else {
            element.classList.remove('cost_six');
        }
    });
    Array.prototype.forEach.call(elementsToShow, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('progress1');
        } else {
            element.classList.remove('progress1');
        }
    });

    Array.prototype.forEach.call(elementsToShow2, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('progress2');
        } else {
            element.classList.remove('progress2');
        }
    });
    Array.prototype.forEach.call(elementsToShow3, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('progress3');
        } else {
            element.classList.remove('progress3');
        }
    });
    Array.prototype.forEach.call(elementsToShow4, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('progress4');
        } else {
            element.classList.remove('progress4');
        }
    });
    Array.prototype.forEach.call(counterShow, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('counter');
        } else {
            element.classList.remove('counter');
        }
    });
    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}