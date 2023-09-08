let product=localStorage.getItem("product");
if(product!=null){
    product=JSON.parse(product); 
}
else{
    product=[];
}



let form=document.querySelector(".myForm");
let pname=document.querySelector(".name");
let qty=document.querySelector(".qty");
let price=document.querySelector(".price");
let id=document.querySelector(".id");
let add=document.querySelector(".add");
let box=document.querySelector(".content");
add.addEventListener("click",()=>{
    box.classList.toggle("hidden");
})
let clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
    product=[];
    localStorage.setItem('product',JSON.stringify(product));

})
form.addEventListener("submit",ev=>{
    ev.preventDefault();
    console.log(pname.value,qty.value,price.value, id.value);
 let data= {name:pname.value,
    qnty:qty.value,
    price:price.value,
    id:id.value
};
let isProductAdded = false;

product.forEach((item, index) => {    
    if (item.id === data.id) {
      alert('Product was already added');
      product[index].qnty = parseInt(product[index].qnty) + parseInt(data.qnty);
      product[index].price= parseInt(product[index].price) + parseInt(data.price);
      isProductAdded = true;
    }

  });
  if (!isProductAdded) {
    product.push(data);
  }
  localStorage.setItem('product',JSON.stringify(product));
});

let update=document.querySelector(".update");
update.addEventListener("click",()=>{
    let data= {name:pname.value,
        qnty:qty.value,
        price:price.value,
        id:id.value
    };
    product.forEach((item, index) => {    
        if (item.id === data.id) {
          alert('Product updated!!');
          product[index].name =data.name;
          product[index].qnty =data.qnty;
          product[index].price =data.price;
          isProductAdded = true;
          localStorage.setItem('product',JSON.stringify(product));
        }
      });
})

