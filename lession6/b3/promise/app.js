const me = new Promise((resolve, reject) => {
  if (true) {
    resolve(console.log("Pastetu"));
  } else {
    reject("Error");
  }
});

me.then(
  setTimeout(() => {
    alert("Not Found 😥");
  }, 3000)
).catch((error) => {
  console.log(error);
});
