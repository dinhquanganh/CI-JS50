import Task from "./task.js";

export default class List {
  data = [];
  dateModified;
  id;
  constructor(data) {
    this.data = data;
    this.dateModified = new Date().toLocaleDateString();
    this.id = uuid.v4();
  }

  show() {

  }
  
}
