//pequeño script para mostrar el toast y para setear el boton de enviar si todos los valores de los inputs son correctos
//variables
let validoNombre= false;
let validoComensales= false;
let validoFecha= false;
let validoAcepto= false;
//funciones
function showToast () {
    Toastify({
        text: "La reserva se ha realizado correctamente",
        duration: 3000,
        close: true,
        gravity:"bottom",
        position:"right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    document.querySelector('#form1').reset();
    document.querySelector("#boton1").disabled = true;
}
function cambios(elemento){ //done
    switch(elemento.id){
        case 'nombre':
            validoNombre= elemento.checkValidity();
            break;
        case 'comensales': 
            validoComensales= elemento.checkValidity();
            break;
        case 'fecha':
            validoFecha= elemento.checkValidity();
            break;
        case 'acepto': 
            validoAcepto= elemento.checked;
            break;
        default: //nada
    }
    if( validoNombre && validoComensales && validoFecha && validoAcepto){
        document.querySelector("#boton1").disabled = false;
    }else{
        document.querySelector("#boton1").disabled = true;
    }
}
//ejercucion
document.querySelector('#nombre').addEventListener('change', (event) => {
    cambios(document.querySelector('#nombre'));
});
document.querySelector('#comensales').addEventListener('change', (event) => {
    cambios(document.querySelector('#comensales'));
});
document.querySelector('#fecha').addEventListener('change', (event) => {
    cambios(document.querySelector('#fecha'));
});
document.querySelector('#acepto').addEventListener('change', (event) => {
    cambios(document.querySelector('#acepto'));
});