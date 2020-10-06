fetch("https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20")
  .then((e) => e.json())
  .then((json) => {
    json.forEach((e) => {
      console.log(
        `TITLE: ${e.title}\n\nID: ${e.id}\n\nCONTENT: ${e.content}\n\nDATETIME: ${e.datetime}`
      );
    });
  });