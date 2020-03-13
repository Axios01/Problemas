function interes(){
    var x1=document.formulario.obo.value;
    var x2=document.formulario.obo2.value;
    var x3=document.formulario.obo3.value;

    if ((x1||x2||x3)=="") {
        alert("No puedes dejar ningún campo en blanco");
        return false;
    }
    if ((isNaN(x1||x2||x3))) {
        alert("Formato inválido");
        return false;
    } 
     if (((x1.length||x2.length||x3.length))>10) {
        alert("No puedes ingresar números tan grandes");
        return false;
    } 
        
    var n1=parseFloat(x1);
    var n2=parseFloat(x2);
    var n3=parseFloat(x3);

    res=Math.max(n1,n2,n3);
    
    
    if (isNaN(res)) {
            alert("Formato inválido")  
            return false
    }

    document.formulario.cantidad.value=res

    return false;
}
function validarn(e){

    var teclado=(document.all)?e.keyCode:e.which;
    var patron=/[0-9\d -.]/;
    var tec=String.fromCharCode(teclado)
    if (patron.test(tec)){
        var con=document.getElementById("obo").value;
        var coz=document.getElementById("obo").value;
        con=con+tec;
        coz=coz+tec;
        var cont=0;
        var cont2=0;
       
for ( i= 0; i < con.length; i++) {
    if (con.charAt(i)==="."){
        cont++
    }
}
for ( i= 0; i < con.length; i++) {
     if (coz.charAt(i)==="-"){
        cont2++
    }
}
if ((cont||cont2)>1){
    return false

}
    }
    else {
        return false;
    }
  
}
function validarn2(e){

    var teclado=(document.all)?e.keyCode:e.which;
    var patron=/[0-9\d -.]/;
    var tec=String.fromCharCode(teclado)
    if (patron.test(tec)){
        var con=document.getElementById("obo2").value;
        var coz=document.getElementById("obo2").value;
        con=con+tec;
        coz=coz+tec;
        var cont=0;
        var cont2=0;
       
for ( i= 0; i < con.length; i++) {
    if (con.charAt(i)==="."){
        cont++
    }
}
for ( i= 0; i < con.length; i++) {
     if (coz.charAt(i)==="-"){
        cont2++
    }
}
if ((cont||cont2)>1){
    return false

}
    }
    else {
        return false;
    }
  
}
function validarn3(e){

    var teclado=(document.all)?e.keyCode:e.which;
    var patron=/[0-9\d -.]/;
    var tec=String.fromCharCode(teclado)
    if (patron.test(tec)){
        var con=document.getElementById("obo3").value;
        var coz=document.getElementById("obo3").value;
        con=con+tec;
        coz=coz+tec;
        var cont=0;
        var cont2=0;
       
for ( i= 0; i < con.length; i++) {
    if (con.charAt(i)==="."){
        cont++
    }
}
for ( i= 0; i < con.length; i++) {
     if (coz.charAt(i)==="-"){
        cont2++
    }
}
if ((cont||cont2)>1){
    return false

}
    }
    else {
        return false;
    }
  
}