let $set = document.getElementById("set");
let $reset = document.getElementById("reset");
$set.addEventListener("click", setTime);
function setTime() {
  $set.style.display = "none";
  $reset.style.display = "block";
  let $timeRed = Number(document.getElementById("value-red").value);
  let $timeYellow = Number(document.getElementById("value-yellow").value);
  let $timeGreen = Number(document.getElementById("value-green").value);
  document.getElementById("time").innerHTML = $timeGreen;
  let sec = $timeGreen;
  let checkLight = 1;
  document.getElementById("green").style.background = "green";

  function timeHandler() {
    let $green = document.getElementById("green");
    let $yellow = document.getElementById("yellow");
    let $red = document.getElementById("red");
    sec--;
    document.getElementById("time").innerHTML = sec;
    if (checkLight == 1) {
      $red.style.background = "none";
      $green.style.background = "green";
      if (sec == 0) {
        checkLight = 2;
        sec = $timeYellow + 1;
      }
    } else if (checkLight == 2) {
      $green.style.background = "none";
      $yellow.style.background = "yellow";
      if (sec == 0) {
        sec = $timeRed + 1;
        checkLight = 3;
      }
    } else if (checkLight == 3) {
      $yellow.style.background = "none";
      $red.style.background = "red";
      if (sec == 0) {
        sec = $timeGreen + 1;
        checkLight = 1;
      }
    }
  }
  $reset.addEventListener("click", () => {
    document.getElementById("time").innerHTML = 0;
    $set.style.display = "block";
    $reset.style.display = "none";
    clearInterval(timeInterval);
  });
  timeInterval = setInterval(timeHandler, 1000);
}
