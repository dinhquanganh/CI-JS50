export default class Person {
  name;
  phoneNumber;
  locations = [];

  constructor(name, phoneNumber, locations) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.locations = locations;
  }
}
