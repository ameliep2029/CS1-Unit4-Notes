console.log("hello world");


//  MATH OPERATIONS (with numbers) 

let age = 18;
let ageInTen = age + 10 ;
let ageDogYears = age / 8;
console.log(age); 
console.log(ageInTen);
console.log(ageDogYears);
// You can do math with +, -, *, / 


// Combine Strings with CONCATENATION 
console.log("My Age is " + "30");
//Combine strings with variables 
console.log("My Age is" + age); 
console.log("In ten years I will be " + ageInTen);
console.log("My age in dog years is " + ageDogYears);
// using the plus sign with at least one "String"
// means you're combining (concatenating) not doing addition
/* FUNCTIONS: 
Reusable sets of code statements 
that perform a specific task/process 
*/

// console.log is a built-in FUNCTION  we use a lot 
// TASK: display data in the console 
console.log("I just used a function!");
// some functions need PARAMETERS (input) 

// DEFINE (create) your own function
function skincare() {
    // STATEMENTS (actions) to execute for this routine 
    console.log("1. Clense face");
    console.log("2. Apply serums");
    console.log("3. Moisturize");

} 
// CALL the function to use it!
skincare(); 
skincare(); // can run the fnction again 

// 4 types of FUNCTIONS 
// input - yes or no? output - yes or no?

// SANDWICH - need input, provide output
// if you need input, list (parameters)
function makeSandwich (filling, sauce, bread) {
   // put the ingredients together 
   let sandwich; 
   sandwich = filling + " and " + sauce + " on " + bread; 
   // if you give ouput, use the word RETURN 
   return sandwich; 
  
}

// using a function with input means YOU need to provide arguments in the parenthises 
let mySandwich = makeSandwich("mozzarella","pesto","baguette" ) ;
console.log(mySandwich) ;