
var productcontainer =document.querySelector(".products")
var searchoff =document.getElementById("search")
var productlist =productcontainer.querySelectorAll("div")

searchoff.addEventListener("keyup",function()
{
 var enteredvalue =event.target.value.toUpperCase()

 for(count=0;count<productlist.length;count++)
   {
   var productname =productlist[count].querySelector("h5").textContent
   if( productname.toUpperCase().indexOf(enteredvalue)<0)
     {
productlist[count].style.display="none"
   }else{
productlist[count].style.display="block"
   }
 }
})







