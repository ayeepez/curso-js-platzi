
/*const precioOriginal=130 ;
const descuento = 18;

const porcentajePrecioConDescuento= 100 - descuento ;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100 ; 
 console.log ({
    precioOriginal,
    descuento,
    precioOriginal,
    precioConDescuento,
});
*/ 

function calcularPrecioConDescuento (precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento ;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function clickButtonDiscount ()

{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputdiscount = document.getElementById("InputDiscount");
    const discountValue = inputdiscount.value;

    const precioConDescuento= calcularPrecioConDescuento(priceValue,discountValue);

    const resultPrice=document.getElementById("resultPrice");
    resultPrice.innerText="El precio con descuento es " + precioConDescuento;
}

