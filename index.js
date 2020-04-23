// Your code goes here

const text = document.querySelector("#text")

document.addEventListener("DOMContentLoaded", function() {
     text.innerText = "This was really cool"
  });
  document.addEventListener("DOMContentLoaded", function() {
    console.log("This was next")
 });

  console.log("This fire first")
  
  
setTimeout(function(){
 	alert("Sup!"); 
}, 2000);//wait 2 seconds