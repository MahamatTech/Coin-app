let totalvalue = 0;
let calcButton = document.getElementById("btnCalc");
calcButton.addEventListener("click",function(){
    let coinVal = document.getElementById("cboCoins").value;
    let coinQty = document.getElementById("txtQty").value;
    totalvalue = totalvalue + (coinVal * coinQty);

    document.getElementById("txtoutput").value = totalvalue; 
     alert(stashVal);
     alert(typeof(stashVal));
});



     
    
    

   
    
    
