const container = document.querySelector(".container");
const result = document.querySelector(".result");

let myArray = []
let equalClickedCheck = false;
let operetorCheck = false;
container.addEventListener("click", (e => {

  if (e.target.classList.contains("numbers")) {

    document.querySelector(".result").innerText += e.target.innerText
    operetorCheck = true;
    if (result.innerHTML.length > 0) {
      document.querySelector(".box1").innerText = "C"
    }
    if (equalClickedCheck) {
      equalClickedCheck = false;
      document.querySelector(".result").innerText = e.target.innerText
    }
  } else if (e.target.classList.contains("operator") && operetorCheck) {
    document.querySelector(".result").innerText = document.querySelector(".result").innerText + e.target.innerText
    equalClickedCheck = false;
    operetorCheck = false;

  }  //? "=" sign  
  else if (e.target.classList.contains("box19") && operetorCheck) {
    myArray.push(document.querySelector(".result").innerText);
    let regex = /[x\%/÷]/g;
    const found = myArray[0].match(regex);
  
    if (found !== null) {
      if (found.length >= 1) {
        let checkArray = [...myArray[0]];
        checkArray.map((item, index, array) => {
          if (item == "x") {
            array[index] = "*"
          } else if (item == "%") {
            array[index] = "*0.01*"
          } else if (item == "÷") {
            array[index] = "/"
          }
        })
        myArray[0] = checkArray.join("");
       
        let myresult = Function("return " + myArray[0])();
        result.innerText = myresult
        equalClickedCheck = true;
      }
    } else {
      let myresult = Function("return " + myArray[0])();
      result.innerText = myresult
      equalClickedCheck = true;

    }
    myArray = []

  }
  //? "±" sign  
  else if (e.target.classList.contains("box2")) {
    if (result.innerHTML.includes("+") || result.innerHTML.includes("-")) {
      let plusIndex = result.innerHTML.lastIndexOf("+");
      let minusIndex = result.innerHTML.lastIndexOf("-");
      let decideOperator = plusIndex > minusIndex ? "+" : "-";
      let array = [...result.innerHTML]
      let lastIndex = array.lastIndexOf(decideOperator);
      array[lastIndex] = plusIndex > minusIndex ? "-" : "+";
      result.innerHTML = array.join("");
    }
  } else if (e.target.classList.contains("box1")) {
    result.innerHTML = "";
    operetorCheck = true;
    myArray = [];
    if (result.innerHTML == 0) {
      document.querySelector(".box1").innerText = "AC"
    }
  }
}))

