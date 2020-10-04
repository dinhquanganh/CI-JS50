import Action from "./action.js";
let dataMain = [
  {
    id: 1,
    max: 5,
    dataBook: [
      {
        id: "ACBB1",
        bookTitle: "Fire",
        author: "Pastetu",
        genre: "Action",
        dateOfCreation: "28/09/2020",
      },
      {
        id: "ACBB2",
        bookTitle: "Lover",
        author: "John",
        genre: "Love",
        dateOfCreation: "29/09/2020",
      },
      {
        id: "ACBB3",
        bookTitle: "Doraemon",
        author: "Fujiko F. Fujio",
        genre: "cartoon",
        dateOfCreation: "1969",
      },
    ],
  },
  {
    id: 2,
    max: 10,
    dataBook: [
      {
        id: "BB1",
        bookTitle: "None",
        author: "William",
        genre: "Sad Story",
        dateOfCreation: "09/2010",
      },
      {
        id: "BB2",
        bookTitle: "Wild",
        author: "Kiia Syn",
        genre: "Love",
        dateOfCreation: "2010",
      },
      {
        id: "BB3",
        bookTitle: "Conan",
        author: "Aoyama Gōshō",
        genre: "Thần bí",
        dateOfCreation: "1996",
      },
    ],
  },
];
let action = new Action(dataMain);

while (true) {
  let start = Number(
    prompt(
      `Press 1: Bookcase\nPress 2: Add book to the bookcase\nPress 3: Find book\nPress 4: Listed book in bookcase\nPress 5 : Exit`
    )
  );
  if (start == 1) {
    while (true) {
      let step = Number(
        prompt(
          `Press 1: Add bookcase\nPress 2: Remover bookcase\nPress 3: Edit bookcase\nPress 4: Quit`
        )
      );
      if (step == 1) {
        action.add();
        action.show();
      } else if (step == 2) {
        action.show();
        action.remover();
        action.show();
      } else if (step == 3) {
        action.show();
        action.edit();
        action.show();
      } else if (step == 4) {
        break;
      } else {
        console.log("Invalid");
      }
    }
  } else if (start == 2) {
    action.show();
    action.addNewBook();
    action.show();
  } else if (start == 3) {
    action.show();
    action.find();
  } else if (start == 4) {
    action.show();
    action.list();
  } else if (start == 5) {
    break;
  }
}

// let checkKey = Number(prompt())
