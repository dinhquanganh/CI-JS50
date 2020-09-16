document.getElementById("set").addEventListener("click", settime);

function settime() {
  let $timeRed = Number(document.getElementById("value-red").value);
  let $timeYellow = Number(document.getElementById("value-yellow").value);
  let $timeGreen = Number(document.getElementById("value-green").value);
  let checkLight = 1;
  setInterval(timeMain, 1000);
}

function timeMain() {
  timeHandler($timeRed--, $timeYellow--, $timeGreen--);
}

function timeHandler(r, y, g) {
  let $green = document.getElementById("green");
  let $yellow = document.getElementById("yellow");
  let $red = document.getElementById("red");
  
  document.getElementById("red").style.background = "red";
  console.log(sec);

  if (checkLight == 1) {
    let sec = r;
    document.getElementById("time").innerHTML = sec;
    $green.style.background = "none";
    $red.style.background = "red";
    if (sec == 0) {
      checkLight = 2;
      sec = y + 1;
    }
  } else if (checkLight == 2) {
    let sec = y;
    document.getElementById("time").innerHTML = sec;
    $red.style.background = "none";
    $yellow.style.background = "yellow";
    if (sec == 0) {
      sec = g + 1;
      checkLight = 3;
    }
  } else if (checkLight == 3) {
    let sec = g;
    document.getElementById("time").innerHTML = sec;
    $yellow.style.background = "none";
    $green.style.background = "green";
    if (sec == 0) {
      sec = r + 1;
      checkLight = 1;
    }
  }
}
