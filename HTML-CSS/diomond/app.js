
const array1 = [
  ["", "", "", "", "*", "", "", "",""],
  ["", "", "", "*", "", "*", "", "",""],
  ["", "", "*", "", "", "", "*", "",""],
  ["", "*", "", "", "", "", "", "*",""],
  ["*", "", "", "", "", "", "", "","*"],
  ["", "*", "", "", "", "", "", "*",""],
  ["", "", "*", "", "", "", "*", "",""],
  ["", "", "", "*", "", "*", "", "",""],
  ["", "", "", "", "*", "", "", "",""]
]
array1.forEach(e=> {let a=e.join(" ") 
  console.log(a)})

/* array1.forEach(e=>e.forEach(e=>console.log(e))) */

/* array1.forEach(e=> { 
  console.log(e.length)})  */

let array2 = [
  ["", "", "", "", "", "", "", "",""],
  ["", "", "", "", "", "", "", "",""],
  ["", "", "", "", "", "", "", "",""],
  ["", "", "", "", "", "", "", "",""],
  ["", "", "", "", "", "", "", "",""],
  ["", "", "", "", "", "", "", "",""],
  ["", "", "", "", "", "", "", "",""],
  ["", "", "", "", "", "", "", "",""],
  ["", "", "", "", "", "", "", "",""]
];
let count = 4;
for (let i = 0; i < 5; i++) {
  console.log("count: ", count, "i: ", i);
  array2[i][count] = "*"
  if (count != 0) {
    count--;
  }

}
console.log(count)
for (let i = 5; i < 9; i++) {
  count++;
  console.log("count: ", count, "i: ", i);
  array2[i][count] = "*"

}
console.log(count)
for (let i = 8; i > 4; i--) {

  console.log("count: ", count, "i: ", i);
  array2[i][count] = "*"
  count++;

}
console.log(count)
for (let i = 4; i > 0; i--) {



  console.log("count: ", count, "i: ", i);
  array2[i][count] = "*"
  count--;

}
array2.forEach(e => {
  let a = e.join(" ")
  console.log(a)
})
console.log(array1)
console.log("----")
console.log(array2)