/* eslint-disable no-undef */
/* eslint-disable quotes */
import { downTo } from "./helpers";

// eslint-disable-next-line no-unused-vars
class Bottles {
  bottleNumber;

  constructor(bottleNumber = 99) {
    this.bottleNumber = bottleNumber;
  }

  verses(startNum = this.bottleNumber, endNum = 0) {
    this.bottleNumber = startNum;
    let txt = "";
    for (let i = startNum; i >= endNum; i--) {
      txt += this.verse(i);
      if (i != 0) {
        txt += "\n";
      }
    }
    return txt;
  }

  verse(verseNumber) {
    return verseNumber === 0 || verseNumber === 1
      ? this.verseEnd(verseNumber)
      : this.verseN(verseNumber);
  }

  verseN(verseNumber) {
    let pluralBottlesEnd = verseNumber === 2 ? "bottle" : "bottles";
    return (
      `${verseNumber} bottles of beer on the wall, ` +
      `${verseNumber} bottles of beer.\n` +
      "Take one down and pass it around, " +
      `${verseNumber - 1} ${pluralBottlesEnd} of beer on the wall.\n`
    );
  }

  verseEnd(verseNumber) {
    let pluralBottlesEnd = verseNumber === 1 ? "1 bottle" : "No more bottles";

    let line =
      `${pluralBottlesEnd} of beer on the wall, ` +
      `${pluralBottlesEnd.toLowerCase()} of beer.\n`;

    let finalLine =
      verseNumber === 1
        ? "Take it down and pass it around, " +
          "no more bottles of beer on the wall.\n"
        : `Go to the store and buy some more, ` +
          `${this.bottleNumber} bottles of beer on the wall.\n`;

    return line + finalLine;
  }
}

export { Bottles };
