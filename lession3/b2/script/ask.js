class Ask {
  id;
  content;
  answer = {};

  constructor(id, content, answer) {
    this.id = id;
    this.content = content;
    this.answer = answer;
  }
}

export default Ask;

