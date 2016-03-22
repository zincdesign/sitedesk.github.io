(function() {
  var loadVideoPlayer = function() {
    [].forEach.call(
      document.querySelectorAll('.video-container'),
      function($video) {
        $video.addEventListener('click', function(e) {
          e.stopPropagation();
          playVideo($video);
          return false;
        });
      }
    );
  };

  var playVideo = function($element) {
    closeVideoPlayer();

    var $player = document.createElement('div');
    $player.className = 'video-player-overlay';

    var $box = document.createElement('div');
    $box.className = 'video-box';

    var iframeSrc = $element.children[0].src;
    iframeSrc = iframeSrc.replace('autoplay=0', 'autoplay=1');

    var $iframe = document.createElement('iframe');
    $iframe.src = iframeSrc;
    $iframe.allowFullscreen = '1';
    $iframe.frameBorder = 'none';

    $player.appendChild($box);
    $box.appendChild($iframe);

    document.getElementsByTagName('body')[0].appendChild($player);
  };

  var closeVideoPlayer = function() {
    var $elements = document.getElementsByClassName('video-player-overlay');

    if ($elements[0]) {
      $elements[0].parentNode.removeChild($elements[0]);
    }
  };

  document.addEventListener('DOMContentLoaded', loadVideoPlayer);
  document.body.addEventListener('click', closeVideoPlayer);
})();
