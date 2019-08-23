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

/*
Originally, to get just the letter 'a', I did this function but in order to get the user's object's keyCode value,
const audio = document.querySelector("audio[data-key=65]");
    console.log(audio);

I have to do this to get the user's value, specifically using templete literals... 
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
*/

___________________________________________________________________________________________________________
