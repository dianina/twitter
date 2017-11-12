 //Formulario contador

var contenido_textarea = "" 
var num_caracteres_permitidos = 140 

function valida_longitud(){ 
   //se define extensión de caracteres por longitud
   num_caracteres = document.forms[0].texto.value.length 

   if (num_caracteres > num_caracteres_permitidos){ 
      document.forms[0].texto.value = contenido_textarea 
   }else{ 
      contenido_textarea = document.forms[0].texto.value 
   } 

   if (num_caracteres >= num_caracteres_permitidos){ 
      //al llegar a 140 caracteres, tomar letra color rojo
      document.forms[0].caracteres.style.color="#ff0000"; 
   }else{ 
      document.forms[0].caracteres.style.color="#000000"; 
   } 

   cuenta() 
} 
function cuenta(){ 
   document.forms[0].caracteres.value=document.forms[0].texto.value.length 
}






// Botón para twitear
//function operacion(){
//if(x==0){
  //solo entra aquí cuando x sea cero
  //frames.mi_iframe.document.getElementById("textarea").value=document.getElementById("texto").value;
  //x++; 
// variable cambia a uno despues de copiar el texto.
//} else {
//solo entra aquí cuando x sea uno
  //document.formulario.submit(); 
//aquí envia el form.
//}
//}
