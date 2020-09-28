import Book from "./book.js";
import Bookcase from "./bookcase.js";

export default class Action {
  data = [];

  constructor(data) {
    this.data = data;
  }

  show() {
    let dataAction = this.data;
    console.clear();
    for (let i = 0; i < dataAction.length; i++) {
      console.log(i + 1, dataAction[i]);
    }
  }

  add() {
    let dataAction = this.data;
    let max = Number(prompt("Enter the largest number of books: "));
    let dataBookAdd = [];
    while (true) {
      let amount = Number(prompt("Enter number of books: "));
      if (amount > max) {
        alert("Please enter the number less than the maximum");
      } else {
        for (let i = 0; i < amount; i++) {
          let addBook = new Book(
            prompt(`Enter book title ${i + 1} :`),
            prompt("Enter author name: "),
            prompt("Enter genre")
          );
          dataBookAdd.push(addBook);
        }
        let addNow = new Bookcase(max, dataBookAdd);
        dataAction.push(addNow);
        alert("Success !");
        break;
      }
    }
  }

  remover() {
    let dataAction = this.data;
    let numCheck =
      Number(
        prompt(
          `Enter the bookcase number you want remover (From 1 to ${dataAction.length}): `
        )
      ) - 1;
    dataAction.splice(numCheck, 1);
    alert("Success !");
  }

  edit() {
    let dataAction = this.data;
    let numCheck =
      Number(
        prompt(
          `Enter the bookcase number you want edit (From 1 to ${dataAction.length}): `
        )
      ) - 1;

    while (true) {
      console.clear();
      console.log(dataAction[numCheck]);
      let inpNum = Number(
        prompt(
          `Press 1: Edit largest number of books.\nPress 2: Edit book.\nPress 3: Quit.`
        )
      );
      if (inpNum == 1) {
        dataAction[numCheck].max = Number(
          prompt(`Enter the new largest number of books:`)
        );
      } else if (inpNum == 2) {
        console.clear();
        for (let i = 1; i < dataAction[numCheck].dataBook.length; i++) {
          console.log(dataAction[numCheck].dataBook[i]);
        }
        while (true) {
          let ctrl = Number(
            prompt(`Enter the number of the book (Start from 1): `)
          );
          if (ctrl < 1 || ctrl > dataAction[numCheck].dataBook.length) {
            alert("Invalid !");
          } else {
            console.clear();
            console.log(dataAction[numCheck].dataBook[ctrl - 1]);
            break;
          }
        }

        while (true) {
          let inpNumBook = Number(
            prompt(
              `Press 1: Edit book title.\nPress 2: Edit author.\nPress 3: Edit genre\nPress 4: Quit`
            )
          );
          if (inpNumBook == 1) {
            dataAction[numCheck].dataBook[ctrl].bookTitle = prompt(
              `Enter new book title:`
            );
            alert("Success !");
          } else if (inpNumBook == 2) {
            dataAction[numCheck].dataBook[ctrl].author = prompt(
              `Enter new author:`
            );
            alert("Success !");
          } else if (inpNumBook == 3) {
            dataAction[numCheck].dataBook[ctrl].genre = prompt(
              `Enter new genre:`
            );
          } else if (inpNumBook == 4) {
            break;
          }
          console.clear();
          console.log(dataAction[numCheck].dataBook[ctrl]);
        }
      } else if (inpNum == 3) {
        break;
      } else {
        alert("Invalid !");
      }
    }
  }

  addNewBook() {
    let dataAction = this.data;
    let setArr;
    let check;
    while (true) {
      let keyNum = Number(prompt("Enter number Bookcase: "));
      if (keyNum > dataAction.length || keyNum < 1) {
        alert("Invalid !");
      } else {
        setArr = dataAction[keyNum - 1];
        if (setArr.length == Number(setArr.max)) {
          alert("Full bookcase!");
        } else {
          let addBook = new Book(
            prompt("Enter book title: "),
            prompt("Enter author name: "),
            prompt("Enter genre: ")
          );
          setArr.dataBook.push(addBook);
          alert("Success !");
        }
        check = prompt("Do you want to try again? (yes/no)").toLowerCase();
        if (check == "no") {
          break;
        }
      }
    }
  }

  find() {
    let dataAction = this.data;
    let setArr;
    let keyNum = Number(prompt("Enter number Bookcase: "));
    if (keyNum > dataAction.length || keyNum < 1) {
      alert("Invalid !");
    } else {
      setArr = dataAction[keyNum - 1];
      while (true) {
        let keyFind = Number(
          prompt(
            `Press 1: Search by name\nPress 2: Search by author\nPress 3: Search by genre\nPress 4: Quit`
          )
        );
        console.clear();
        if (keyFind == 1) {
          let find = prompt("Enter book title?").toLowerCase();
          let stop = true;
          for (let i = 0; i < setArr.dataBook.length; i++) {
            if (setArr.dataBook[i].bookTitle.toLowerCase() == find) {
              console.log(setArr.dataBook[i]);
              alert("Match Found 👥");
              stop = false;
            } else if (i == setArr.dataBook.length - 1 && stop) {
              alert("Not Found 😪");
            }
          }
        }
        if (keyFind == 2) {
          let find = prompt("Enter author name?").toLowerCase();
          let stop = true;
          for (let i = 0; i < setArr.dataBook.length; i++) {
            if (setArr.dataBook[i].author.toLowerCase() == find) {
              console.log(setArr.dataBook[i]);
              alert("Match Found 👥");
              stop = false;
            } else if (i == setArr.dataBook.length - 1 && stop) {
              alert("Not Found 😪");
            }
          }
        }
        if (keyFind == 3) {
          let find = prompt("Enter genre?").toLowerCase();
          let stop = true;
          for (let i = 0; i < setArr.dataBook.length; i++) {
            if (setArr.dataBook[i].genre.toLowerCase() == find) {
              console.log(setArr.dataBook[i]);
              alert("Match Found 👥");
              stop = false;
            } else if (i == setArr.dataBook.length - 1 && stop) {
              alert("Not Found 😪");
            }
          }
        } else if (keyFind == 4) {
          break;
        } else {
          alert("Invalid!");
        }
      }
    }
  }

  list() {
    let dataAction = this.data;
    let setArr;
    let keyNum = Number(prompt("Enter number Bookcase: "));
    if (keyNum > dataAction.length || keyNum < 1) {
      alert("Invalid !");
    } else {
      setArr = dataAction[keyNum - 1];
      console.clear();
      for (let i = 0; i < setArr.dataBook.length; i++) {
        console.log(setArr.dataBook[i]);
      }
    }
  }
}
