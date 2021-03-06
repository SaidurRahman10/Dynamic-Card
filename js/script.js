function handelProductChange(product, isIncrease){
    
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
    let newProductCount  = productCount;


    if(isIncrease == true){
        newProductCount = productCount + 1;
    } 
    if(isIncrease == false && productCount > 0){
        newProductCount = productCount - 1;
    }
    
    productInput.value = newProductCount;
    let productTotal;
    if(product == "laptop"){
        productTotal = newProductCount * 245000;
    }
    

    else{
        productTotal = newProductCount * 145000;
    }

    document.getElementById(product+'-total').innerText = productTotal;

    handleCheckout();

}

function handleCheckout(){

    const laptopCount = document.getElementById('laptop-count').value;
    const phoneCount = document.getElementById('phone-count').value;

    const totalPrice = parseInt(laptopCount) * 245000 + parseInt(phoneCount) * 145000;
    document.getElementById('sub-total').innerText = totalPrice;

    const tax = Math.round(totalPrice  * 0.01);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = grandTotal;
    
}



function getItems(product){
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

function checkOut(){
    alert('Thanks For Purchasing from Us!')
    location.reload();
}