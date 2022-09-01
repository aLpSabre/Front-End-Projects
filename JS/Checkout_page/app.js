//* Products
const shoe = document.querySelector(".shoe");
const backpack = document.querySelector(".backpack");

//* Operators
const minus0 = document.querySelector(".minus0");
const minus1 = document.querySelector(".minus1");
const plus0 = document.querySelector(".plus0");
const plus1 = document.querySelector(".plus1");
//* Total price
const total = document.querySelector(".total-input");

//* Variables
let shoeNum = 0;
let backNum = 0;
let totalNum = 0;

shoe.value = shoeNum;
backpack.value = backNum;
total.value = `$${totalNum}`;

//! Application

plus0.addEventListener("click", function () {
  backNum += 1
  backpack.value = backNum;
  if (total.value.slice(1) == 0) {
    totalNum += 54.99 + 19;
    total.value = `$${totalNum.toFixed(2)}`;
  } else {
    totalNum += 54.99;
    total.value = `$${totalNum.toFixed(2)}`;
  }
}) 


plus1.addEventListener("click", function () {
  shoeNum += 1
  shoe.value = shoeNum;
  if (total.value.slice(1) == 0) {
    totalNum += 74.99 + 19;
    total.value = `$${totalNum.toFixed(2)}`;
  } else {
    totalNum += 74.99;
    total.value = `$${totalNum.toFixed(2)}`;
  }
})

minus0.addEventListener("click", function () {
  
  /*  */console.log(backNum !== 0 || total.value.slice(1) ==73.99);
  if (backNum !== 0 || total.value.slice(1) ==73.99) {
    if (total.value.slice(1) ==73.99){
      backNum -= 1
      backpack.value = backNum;
      //console.log(totalNum);
      totalNum =0;
      total.value = `$${totalNum}`;
    }else{
      backNum -= 1
      backpack.value = backNum;
      totalNum -= 54.99;
      total.value = `$${totalNum.toFixed(2)}`;
    }
  }
})

minus1.addEventListener("click", function () {
  if (shoeNum !== 0 || total.value.slice(1) ==93.99) {
    if(total.value.slice(1) ==93.99){
      shoeNum -= 1
      shoe.value = shoeNum;
      totalNum =0;
      total.value = `$${totalNum.toFixed(2)}`;
    }else{
      shoeNum -= 1
      shoe.value = shoeNum;
      totalNum -= 74.99;
      total.value = `$${totalNum.toFixed(2)}`;
    }
  }
})
