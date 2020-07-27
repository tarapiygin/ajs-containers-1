export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) throw Error('Character has already in members list');
    else this.members.add(character);
  }

  addAll(...characters) {
    for (const obj of characters) {
      this.members.add(obj);
    }
  }

  toArray() {
    return [...this.members];
  }
}
