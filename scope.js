//  ## SCOPE (Exercise 20 of 20)  
   
//   Scope is the set of variables, objects, and functions you have access to.  
   
//   JavaScript has two scopes: global and local. A variable that is declared  
//   outside a function definition is a global variable, and its value is  
//   accessible and modifiable throughout your program. A variable that is  
//   declared inside a function definition is local. It is created and  
//   destroyed every time the function is executed, and it cannot be accessed  
//   by any code outside the function.  
   
//   Functions defined inside other functions, known as nested functions, have  
//   access to their parent function's scope.  
   
//   Pay attention to the comments in the code below:  


// const a = 4; // a is a global variable, it can be accessed by the functions below

// function foo() {
  // const b = a * 3; // b cannot be accessed outside foo function, but can be accessed by functions
  // defined inside foo
  // function bar(c) {
    // const b = 2; // another `b` variable is created inside bar function scope
    // the changes to this new `b` variable don't affect the old `b` variable
    // console.log(a, b, c);
  // }

  // bar(b * 4);
// }

// foo(); // 4, 2, 48

// The value of b is 2 because the constant b declared within the bar function shadows the outer b 
// declared in the foo function. Shadowing occurs when a variable declared within a inner scope has 
// the same name as a variable declared in an outer scope. In such cases, the inner variable is said 
// to shadow the outer variable and takes precedence over it, so the value of b within the bar function is 2 and not 12.




//  ## The challenge:  
   
//   Create a file named scope.js.  
   
//   In that file, copy the following code:  
   
     const a = 1; const b = 2; const c = 3;  
       
     (function firstFunction () {  
       const b = 5; const c = 6;  
       
       (function secondFunction () {  
         const b = 8;  

         console.log(a, b, c);

         console.log(`a: ${a}, b: ${b}, c: ${c}`); 

        //  The console.log statement is written using template literals, a feature of modern JavaScript 
        // that allows embedding expressions inside string literals. The expressions inside the curly braces ${} 
        // are evaluated and their values are concatenated with the string literal.
        
        // For example, in the code console.log(a: ${a}, b: ${b}, c: ${c}), 
        // the values of variables a, b, and c will be evaluated and will replace 
        // the expressions inside the curly braces. The final output will be a string that 
        // includes the values of these variables, separated by commas. The output will look 
        // like this: "a: 1, b: 8, c: 6".
       
         (function thirdFunction () {  
           const a = 7; const c = 9;  
       
           (function fourthFunction () {  
             const a = 1; const c = 8;  
           })()  
         })()  
       })()  
     })()  
   
//   Use your knowledge of the variables' scope and place the following code  
//   inside one of the functions in scope.js so the output is 
// a: 1, b: 8, c: 6  
   
    //  console.log(`a: ${a}, b: ${b}, c: ${c}`);  
   
//   Check to see if your program is correct by running this command:  
   
//      javascripting verify scope.js  





// Explanation

// Here's a more detailed explanation of the scoping of variables in JavaScript:

// In JavaScript, variables declared with the const keyword have block scope. 
// This means that they are only accessible within the block in which they are declared. 
// The code provided has four nested anonymous functions, each with its own scope. 
// The scope of a variable defined in an inner function has access to variables in its outer scope, 
// but the reverse is not true.

// With the given code, if we place the console.log statement inside the secondFunction, 
// it will have access to all three variables a, b, and c. The value of a will be taken 
// from the global scope (since it is not re-declared within any of the functions), 
// the value of b will be taken from the local scope within the secondFunction 
// (since it is re-declared there), and the value of c will be taken from the local scope within the firstFunction.
//  Hence, the output will be "a: 1, b: 8, c: 6".
