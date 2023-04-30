
   


 //// sum of the number

 
  

  
    //  ----------------two---------------

    var s =document.getElementById("dis1");

    var num= 750.0;
   
   
    var add = document.getElementById("butpa1")
   add.addEventListener("click",function()
   
   {
      add = num;
     s.innerHTML=` ₹ ${add}.0`;
      console.log(s);
        
      
      
       
   })
   //  -----------------------------one end--------------------
   
    var add = document.getElementById("butpa2")
   add.addEventListener("click",function()
   {
   
      add = num+num;
     s.innerHTML=` ₹ ${add}.0`;
      console.log(s);
   
     
       
   })
        
      
      
       
   
   // -----------------third----------------------
   var add = document.getElementById("butpa3")
   add.addEventListener("click",function()
   
   {
      add = num+num+num;
     s.innerHTML=` ₹ ${add}.0`;
      console.log(s);
        
      
      
       
   })
   // ----------------------------fourth----------------
   var add = document.getElementById("butpa4")
   add.addEventListener("click",function()
   
   {
      add = num+num+num+num;
     s.innerHTML=` ₹ ${add}.0`;
      console.log(s);
        
      
      
       
   })
   // --------------------five th---------------------
   var add = document.getElementById("butpa5")
   add.addEventListener("click",function()
   
   {
      add = num+num+num+num+num;
     s.innerHTML=` ₹ ${add}.0`;
      console.log(s);
       
   })
   
   
   
   var a2 = document.getElementById("a2")
   a2.addEventListener("click",function(val){
     var ad = add;
    
     var paymoney = document.getElementById("pay_money")
     paymoney.textContent = ` Total amount is here: ${ad}`
     var order_placed = document.getElementById("order_placed")
     order_placed.style.display="block";
     val.stopPropagation();
   
   })
   
   
   
   
   // ----------------six---------------------
   var add = document.getElementById("butpa6")
   add.addEventListener("click",function()
   
   {
     var add = num+num+num+num+num+num;
     s.innerHTML=` ₹ ${add}.0`;
      console.log(s);
        
      
      
       
   })
   // -------------------add to cart-------------------
   
   
   // var res=document.getElementById("para")
   // // -------------------------result----------------
   
   
   // var aparts = document.getElementById("a2")
   // console.log(aparts);
   // aparts.addEventListener("click",function(){
      
      
   //     // res.innerHTML=`the result is: ${add}`;
   //     var div2= document.getElementById("div2");
   //     console.log(div2);
   //     div2.style.display="block";
       
   // })
   
   
   var butpa = document.getElementById("butpa1")
   
   butpa.addEventListener("click",function(){
     
   })
   
   