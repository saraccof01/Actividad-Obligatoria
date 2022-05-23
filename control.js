var form=document.querySelector("form");
var usuario=document.getElementById("usuario");
var clave=document.getElementById("clave");

form.onsubmit=function(e){
    if(usuario.value===""||clave.value===""){
        e.preventDefault();
        alert("Completa ambos datos!")
    }
}
function usuarioArroba(e){
    if (usuario.value!="usu@rio"){
        e.preventDefault();
        alert("Recorda utilizar un '@' en el usuario!")
    }
}
form.addEventListener('submit',usuarioArroba);