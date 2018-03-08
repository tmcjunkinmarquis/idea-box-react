

class Idea {
  constructor(name, body) {
    this.name = name;
    this.body = body;
    this.uniqueID = Date.now();
    this.quality = 'swill'
  }
}

export default Idea;