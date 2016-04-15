window.addEventListener('load', function() {
  var sliders = [].slice.call(document.querySelectorAll('.slider'), 0);

  sliders.forEach(function(slider) {
    var INTERVAL = 5000;
    var slides = [].slice.call(slider.querySelectorAll('.slide'), 0);
    var goToButtons = [].slice.call(slider.querySelectorAll('.slider-jump-button'), 0);
    var currentIndex = 0;
    var autoInterval = null;
    
    var hideAllBut = function(index) {
       slides.forEach(function(el,i) {
          el.className = el.className.replace(/ transparent/g, '');
          if(i !== index)
            el.className += ' transparent';
        });
    }
    
    var highlightJumpButton = function(index) {
        goToButtons.forEach(function(btn) {
          btn.className = btn.className.replace(/ current/g, '');
        });
        goToButtons[index].className += ' current';
    }

    var goToIndex = function(index) {
      highlightJumpButton(index);
      hideAllBut(index);
      currentIndex = index;
    };
    
    var startAuto = function() {
      autoInterval = setInterval(function() {
        var index = (currentIndex + 1) % slides.length;
        goToIndex(index);
      }, INTERVAL);
    };

    var stopAuto = function() {
      clearInterval(autoInterval);
      autoInterval = null;
    };

    //slider.addEventListener('mouseover', stopAuto);
    //slider.addEventListener('mouseout', startAuto);

    goToButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        var index = this.attributes['data-index'].value;
        goToIndex(parseInt(index, 10));
        stopAuto();
      });
    });

    startAuto();
  });
});
