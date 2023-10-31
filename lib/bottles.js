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

  verse(n) {
    return n === 0 || n === 1 ? this.verseEnd(n) : this.verseN(n);
  }

  verseN(n) {
    let pluralBottlesEnd = n === 2 ? "bottle" : "bottles";
    return (
      `${n} bottles of beer on the wall, ` +
      `${n} bottles of beer.\n` +
      "Take one down and pass it around, " +
      `${n - 1} ${pluralBottlesEnd} of beer on the wall.\n`
    );
  }

  verseEnd(n) {
    let pluralBottlesEnd = n === 1 ? "1 bottle" : "No more bottles";
    let line =
      `${pluralBottlesEnd} of beer on the wall, ` +
      `${pluralBottlesEnd.toLowerCase()} of beer.\n`;
    let finalLine =
      n === 1
        ? "Take it down and pass it around, " +
          "no more bottles of beer on the wall.\n"
        : `Go to the store and buy some more, ` +
          `${this.bottleNumber} bottles of beer on the wall.\n`;

    return line + finalLine;
  }
}

export { Bottles };
