"use strict";

window.onload = function () {
    let email= document.querySelector("#email");
    let password= document.querySelector("#password");
    email.addEventListener("keyup", function(){
     let u_times= document.querySelector(".u_times");
     let u_check = document.querySelector(".u_check");
     if (email.value.length == 0|| email.value.length < 7){
       email.style.border = "1px solid red";
       u_times.style.display = "block";
       u_check.style.display = "none";
       return false;
     }
     else {
       email.style.border = "1px solid green";
       u_times.style.display = "none";
       u_check.style.display = "block";
     }
  
    })
  
    password.addEventListener("keyup", function(){
     let p_times= document.querySelector(".p_times");
     let p_check = document.querySelector(".p_check");
     if (password.value.length == 0 || password.value.length < 7){
       password.style.border = "1px solid red";
       p_times.style.display = "block";
       p_check.style.display = "none";
       return false;
     }
     else {
       password.style.border = "1px solid green";
       p_times.style.display = "none";
       p_check.style.display = "block";
     }
  
    })
  }
  
  function validate(){
      if(email.value == null || email.value == ""){
          document.getElementById("error1").innerHTML= "Please enter a valid email";
      }
      
    else if (password.value == null || password.value == ""){
          document.getElementById("error2").innerHTML="Please enter a valid password";
         }
  
    else if(email ==='manager@miu.edu' && password ==='manager')
    loadpage("productList.html")
    //loadpage("inventory.html");
    //window.location.href="inventory.html";
    else {
         
         loadpage("productList.html");
        }

  return false;
        }
  
  function loadpage(url){
      window.location.href = url;
  }