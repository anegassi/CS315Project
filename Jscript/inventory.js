//"use strict";
import {addToDatabase,myProducts} from "./data.js";
//let inventory = [];
window.onload= getmethod;
function getmethod(){
document.getElementById("adding").addEventListener("click",addToPageList)
document.getElementById("editing").addEventListener("click",edit2)
document.getElementById("removing").addEventListener("click",remove)
}
function addToPageList() {

    
    let id = myProducts.length+1 +"";
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = +(document.getElementById("price").value);
    let brand = document.getElementById("brand").value;
    let rate = +(document.getElementById("rating").value);
    let review = +(document.getElementById("numReviews").value);
    let items = {id:id,
                name:name,
                category:category,
                //image:image,
                price: price,
                brand:brand,
                rating: rate,
                numReviews: review,
                };
          addToDatabase(items);
   
   console.log(myProducts)
    itemGenerator(myProducts);

}

       
function itemGenerator(inventory) {
    console.log(inventory);
    let inventoryResult = document.getElementById('mainpage');
    console.log(inventoryResult)

    inventoryResult.innerHTML = " ";
    for (let i = 0; i < inventory.length; i++){
        
        let row = `<tr>  
                       <td>${inventory[i].id}</td>                  
                        <td>${inventory[i].name}</td>
                       <td>${inventory[i].category}</td>
                        <td>${inventory[i].price}</td>
                        <td>${inventory[i].brand}</td>
                        <td>${inventory[i].rating}</td>  
                        <td>${inventory[i].numReviews}</td>
                        <td><input id="editing" type="button"  value="Edit" /></td>
                        <td><input id="removing" type="button"  value="Remove" /></td>                       
                        </tr>`
    
                        inventoryResult.innerHTML += row;
    }
                        
}     

function edit2() {
    alert("Again? sorry, please try later, we are updating our database! ");
  }
  function remove() {
    alert("Again? sorry, please try later, we are updating our database! ");
  }   
  export{edit2,remove}     
           
      
