let array2=new Array(11);
array2.fill([]);
array2.map((e,index,array)=>{
  array[index]=new Array(11)
}) 

let count = 5;
for (let i = 0; i < 6; i++) {
  console.log("count: ", count, "i: ", i);
  array2[i][count] = "*"
  if (count != 0) {
    count--;
  }

}
console.log(count)
for (let i = 6; i < 11; i++) {
  count++;
  console.log("count: ", count, "i: ", i);
  array2[i][count] = "*"
  

}
console.log(count)
for (let i = 10; i > 5; i--) {

  console.log("count: ", count, "i: ", i);
  array2[i][count] = "*"
  count++;

}
console.log(count)
for (let i = 5; i > 0; i--) {

  console.log("count: ", count, "i: ", i);
  array2[i][count] = "*"
  count--;

}
array2.forEach(e => {
  let a = e.join(" ")
  console.log(a)
})

/* let myArray=[10,11,12,13,14]
myArray.map((e,index,array)=>{
  array[index]=10
});
console.log(myArray); */

let myArray=new Array(12)
myArray.fill([])
myArray.map((e,index,array)=>{
  array[index]=new Array(12)
})
console.log(myArray[0].length);

console.log(myArray);

let space=[]
space.fill("10")
console.log(space);

