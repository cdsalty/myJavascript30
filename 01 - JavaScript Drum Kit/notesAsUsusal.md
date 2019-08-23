1. Need to add an event listener to the window. Window, be listening for...
    - Window, be listening for...(what are we listening for????)
        - KEYDOWN
    - next our function which gives us the event by default.


My change... 
    - window.addEventListener('keydown', function(e) {
      };
            vs.
    - window.addEventListener('keydown', ((e) => {
       console.log(e);
      }));



___________________________________________________________________________________________________________
      window.addEventListener('keydown', ((e) => {
  //   console.log(e);
  //   console.log(e.keyCode);  // this leads us and should lead our thinking towards...
  const audio = document.querySelector(audio[data- key=${e.keyCode}]`);
}));
___________________________________________________________________________________________________________