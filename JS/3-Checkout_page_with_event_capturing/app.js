
//* Total price
const total = document.querySelector(".total-input");
const right=document.querySelector(".right")
const container=document.querySelector(".container")
const product=document.querySelector(".product")
//* Variables

total.value = `$${0}`;

right.addEventListener("click",function(e){
  if(e.target.classList.contains("plus")){
    e.target.previousElementSibling.value++;
    calculateProduct(e.target);
    calculateTotal();
  }else if(e.target.classList.contains("minus")){
    if( e.target.nextElementSibling.value>0){
      e.target.nextElementSibling.value--;
      calculateProduct(e.target);
      calculateTotal();
    }else{
      Swal.fire({
        title: 'Do you want to remove the item?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Remove',
        denyButtonText: `Don't remove`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Item is removed!', '', 'success')
          e.target.parentElement.parentElement.parentElement.remove();
          calculateTotal();
        } else if (result.isDenied) {
          Swal.fire('Item is not removed', '', 'info')
        }
      })
     
    }
  }else if(e.target.classList.contains("remove")){
    Swal.fire({
      title: 'Do you want to remove the item?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Remove',
      denyButtonText: `Don't remove`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Item is removed!', '', 'success')
        e.target.parentElement.parentElement.remove();
        calculateTotal();
      } else if (result.isDenied) {
        Swal.fire('Item is not removed', '', 'info')
      }
    })
   
  }

})

const calculateProduct= (btn)=>{
  
  let price=btn.parentElement.parentElement.querySelector(".product-first-price").innerText;
  let piece=btn.parentElement.querySelector("input").value;
  let total=parseFloat(price.slice(1))*parseFloat(piece)? (parseFloat(price.slice(1))*parseFloat(piece)).toFixed(2): 0
  btn.parentElement.parentElement.querySelector(".product-total").lastElementChild.innerText=`$${total}`; 
}

const calculateTotal=()=>{
  let productTotal=document.querySelectorAll(".product-total")
  let sum=0;

  productTotal.forEach((total)=>{
  total=parseFloat(total.lastElementChild.innerText.slice(1))
  sum+=total;

  })
  document.querySelector(".subtotal").lastElementChild.innerText=`$${ sum ?sum.toFixed(2): 0}`
  
  let taxPrice=sum/100*18 ? ((sum/100)*18).toFixed(2) : 0;
  const tax=document.querySelector(".tax");
  tax.lastElementChild.innerText=`$${taxPrice}`

  let shipPrice= sum ? 19.00 : 0;
  const ship=document.querySelector(".shipping");
  ship.lastElementChild.innerText=`$${shipPrice}`

  let totalPrice=sum+Number(taxPrice)+shipPrice ? (sum+Number(taxPrice)+shipPrice).toFixed(2) : 0;
  const total=document.querySelector(".total");
  total.lastElementChild.value=`$${totalPrice}`
}

