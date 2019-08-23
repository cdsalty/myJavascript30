// console.log('sanity-check');

// window.addEventListener('keydown', function(e) {
window.addEventListener('keydown', ((e) => {
  //   console.log(e);
  //   console.log(e.keyCode);  // this leads us and should lead our thinking towards...
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
}));
