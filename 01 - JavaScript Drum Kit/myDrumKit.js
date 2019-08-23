// console.log('sanity-check');

// window.addEventListener('keydown', function(e) {
window.addEventListener('keydown', ((e) => {
  //   console.log(e);
  //   console.log(e.keyCode);  // this leads us and should lead our thinking towards...
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // allow us to get the event's keycode
    // console.log(audio);
  if(!audio) return;  // if there is no pre-defined audio for that keyCode, return and do nothing
  // To play the audio element selected, simply play()
  audio.play();
}));




