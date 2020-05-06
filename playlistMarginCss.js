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
									videoThumbnails[j].classList.add("vjs-icon-play");
									});
									videoThumbnails[j].addEventListener("mouseout", function(e) {
									videoThumbnails[j].classList.remove("vjs-icon-play");
									});
                                    j++;
                               }
});

});