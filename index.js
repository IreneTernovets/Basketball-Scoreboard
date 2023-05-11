const homeScoreWindow = document.getElementById("home-score");
let homeScore = 0;

const guestScoreWindow = document.getElementById("guest-score");
let guestScore = 0;

function addNumberHome(addArg) {
  homeScore += addArg;
  homeScoreWindow.innerText = homeScore;
}

function addNumberGuest(addArg) {
  guestScore += addArg;
  guestScoreWindow.innerText = guestScore;
}
