videojs.registerPlugin('audio', function(options) {
  
	var myPlayer = this;

	myPlayer.on("loadstart", function() {
	var playlistItems = document.getElementsByClassName('vjs-playlist-item');
      
	myPlayer.getChild('bigPlayButton').controlText('Play Audio');
	
	});
	
    myPlayer.textTrackSettings.setValues({
      //backgroundColor: "#FF0",
      //color: "#00F",
      //fontFamily: "monospaceSansSerif",
      fontPercent: 5.0,
      //windowColor: "#0FF",
      windowOpacity: "0.5"
    }) ;
});
