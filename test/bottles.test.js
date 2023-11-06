/* eslint-disable quotes */
import { Bottles } from "../lib/bottles";

describe("test private sub methods", () => {
  describe("verseEnd method", () => {
    test("for the next to last verse", () => {
      const expected =
        `1 bottle of beer on the wall, 1 bottle of beer.\n` +
        `Take it down and pass it around, no more bottles of beer on the wall.\n`;

      let verse = new Bottles(5);
      let result = verse.verseEnd(1);

      expect(result).toBe(expected);
    });

    test("for the final verse", () => {
      const expected =
        `No more bottles of beer on the wall, no more bottles of beer.\n` +
        `Go to the store and buy some more, 5 bottles of beer on the wall.\n`;

      let verse = new Bottles(5);
      let result = verse.verseEnd(0);

      expect(result).toBe(expected);
    });
  });
  describe("Bottles verse method", () => {
    test("the first verse", () => {
      const expected =
        "99 bottles of beer on the wall, " +
        "99 bottles of beer.\n" +
        "Take one down and pass it around, " +
        "98 bottles of beer on the wall.\n";
      // const bt = ;
      expect(new Bottles(99).verse(99)).toBe(expected);
      // expect(expected).toBe(expected);
    });

    test("another verse", () => {
      const expected =
        "3 bottles of beer on the wall, " +
        "3 bottles of beer.\n" +
        "Take one down and pass it around, " +
        "2 bottles of beer on the wall.\n";
      expect(new Bottles().verse(3)).toBe(expected);
    });

    test("verse 2", () => {
      const expected =
        "2 bottles of beer on the wall, " +
        "2 bottles of beer.\n" +
        "Take one down and pass it around, " +
        "1 bottle of beer on the wall.\n";
      expect(new Bottles().verse(2)).toBe(expected);
    });

    test("verse 1", () => {
      const expected =
        "1 bottle of beer on the wall, " +
        "1 bottle of beer.\n" +
        "Take it down and pass it around, " +
        "no more bottles of beer on the wall.\n";
      expect(new Bottles().verse(1)).toBe(expected);
    });

    test("verse 0", () => {
      const expected =
        "No more bottles of beer on the wall, " +
        "no more bottles of beer.\n" +
        "Go to the store and buy some more, " +
        "99 bottles of beer on the wall.\n";
      expect(new Bottles().verse(0)).toBe(expected);
    });

    test("a couple verses", () => {
      const expected =
        "99 bottles of beer on the wall, 99 bottles of beer.\n" +
        "Take one down and pass it around, 98 bottles of beer on the wall.\n" +
        "\n" +
        "98 bottles of beer on the wall, 98 bottles of beer.\n" +
        "Take one down and pass it around, 97 bottles of beer on the wall.\n" +
        "\n";

      let result = new Bottles().verses(99, 98);

      expect(result).toBe(expected);
    });

    test("a few verses at the end", () => {
      const expected =
        `2 bottles of beer on the wall, 2 bottles of beer.\n` +
        `Take one down and pass it around, 1 bottle of beer on the wall.\n` +
        `\n` +
        `1 bottle of beer on the wall, 1 bottle of beer.\n` +
        `Take it down and pass it around, no more bottles of beer on the wall.\n` +
        `\n` +
        `No more bottles of beer on the wall, no more bottles of beer.\n` +
        `Go to the store and buy some more, 2 bottles of beer on the wall.\n`;

      let result = new Bottles(2).verses();

      expect(result).toBe(expected);
    });
  });
});

describe("Songs method", () => {
  test("song returns the full song", () => {
    const bottles = new Bottles();
    const song = bottles.song();
    expect(song).toMatch(/99 bottles of beer on the wall/);
    expect(song).toMatch(/no more bottles of beer on the wall/);
  });

  test("song starts with the correct number of bottles", () => {
    const bottles = new Bottles(5);
    const song = bottles.song();
    expect(song).toMatch(/^5 bottles of beer on the wall/);
  });

  test("song ends with no more bottles", () => {
    const bottles = new Bottles();
    const song = bottles.song();
    expect(song).toMatch(
      /Go to the store and buy some more, 99 bottles of beer on the wall.\n$/
    );
  });
});
