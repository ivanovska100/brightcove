videojs.registerPlugin('playlistItemMargin', function(options) {
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
							   var numberOfvideoThumbnails = videoThumbnails.length;
                               var j = 0;
                               while (j<numberOfvideoThumbnails)
                               {                                 
                                    videoThumbnails[j].addEventListener("mouseover", function(e) {
										var classString = videoThumbnails[j].className;
										var newClass = classString.concat(' ' + "vjs-icon-play");
										videoThumbnails[j].className = newClass;
									});
									
									videoThumbnails[j].addEventListener("mouseout", function(e) {
										var classString = videoThumbnails[j].className;
										var newClass = classString.replace(' ' + "vjs-icon-play", '');
										videoThumbnails[j].className = newClass;
									});
                                    j++;
                               }
});

});

function addClass(className) {
  var classString = this.className;
  var newClass = classString.concat(' ' + className);
  this.className = newClass;
}

function removeClass(className) {
  var classString = this.className;
  var newClass = classString.replace(' ' + className, '');
  this.className = newClass;
}