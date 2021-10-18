//"use strict";
let inventory = [];
function addToPageList() {

    let index = 0; 
    let id = +(document.getElementById("iditems").value);
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = +(document.getElementById("price").value);
    let brand = document.getElementById("brand").value;
    let rate = +(document.getElementById("rating").value);
    let review = +(document.getElementById("numReviews").value);
    let items = {id:index, name:name,
                category:category,
                //image:image,
                price: price,
                brand:brand,
                rating: rate,
                numReviews: review,
                };

    inventory.push(items);
console.log(inventory);

    itemGenerator(inventory);

}

       
function itemGenerator(inventory) {
    let inventoryResult = document.getElementById('mainpage');
    inventoryResult.innerHTML = "";
    //conversion to main page is not working 
    for (let i= 0; i< inventory.length; i++) {
      row = `<tr>  
                <td>${inventory[i].id} </td>
                <td> ${inventory[i].name}</td>
                <td>  ${inventory[i].category}</td>
                <td>  ${inventory[i].price} </td>
                <td> ${inventory[i].brand} </td>
                <td> ${inventory[i].rating} </td>
                <td> ${inventory[i].numReviews}</td>
            
            </tr>  `
        
        inventoryResult.innerHTML+= row;
                          
    }             
                           
}     

          
function edit(){
    alert("Opps Sorry! Try later. We are updating our database! ")
}           
function remove(){
    alert("Again? sorry, please try later, we are updating our database! ")
}           
      
