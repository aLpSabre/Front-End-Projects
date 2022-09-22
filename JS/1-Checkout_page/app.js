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

const values={backNum:0,shoeNum:0};
let totalNum = 0;

shoe.value = values.shoeNum;
backpack.value = values.backNum;
total.value = `$${totalNum}`;


//! Application 

function increment(num,product,price) {
  values[num]+=1;
  product.value =  values[num];
  if (total.value.slice(1) == 0) {
    totalNum += price + 19;
    total.value = `$${totalNum.toFixed(2)}`;
  } else {
    totalNum += price;
    total.value = `$${totalNum.toFixed(2)}`;
  }
}

function decrement(num,product,price) {
 
  if ( values[num] !== 0) {
    if (total.value.slice(1) ==(price+19).toFixed(2)){
      values[num]-=1;
      product.value =  values[num];
      totalNum =0;
      total.value = `$${totalNum}`;
    }else{
      values[num]-=1;
      product.value =  values[num];
      totalNum -= price;
      total.value = `$${totalNum.toFixed(2)}`;
    }
  }
}

plus0.addEventListener("click",  () => increment("backNum",backpack,54.99)); 
plus1.addEventListener("click",  () => increment("shoeNum",shoe,74.99)); 

minus0.addEventListener("click",  () => decrement("backNum",backpack,54.99)); 
minus1.addEventListener("click",  () => decrement("shoeNum",shoe,74.99)); 