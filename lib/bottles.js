/**
 * Represents a song about bottles of beer.
 * @class
 */
class Bottles {
  /**
   * Creates an instance of Bottles.
   * @param {number} [bottleNumber=99] - The starting number of bottles.
   */
  constructor(bottleNumber = 99) {
    this.bottleNumber = bottleNumber;
  }

  /**
   * Returns the full song from the current number of bottles down to zero.
   * @returns {string} The full song.
   */
  song() {
    return this.verses(this.bottleNumber, 0);
  }

  /**
   * Returns the verses of the song.
   * @param {number} [startNum=this.bottleNumber] - The starting number of bottles.
   * @param {number} [endNum=0] - The ending number of bottles.
   * @returns {string} The verses of the song.
   */
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

  /**
   * Returns a verse of the song.
   * @param {number} verseNumber - The number of bottles in the verse.
   * @returns {string} A verse of the song.
   */
  verse(verseNumber) {
    return verseNumber === 0 || verseNumber === 1
      ? this.verseEnd(verseNumber)
      : this.verseN(verseNumber);
  }

  /**
   * Returns a verse of the song for when there are more than one bottles.
   * @param {number} verseNumber - The number of bottles in the verse.
   * @returns {string} A verse of the song.
   */
  verseN(verseNumber) {
    let pluralBottlesEnd = verseNumber === 2 ? "bottle" : "bottles";
    return (
      `${verseNumber} bottles of beer on the wall, ` +
      `${verseNumber} bottles of beer.\n` +
      "Take one down and pass it around, " +
      `${verseNumber - 1} ${pluralBottlesEnd} of beer on the wall.\n`
    );
  }

  /**
   * Returns a verse of the song for when there is only one bottle or no bottles.
   * @param {number} verseNumber - The number of bottles in the verse.
   * @returns {string} A verse of the song.
   */
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
