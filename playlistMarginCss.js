videojs.registerPlugin('playlistItemMargin', function(options) {
// Create variables and new div, anchor and image for download icon
  var myPlayer = this;

	myPlayer.on("loadstart", function() {
	var playlistItems = document.getElementsByClassName('vjs-playlist-item');
                                var numberOfItems = playlistItems.length;
                                var i = 0;
                                while (i<numberOfItems)
                                {
                                    var titleHeight = playlistItems[i]
                                        .getElementsByClassName('vjs-playlist-title-container')[0]
                                        .scrollHeight;
                                    playlistItems[i].style.marginBottom = titleHeight + 'px';
                                    i++;
                                }
	var videoThumbnails = document.getElementsByClassName('vjs-playlist-thumbnail');
							   var numberOfvideoThumbnails = playlistItems.length;
                               var j = 0;
                               while (j<numberOfvideoThumbnails)
                               {                                 
                                    videoThumbnails[j].addEventListener("mouseover", function(e) {
									addClass(videoThumbnails[j],"vjs-icon-play");
									});
									videoThumbnails[j].addEventListener("mouseout", function(e) {
									removeClass(videoThumbnails[j],"vjs-icon-play");
									});
                                    j++;
                               }
});

});

function addClass(el, className) {
  var classString = el.className;
  var newClass = classString.concat(' ' + className);
  el.className = newClass;
}

function removeClass(el, className) {
  var classString = el.className;
  var newClass = classString.replace(' ' + className, '');
  el.className = newClass;
}