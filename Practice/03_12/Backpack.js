/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}




class Shirts{
  constructor(
    // Defines parameters:
    name,
    longSleeve,
    shortSleeve,
    color,
    pocketNum,
    old,
    newShirt,
  ) {
    // Define properties:
    this.name = name;
    this.longSleeve = longSleeve;
    this.shortSleeve = shortSleeve;
    this.color = color;
    this.pocketNum = pocketNum;
    this.old = old;
    this.newShirt = newShirt;
  }
  // Add methods like normal functions:
  toggleColor(color) {
    this.color = color;
  }
}

export default Shirts;

