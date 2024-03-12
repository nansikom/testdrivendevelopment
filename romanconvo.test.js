 /*Name : Nansikombi Maria*/
//Designing a roman numeral converter using TDD.
//first test: Ama start by converting just one space character to arabic to a roman numeral.
const romannumeralconverter = require('./romannumeralconverter')

test("Testing out an empty string to see what it does", function () {
    expect(" ").toBe(" ");
    });
// single character test.
// smallest case possible.
test("Testing out conversion of a single character like 1 to give me I", function () {
    expect(romannumeralconverter("1")) .toBe("I");
    });
//Normal cases to expect
test("Testing out conversion of a single character like 2 to give me II", function () {
    expect(romannumeralconverter("2")) .toBe("II");
    });
test("Testing out conversion of a single character like 3 to give me III", function () {
    expect(romannumeralconverter("3")) .toBe("III");
    });
test("Testing out conversion of a single character like 4 to give me IIII", function () {
    expect(romannumeralconverter("4")) .toBe("IIII");
    });
test("Testing out conversion of a single character like 5 to give me V", function () {
    expect(romannumeralconverter("5")) .toBe("V");
    });
// double character tests.
 test("Testing out conversion of a single character like 10", function () {
     expect(romannumeralconverter("10")) .toBe("X");
     });
 test("Testing out conversion of a single character like 50", function () {
      expect(romannumeralconverter("50")) .toBe("XXXXX");
     });
    //tripple character tests.
      test("Testing out conversion of a single character like 10", function () {
      expect(romannumeralconverter("100")) .toBe("C");
     });
  test("Testing out conversion of a single character like 500", function () {
          expect(romannumeralconverter("500")) .toBe("CCCCC");
      });
  test("Testing out conversion of a single character like 1000", function () {
      expect(romannumeralconverter("1000")) .toBe("M");
      });
 // carrying out more tests for our random number generator.
 test("Testing out conversion of a single character like 40", function () {
    expect(romannumeralconverter("40")) .toBe("XXXX");
    });

test("Testing out conversion of a single character like 6", function () {
    expect(romannumeralconverter("6")) .toBe("VI");
    });
test("Testing out conversion of a double characters like 16", function () {
    expect(romannumeralconverter("16")) .toBe("XVI");
    });
test("Testing out conversion of a tripple characters like 123", function () {
    expect(romannumeralconverter("123")) .toBe("CXXIII");
    });
test("Testing out conversion of a tripple characters like 1000", function () {
    expect(romannumeralconverter("1000")) .toBe("M");
    });
// starting out some edge cases.
test("Testing out conversion of a tripple characters like 1000", function () {
    expect(romannumeralconverter("1001")) .toBe("MI");
    });
test("Testing out conversion of a tripple characters like 1000", function () {
    expect(romannumeralconverter("1020")) .toBe("MXX");
    });
test("Testing out an edge case like 400", function () {
    expect(romannumeralconverter("400")) .toBe("CCCC");
    });
test("Testing out conversion of a edge cases like 1299", function () {
    expect(romannumeralconverter("1299")) .toBe("MCCXXXXXXXXXVIIII");
    });
test("Testing out conversion of a edge cases like 3499", function () {
    expect(romannumeralconverter("3499")) .toBe("MMMCCCCXXXXXXXXXVIIII");
    });
test("Testing out conversion of a edge cases like 0", function () {
    expect(romannumeralconverter("0")) .toBe("");
    });
test("Testing out conversion of a edge cases like 0", function () {
    expect(romannumeralconverter("null")) .toBe("");
    });