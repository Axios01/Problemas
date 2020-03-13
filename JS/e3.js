function interes(){
    var valor=document.formulario.cant.value;
    var pago=document.formulario.pagoH.value;

    if ((valor||pago)=="") {
        alert("No puedes dejar ningún campo en blanco");
        return false;
    }
    if (isNaN(valor||pago)) {
        alert("Formato inválido");
        return false;
    } 
     if (((valor.length||pago.length))>10) {
        alert("No puedes ingresar números tan grandes");
        return false;
    } 

    var pa=parseFloat(pago);
    var result=parseFloat(valor);
    var n=0;

    if (result<=40) {
      n=pa*result;
    } else if ((result>40) & (result<=48)) {
       pa=pa*2;
       n=pa*result; 
    } else {
        pa=pa*3;
        n=pa*result;
    }

    if (isNaN(n)) {
            alert("Formato inválido")  
            return false
    }

    document.formulario.cantidad.value=n;
    return false; 
}

function validarn(e){

    var teclado=(document.all)?e.keyCode:e.which;
    var patron=/[0-9\d .]/;
    var tec=String.fromCharCode(teclado)
    if (patron.test(tec)){
        var con=document.getElementById("cant").value
        con=con+tec
        var cont=0
       
for ( i= 0; i < con.length; i++) {
    if (con.charAt(i)==="."){
        cont++
    }
}
if (cont>1){
    return false

}
    }
    else {
        return false;
    }
  
}
function validarn2(e){

    var teclado=(document.all)?e.keyCode:e.which;
    var patron=/[0-9\d .]/;
    var tec=String.fromCharCode(teclado)
    if (patron.test(tec)){
        var con=document.getElementById("cant").value
        con=con+tec
        var cont=0
       
for ( i= 0; i < con.length; i++) {
    if (con.charAt(i)==="."){
        cont++
    }
}
if (cont>1){
    return false

}
    }
    else {
        return false;
    }
  
}