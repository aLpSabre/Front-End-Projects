function makeDiomond(piece){

  let array=new Array(2*piece-1);
  array.fill([]);
  array.map((e,index,array)=>{
    array[index]=new Array(2*piece-1)
  })
  
  let count=piece-1

  for (let i = 0; i < piece; i++) {
    array[i][count] = "*"
    if (count != 0) {
      count--;
    }
  
  }
  for (let i = piece; i < 2*piece-1; i++) {
    count++;
    array[i][count] = "*"
  }
  for (let i = 2*piece-2; i > piece-1; i--) { 
    array[i][count] = "*"
    count++;
  }
  for (let i = piece-1; i > 0; i--) {
  
    array[i][count] = "*"
    count--;
  
  }
  return array;
}
const container=document.querySelector(".container");
const number=document.querySelector("#number");
console.log(number.value);

number.addEventListener("click",function(){
  let myArray=makeDiomond(Number(number.value))
  container.innerText=""
  myArray.forEach(e => {
    let a = e.join("&nbsp")
   container.innerHTML+=`<p>${a}</p>`;
  })

})
