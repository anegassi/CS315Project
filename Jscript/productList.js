//import populateList from "./buildList.js";

import data from "./data.js";
import Rating from "./ratings.js";
window.onload=router;
function router() {
     const main=document.getElementById('main-container');
     main.innerHTML=populateList.render();
};


const populateList= {
     render: ()=>{
         const { products } = data;
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
 }
//window.addEventListener('load',router);