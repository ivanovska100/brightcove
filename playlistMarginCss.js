videojs.registerPlugin('brightcoveDownload', function(options) {
// Create variables and new div, anchor and image for download icon
  var myPlayer = this,
    videoName,
    totalRenditions,
    mp4Ara = [],
    highestQuality,
    spacer,
    newElement = document.createElement("div"),
    newImage = document.createElement("img");

	myPlayer.on("loadstart", function() {
	var playlistItems = document.getElementsByClassName('vjs-playlist-item');
                                var numberOfItems = playlistItems.length;
                                var i = 0;
                                while (i<numberOfItems)
                                {
                                    var titleHeight = playlistItems[i]
                                        .getElementsByClassName('vjs-playlist-title-container')[0]
                                        .clientHeight;
                                    playlistItems[i].style.marginBottom = titleHeight;
                                    i++;
                                }
});

});