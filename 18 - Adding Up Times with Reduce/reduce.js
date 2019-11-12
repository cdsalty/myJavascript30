// console.log("sanity-check");

// Select Nodes
const timeNodes = Array.from(document.querySelectorAll("[data-time"));
// console.log(timeNodes);

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, videoSeconds) => {
    return total + videoSeconds; // returns a total 17938
  });

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); // there are 3600 seconds in one hour
// hours equals to 4 without showing the remainding value
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(`${hours}:${mins}:${secondsLeft}`);
console.log(hours, mins, secondsLeft);
