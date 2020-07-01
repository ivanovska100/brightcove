videojs.registerPlugin('audio', function(options) {
  
	var myPlayer = this;

	myPlayer.on("loadstart", function() {
	var playlistItems = document.getElementsByClassName('vjs-playlist-item');
      
	myPlayer.getChild('bigPlayButton').controlText('Play Audio');
	
	});
	
    myPlayer.textTrackSettings.setValues({
      fontPercent: 4.0,
      windowOpacity: "0.5"
    }) ;
});
