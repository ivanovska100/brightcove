videojs.registerPlugin('playlistItemMargin', function(options) {
  var myPlayer = this;

	myPlayer.on("loadstart", function() {
	var playlistItems = document.getElementsByClassName('vjs-playlist-item');
                                var numberOfItems = playlistItems.length;
                                var i = 0;
                                while (i<numberOfItems-1)
                                {
                                    var titleHeight = playlistItems[i]
                                        .getElementsByClassName('vjs-playlist-title-container')[0]
                                        .scrollHeight;
                                    playlistItems[i].style.marginBottom = titleHeight + 'px';
                                    i++;
                                }
								
								$(".vjs-playlist-thumbnail").hover(function(){
								$(this).toggleClass("vjs-icon-play");
								});
								
								$(".vjs-playlist-thumbnail").click(function(){
								$(this).removeClass("vjs-icon-play");
								});
								
								$(".vjs-playlist-now-playing-text").click(function(){
								$(this.parentElement).removeClass("vjs-icon-play");
								});
								
	/* var videoThumbnails = document.getElementsByClassName('vjs-playlist-thumbnail');
							   var numberOfvideoThumbnails = videoThumbnails.length;
                               var j = 0;
                               while (j<numberOfvideoThumbnails-1)
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
                               } */
});

});