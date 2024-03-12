module.exports = function romannumeralconverter(input){
    // arrange :
    //Coming up with an array of different roman numeral numbers
    const arraywitharabicnumerals={M:1000,C:100,X:10,V:5,I:1};
    let number = parseInt(input);
    let roman = "";
    // act
    // creating the actions to be taken on our tests
     for (let i in arraywitharabicnumerals){
        //if a number is greater than any of our numbers in the array we add the last similarest numeral and letter subtract the value of the numeral from our number we had
        while (number >= arraywitharabicnumerals[i]){
            //appending the roman numeral to the number we have found at that point with in our array 
            roman += i;
            number -= arraywitharabicnumerals[i];

        } 
     }

    //assert
    // assert that it will bring back the roman numeral expected
    return roman;
    
    
    

}