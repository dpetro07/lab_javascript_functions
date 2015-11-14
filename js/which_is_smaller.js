function whichIsSmaller() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;

  console.log("firstNumber is: ", firstNumber);
  console.log("firstNumber type is: ", typeof firstNumber);

  console.log("secondNumber is ", secondNumber);
  console.log("secondNumber type is: ", typeof secondNumber);


  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if(isNaN(firstNumber)) {
    alert("You must enter a number(#) in the first box");
  }
  if(isNaN(secondNumber)) {
    alert("You must enter a number(#) in the second box");
  }




    if(firstNumber < secondNumber) {
      alert(firstNumber);
    } else {
      if(secondNumber < firstNumber) {
        alert(secondNumber);
      } else {
        if(firstNumber = secondNumber)
          alert("Please put a number(#) in each box, or two numbers(#) that are not the same")
      }
    }
  }
