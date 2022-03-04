

function calcularPrecioConDescuento (precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento ;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

let couponsList = [{"couponName":"sara15","couponDiscount": 15},{"couponName":"sara15","couponDiscount": 15},"sara30"]

function clickButtonDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputdiscount = document.getElementById("InputDiscount");
    const discountValue = inputdiscount.value;
    var porcentualDiscount = ""

    for (let index = 0; index < couponsList.length; index++) {
        if (couponsList[index].couponName == discountValue) {
            porcentualDiscount = couponsList[index].couponDiscount
        } 
        
    }

    const precioConDescuento= calcularPrecioConDescuento(priceValue,porcentualDiscount);

    const resultPrice=document.getElementById("resultPrice");
    resultPrice.innerText="El precio con descuento es " + precioConDescuento;
} 

