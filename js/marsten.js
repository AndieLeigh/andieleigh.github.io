window.addEventListener('load', function() {
	setupToggles();
});
function setupToggles() {
  var toggleGroup = document.querySelectorAll('button.btn');
  toggleGroup.forEach(function(item) {
    item.section = item.parentNode;
    item.toggle = function() {
      if (this.section.classList.contains('toggled')) this.close();
      else this.open();
    }
    item.open = function() { 
      toggleGroup.forEach(function(item) { item.close() });
      this.section.classList.add('toggled'); 
    }
    item.close = function() { this.section.classList.remove('toggled'); }
    item.addEventListener('click', function() { this.toggle(); })
  });
}

// color changing hotwheels
var tStart = 10
  , tEnd = 1400   // End at 500px
  , cStart = [64, 25, 53] 
  , cEnd = [27, 11, 23]  
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});


//smooth scroll
// Add smooth scrolling on all links inside the navbar
$(".navbar-nav a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "1") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 400, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});