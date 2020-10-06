const me = new Promise((resolve) => {
  resolve(
    setTimeout(() => {
      console.log("Pastetu");
      console.log("Not Found 😥");
    }, 3000)
  );
});
