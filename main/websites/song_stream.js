var playlist = document.getElementById("playlist");
var audioPlayer = document.getElementById("audioPlayer");
var audioSource = document.getElementById("audioSource");

playlist.addEventListener("click", function(e) {
  var clickedItem = e.target;
  audioSource.src = clickedItem.href;
  audioPlayer.load();
  audioPlayer.play();
});
