const verifyEmail = require('../verifyEmail')
//arrange
const validEmail = "mary@gmail.com";
 const invalidEmail = "marygmail.com";

test("valid email address", function () {
    //act
    const result = verifyEmail(validEmail);
    //assert
    expect(result).toBe(true);
    });
    //arrange step.
    
test("email with acceptable special characters that can be contained in an email", function(){
    const validEmail = "mary+jeke_i@gmail.com";
    //act
    const result = verifyEmail(validEmail);
    //assert
    expect(result).toBe(true);
});
test("email with a numbers being present", function(){
    const validEmail = "mary123hj@gmail.com";
    //act
    const result = verifyEmail(validEmail);
    //assert
    expect(result).toBe(true);
});
test("email with two dots", function(){
    const validEmail = "mary123h.j@gmail.com";
    //act
    const result = verifyEmail(validEmail);
    //assert
    expect(result).toBe(true);
});
test("email with uppercaseletters", function(){
    const validEmail = "MARY@gmail.com";
    //act
    const result = verifyEmail(validEmail);
    //assert
    expect(result).toBe(true);
});
test("emails with lowercaseletters", function(){
    const validEmail = "mary@gmail.com";
    //act
    const result = verifyEmail(validEmail);
    //assert
    expect(result).toBe(true);
});
//Invalid email addresses tests
test("email with two consecutive dots", function(){
    const validEmail = "mary123h..j@gmail.com";
    //act
    const result = verifyEmail(validEmail);
    //assert
    expect(result).toBe(false);
});
test("email has an empty string", function(){
    const invalidEmail = " ";
    //act
    const result = verifyEmail(invalidEmail);
    //assert
    expect(result).toBe(false);
});
test("email has an invalid characters", function(){
    const invalidEmail = "mary&&nnm@gmail.com";
    //act
    const result = verifyEmail(invalidEmail);
    //assert
    expect(result).toBe(true);
});
test("email has ranges out of normal", function(){
    const longEmail = "a".repeat(321)+"@gmail.com";
    //act
    const result = verifyEmail(longEmail);
    //assert
    expect(result).toBe(true);
});
test("email should have an @ with in the email since it is a valid input", function(){
    //act
    const result = verifyEmail(invalidEmail);
    //assert
    expect(result).toBe(false);
});
test("email has multiple @@ with in it", function(){
    const invalidEmail ="mary@@gmail.com";
    //act
    const result = verifyEmail(invalidEmail);
    //assert
    expect(result).toBe(false);
});
test("email has only one character", function(){
    const invalidEmail ="a";
    //act
    const result = verifyEmail(invalidEmail);
    //assert
    expect(result).toBe(false);
});
test("email is null", function(){
    const invalidEmail =null;
    //act
    const result = verifyEmail(invalidEmail);
    //assert
    expect(result).toBe(false);
});