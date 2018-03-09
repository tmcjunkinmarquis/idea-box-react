

class Idea {
  constructor(name, body) {
    this.name = name;
    this.body = body;
    this.uniqueID = Date.now();
    this.quality = 'swill';
    this.qualityIndex = 0;
  }
}

export default Idea;