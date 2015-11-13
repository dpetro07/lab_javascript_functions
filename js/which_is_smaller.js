function whichIsSmaller() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;

    if(firstNumber < secondNumber) {
      alert("Your 1st #  is the smaller number");
    } else {
      if(secondNumber < firstNumber) {
        alert("Your 2nd # is the smaller number" );
      } else {
        if(firstNumber = secondNumber)
          alert("Please put two numbers that are not the same")
      }
    }
  }
