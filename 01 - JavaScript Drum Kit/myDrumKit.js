// console.log('sanity-check');

// window.addEventListener('keydown', function(e) {
window.addEventListener('keydown', ((e) => {
  //   console.log(e);
  //   console.log(e.keyCode);  // this leads us and should lead our thinking towards...
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // gets the "audio" keycode
    // console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return;  // if there is no pre-defined audio for that keyCode, return and do nothing
  audio.currentTime = 0; // rewind to the start of the audio anytime pressed
  // To play the audio element selected, simply play()
  audio.play(); // if you play an audio element while it's playing, it won't play. we use 'curent time'
  // console.log(key);
  key.classList.add('playing');
}));

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  console.log(e.propertyName);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // next, create what remove Transistion needs to do... 
  // transitionend, which deals with the css transition taking place, when transitionend is happing, then removeTransition function is called