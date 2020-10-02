import Person from "./person.js";

export default class Action {
  data = [];
  constructor(data) {
    this.data = data;
  }
  show() {
    console.log(this.data);
  }
  add() {
    let amount = Number(prompt("Enter the number of people: "));
    let name;
    let phoneNumber;
    let location = [];
    for (let i = 0; i < amount; i++) {
      name = prompt(`Name of person ${i + 1}`);
      phoneNumber = prompt(`Number phone of person ${i + 1}`);
      let x = Number(prompt("Enter number of places gone: "));
      for (let j = 0; j < x; j++) {
        location[j] = {};
        location[j].localName = prompt(`Enter location name ${j + 1}`);
        location[j].coordinates = prompt(
          `Enter coordinates (x -> y) separated by commas(,): `
        )
          .split(",")
          .map(Number);
      }

      this.data.push(new Person(name, phoneNumber, location));
    }
  }

  warning() {
    let user = this.data;
    // FIND f1
    let f0 = prompt(
      "Enter the phone number of the person infected with the virus (F0):"
    );
    let f1 = [];
    let i = 0;
    let xf0;
    let yf0;
    while (i < user.length) {
      if (user[i].phoneNumber == f0) {
        for (let j = 0; j < user[i].locations.length; j++) {
          xf0 = user[i].locations[j].coordinates[0];
          yf0 = user[i].locations[j].coordinates[1];
          let k = 0;
          let key = false;
          while (k < user.length) {
            if (user[k].phoneNumber != f0) {
              for (let n = 0; n < user[k].locations.length; n++) {
                let xf1 = user[k].locations[n].coordinates[0];
                let yf1 = user[k].locations[n].coordinates[1];
                let range = Math.sqrt(
                  Math.pow(xf1 - xf0, 2) + Math.pow(yf1 - yf0, 2)
                );
                if (range < 2) {
                  f1.push(user[k]);
                  key = true;
                  break;
                }
              }
            }
            if (key) break;
            else k++;
          }
        }
      }

      i++;
    }
    console.log("The suspected cases are f1: ");
    console.log(f1);

    //   FIND f2
    let f2 = [];
    let xf2;
    let yf2;
    i = 0;
    while (i < f1.length) {
      for (let j = 0; j < f1[i].locations.length; j++) {
        let xf1 = f1[i].locations[j].coordinates[0];
        let yf1 = f1[i].locations[j].coordinates[1];

        let key = false;
        let k = 0;
        while (k < user.length) {
          if (
            user[k].phoneNumber != f1[i].phoneNumber &&
            user[k].phoneNumber != f0
          ) {
            for (let n = 0; n < user[k].locations.length; n++) {
              xf2 = user[k].locations[n].coordinates[0];
              yf2 = user[k].locations[n].coordinates[1];
              let range = Math.sqrt(
                Math.pow(xf2 - xf1, 2) + Math.pow(yf2 - yf1, 2)
              );
              if (range < 2) {
                f2.push(user[k]);
                key = true;
                break;
              }
            }
          }
          if (key) break;
          else k++;
        }
      }
      i++;
    }
    console.log('The suspected cases are f2: ')
    console.log(f2);
  }
}
