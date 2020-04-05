// The below functions are syntactically correct but not outputting the right results.
// Look at the tests and see how you can fix them.

function mood() { //creating a function called mood
    let isHappy = false; //assigning boolean variables to true
    //let isHappy = false;
  
    if (isHappy) { //conditional statement checks if it is true
      return "I am happy";
    } 
    else { //other posibility is not true
      return "I am not happy";
    }
  }

  //console.log(mood()); 
  
 //creating a function called greateThan10
  function greaterThan10() {
    let num = 10; //setting variables num and isBigEnough
    let isBigEnough = true;

  
    if (isBigEnough) {
      return "num is greater than or equal to 10";
    }
    else if(num>=10){
        return "number is greater 10";
    }
     else {
      return "num is not big enough";
    }
  }



console.log(greaterThan10(5));

  
  function sortArray() {
    let letters = ["a", "n", "c", "e", "z", "f"];
    let sortedLetters = letters.sort();
    return sortedLetters;
  }
  
  function first5() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let sliced = numbers.slice(0,5);
    return sliced;
  }
  
  function get3rdIndex(arr) {
    //let element = [0,1,2,3,4];
    let index = arr[3];
    return index;
  }
  
  /* ======= TESTS - DO NOT MODIFY ===== */
  
  function test(test_name, expr) {
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }
  
    console.log(`${test_name}: ${status}`);
  }
  
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  
    return true;
  }
  
  test("mood function works", mood() === "I am not happy");
  test(
    "greaterThanTen function works",
    greaterThan10() === "num is greater than or equal to 10"
  );
  test(
    "sortArray function works",
    arraysEqual(sortArray(), ["a", "c", "e", "f", "n", "z"])
  );
  test("first5 function works", arraysEqual(first5(), [1, 2, 3, 4, 5]));
  
  test(
    "get3rdIndex function works - case 1",
    get3rdIndex(["fruit", "banana", "apple", "strawberry", "raspberry"]) ===
      "strawberry"
  );
  test(
    "get3rdIndex function works - case 2",
    get3rdIndex([11, 37, 62, 18, 19, 3, 30]) === 18
  );
