window.addEventListener('load', function() {
  var sliders = [].slice.call(document.querySelectorAll('.slider'), 0);

  sliders.forEach(function(slider) {
    var INTERVAL = 5000;
    var ANIMATION = 1000;

    var slides = [].slice.call(slider.querySelectorAll('.slide'), 0);
    var goToButtons = [].slice.call(slider.querySelectorAll('.slider-jump-button'), 0);

    var currentIndex = 0;
    var animating = false;
    var autoInterval = null;

    var showSlide = function(slide) {
      slide.className = slide.className.replace(/hidden/g, '');
    };

    var hideSlide = function(slide) {
      slide.className += ' hidden';
    };

    var animateSlideLegacy = function(slide, start, stop, done) {
      showSlide(slide);

      var i = start;

      var animate = function() {
        if ((start > stop && i > stop) || (start < stop && i < stop)) {
          if (start > stop) {
            i += -4;
          } else {
            i += 4;
          }

          slide.style.left = i + '%';

          requestAnimationFrame(animate);
        } else {
          slide.style.transform = '';

          done();
        }
      };

      requestAnimationFrame(animate);
    };

    var animateSlideTransform = function(slide, start, stop, done) {
      slide.style.transform = 'translateX(' + start + '%)';

      setTimeout(function() {
        slide.style.transitionProperty = 'transform';
        slide.style.transitionDuration = ANIMATION + 'ms';
        slide.style.transform = 'translateX(' + stop + '%)';

        setTimeout(function() {
          slide.style.transitionProperty = '';
          done();
        }, ANIMATION + 1);
      }, 100);    // Delay seems necessary to kick off the transition
    };

    var animateSlide = animateSlideLegacy;

    if (supportsTransitions()) {
      animateSlide = animateSlideTransform;
    }

    var transition = function(from, to, rev, done) {
      if (animating) return;

      revMul = 1;

      if (rev) revMul = -1;

      animating = true;
      animateSlide(from, 0, -100 * revMul, function() {
        hideSlide(from);
      });

      showSlide(to)
      animateSlide(to, 100 * revMul, 0, function() {
        animating = false;
        done();
      });
    };
    
    var highlightJumpButton = function(index) {
        goToButtons.forEach(function(btn) {
          btn.className = btn.className.replace(/ current/g, '');
        });
        goToButtons[index].className += ' current';
    }

    var goToIndex = function(index) {
      if (index === currentIndex) return;

      var rev = currentIndex > index;
      highlightJumpButton(index);
      
      transition(slides[currentIndex], slides[index], rev, function() {
        currentIndex = index;
      });
    };
    
 
    var goToNext = function() {
      var index = (currentIndex + 1) % slides.length;
      highlightJumpButton(index);
      
      transition(slides[currentIndex], slides[index], false /* always animate forward*/, function() {
        currentIndex = index;
      });
    };
    
    var startAuto = function() {
      autoInterval = setInterval(function() {
        goToNext();
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

function supportsTransitions() {
  var b = document.body || document.documentElement,
    s = b.style,
    p = 'transition';

  if (typeof s[p] == 'string') { return true; }

  // Tests for vendor specific prop
  var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
  p = p.charAt(0).toUpperCase() + p.substr(1);

  for (var i = 0; i < v.length; i++) {
    if (typeof s[v[i] + p] == 'string') { return true; }
  }

  return false;
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
      || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
} ());
