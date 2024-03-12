const verifyPassword = require('../verifyPassword')
//arrange.
const validPassword = "Mary1@theee";
 const invalidEmail = "marygmail.com";

test("valid standard password ", function () {
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(true);
    });
//invalid tests
test("Password with less characters in the password ", function () {
    //arrange
    const invalidPassword = "Mary1@t";
      //act
      const result = verifyPassword(invalidPassword);
      //assert
      expect(result.pass).toBe(false);
      });
test("Password without special characters ", function () {
    //arrange
    const invalidPassword = "Mary189tt";
    //act
    const result = verifyPassword(invalidPassword);
    //assert
    expect(result.pass).toBe(false);
    });
test("Password without Uppercase letter ", function () {
    //arrange
    const invalidPassword = "mary189tt";
    //act
    const result = verifyPassword(invalidPassword);
    //assert
    expect(result.pass).toBe(false);
    });
test("Password without any lowercase letter ", function () {
    //arrange
    const invalidPassword = "MART189tt";
    //act
    const result = verifyPassword(invalidPassword);
    //assert
    expect(result.pass).toBe(false);
    });
test("Password without any digits", function () {
        //arrange
        const invalidPassword = "MARTui@tt";
        //act
        const result = verifyPassword(invalidPassword);
        //assert
        expect(result.pass).toBe(false);
        });
test("Password with more than one special characters", function () {
    //arrange
    const invalidPassword = "MARTu!i@tt";
    //act
    const result = verifyPassword(invalidPassword);
    //assert
    expect(result.pass).toBe(false);
    });
    
//Valid inputs
test("Password with different special character", function () {
    //arrange
    const validPassword = "MARTu1iTY!t";
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(true);
    });
test("valid standard password ", function () {
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(true);
    });
test("valid standard password which is very long", function () {
    //arrange
    const validPassword = "MARTu1iTYgghjYUIOPNGDHHJLLLKHGFD!t";
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(true);
    });
//boundary tests
test("Password is an empty string", function () {
    //arrange
    const validPassword = " ";
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(false);
    });
 test("Password has one character ", function () {
        //arrange
        const validPassword = "A";
        //act
        const result = verifyPassword(validPassword);
        //assert
        expect(result.pass).toBe(false);
        });
test("Password has negative numbers ", function () {
            //arrange
            const validPassword = "AGHJ-234";
            //act
            const result = verifyPassword(validPassword);
            //assert
            expect(result.pass).toBe(false);
            });
test("Password has more special characters ", function () {
    //arrange
    const validPassword = "AGHJ-23&&&%4";
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(false);
    });
test("Password has a white space at front and the back ", function () {
    //arrange
    const validPassword = " AGHJ-234 ";
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(false);
    });
test("Password is null ", function () {
    //arrange
    const validPassword = null;
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(false);
    });
test("Password is undefined", function () {
    //arrange
    const validPassword = undefined;
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(false);
    });
test("Password has an emoji ", function () {
    //arrange
    const validPassword = "MImmi2@😊";
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(false);
    });
test("Password with a million characters ", function () {
        //arrange
        const validPassword = "MImmi2@😊";
        //act
        const result = verifyPassword(validPassword);
        //assert
        expect(result.pass).toBe(false);
        });
test("Password with special character at the start ", function () {
    //arrange
    const validPassword = "!MImmihh2";
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(true);
    });

test("Password with number at the start ", function () {
    //arrange
    const validPassword = "1MImm@ihh";
    //act
    const result = verifyPassword(validPassword);
    //assert
    expect(result.pass).toBe(true);
    });

