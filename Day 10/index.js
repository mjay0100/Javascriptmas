const player = document.getElementById("player");

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
 const url =  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  console.log(url);
}
