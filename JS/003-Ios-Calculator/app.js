const container = document.querySelector(".container");
const result = document.querySelector(".result");



let myArray = []
let check = false;
container.addEventListener("click", (e => {
 
  if (e.target.classList.contains("numbers")) {
    document.querySelector(".result").innerText += e.target.innerText

     if (result.innerHTML.length > 0){
      document.querySelector(".box1").innerText="C"
    } 
    if (check) {
      check = false;
      document.querySelector(".result").innerText = e.target.innerText
    }
  } else if (e.target.classList.contains("operator")) {


    document.querySelector(".result").innerText = document.querySelector(".result").innerText + e.target.innerText
    check = false;

  } else if (e.target.classList.contains("box19")) {
    myArray.push(document.querySelector(".result").innerText);
 
    if (myArray[0].includes("%")) {
      let regex = /[+*\%/-]/g;
      const found = myArray[0].match(regex);
      if (found.length === 1) {
        result.innerText = (Number((myArray[0].slice(0, myArray[0].indexOf("%")))) / 100) * (Number(myArray[0].slice(myArray[0].indexOf("%") + 1)));
      } else {
        let stringArray = [...myArray[0]];
        stringArray.map((item, index, array) => {
          if (item === "%") {
            item = item * 2;
            array[index] = "*0.01*"
          }
        })
        let string = stringArray.join("");
        
        try{
          let myresult = Function("return " + string)();
          result.innerText = myresult
          check=true;
        }
        catch(e){
          check = false;
        }
      }

    } else {
      try{
        let myresult = Function("return " + myArray[0])();
        result.innerText = myresult
        check=true;
      
      }
      catch(e){
        check = false;
      }
    
    }
    
    myArray = [];
   
  }else if (e.target.classList.contains("box2")){
    if(result.innerHTML.includes("+")|| result.innerHTML.includes("-")){
      let plusIndex=result.innerHTML.lastIndexOf("+");
      let minusIndex=result.innerHTML.lastIndexOf("-");
      let decideOperator=plusIndex>minusIndex?"+":"-";
      let array=[...result.innerHTML]
      let lastIndex=array.lastIndexOf(decideOperator);
      array[lastIndex]=plusIndex>minusIndex?"-":"+";
      result.innerHTML=array.join("");
    }
  }else if (e.target.classList.contains("box1")){
      let array=[...result.innerHTML]
      array.pop()
      result.innerHTML=array.join("");
    if( result.innerHTML==0){
      document.querySelector(".box1").innerText="AC"
    }
  }
}))

