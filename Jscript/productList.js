//const myProducts = require("./data.js")
import {myProducts} from "./data.js";
console.log("this file",myProducts )
import Rating from "./ratings.js";
window.onload=router;
function router() {
     //const main=document.getElementById('main-container');
     //main.innerHTML=  populateList.render(data);
     const main=document.querySelector(".productdiv")
     main.innerHTML=render(myProducts);
     document.getElementById("box1").addEventListener('change',box1)
     document.getElementById("box2").addEventListener('change',box2)
     document.getElementById("box3").addEventListener('change',box3)
     document.getElementById("box4").addEventListener('change',box4)
     document.getElementById("box5").addEventListener('change',box5)
     document.getElementById("box6").addEventListener('change',box6)
     document.getElementById("radio1").addEventListener('change',radio1)
     document.getElementById("radio2").addEventListener('change',radio2)
     document.getElementById("radio3").addEventListener('change',radio3)
     
};


    function render (data2) {
         const products = data2;
         return ` 
         <ul class="products">        
            ${products.map(
                (product) =>`
                
                <li>
                    <div class="product">
                       <a href="/#/product/${product.id}">
                       <img src="${product.image}" alt="${product.name}" />
                       </a>
                     <div class="product-name">
                       <a href="/#/product/${product.id}">${product.name}</a>
                     </div>
                     <div class="product-rating">
                       ${Rating.render({value:`${product.rating}`, text:`${product.numReviews} reviews`})}
                     </div>
                     <div class="product-brand">${product.brand}</div>
                     <div class="product-price">$${product.price}</div>
                    </div> 
 
                </li>
                `
            )
         .join('\n')}
          
         
         
         `
     }

     let selected = [];
   function box1 (){
        selected=myProducts.filter(obj=>obj.category=='furniture')
        console.log(selected);
        const main=document.querySelector(".productdiv")
        main.innerHTML="";
         main.innerHTML=render(selected);
        
    };
    function box2 (){
      selected=myProducts.filter(obj=>obj.category=='kids')
      console.log(selected);
      const main=document.querySelector(".productdiv")
      main.innerHTML="";
       main.innerHTML=render(selected);
      
  };
  function box3 (){
    selected=myProducts.filter(obj=>obj.category=='electronics')
    console.log(selected);
    const main=document.querySelector(".productdiv")
    main.innerHTML="";
     main.innerHTML=render(selected);
    
};
function box4 (){
  selected=myProducts.filter(obj=>obj.category=='tools')
  console.log(selected);
  const main=document.querySelector(".productdiv")
  main.innerHTML="";
   main.innerHTML=render(selected);
  
};
function box5 (){
  selected=myProducts.filter(obj=>obj.category=='books')
  console.log(selected);
  const main=document.querySelector(".productdiv")
  main.innerHTML="";
   main.innerHTML=render(selected);
  
};
function box6 (){

  router()
  // const main=document.querySelector(".productdiv")
  // console.log(myProducts)
  //    main.innerHTML=render(myProducts);
  
};

function radio1(){
  myProducts.sort((obj1,obj2)=>obj1.price<obj2.price?1:-1)
  console.log(myProducts)
  const main=document.querySelector(".productdiv")
   //main.innerHTML="";
   main.innerHTML=render(myProducts);
}
function radio2(){
  myProducts.sort((obj1,obj2)=>obj1.price>obj2.price?1:-1)
  console.log(myProducts)
  const main=document.querySelector(".productdiv")
   //main.innerHTML="";
   main.innerHTML=render(myProducts);
}
function radio3(){
  myProducts.sort((obj1,obj2)=>obj1.rating>obj2.rating?-1:1)
  console.log(myProducts)
  const main=document.querySelector(".productdiv")
   //main.innerHTML="";
   main.innerHTML=render(myProducts);
}
