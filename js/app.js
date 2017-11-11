//-------------Formulario contador
        function count_down(obj) {
             
            var element = document.getElementById('count2');
             
            element.innerHTML = 140 - obj.value.length;
             
            if (140 - obj.value.length < 140) {
                element.style.color = 'red';
            
            } else {
                element.style.color = 'grey';
            }
        }

  function add_comments(){
  //tomar comentarios
    var comentarios = document.getElementById('comentario').value;
  //limpiar....
  document.getElementById('comment').value = '';

  //contenedor que esta en el html
  var cont_comm = document.getElementById('cont_comm');

  //creamos el div que contiene cada comentario
  var newComments = document.createElement('div');

  //validar que textarea tenga comentarios
  if(comments.length == 0 || comments == null) {
    alert('Por favor ingresar un mensaje');
    return false;
  }


/*-------------adicionales de los caracteres

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
   	///al llegar a 140 caracteres, tomar letra color rojo
      document.forms[0].caracteres.style.color="#ff0000"; 
   }else{ 
      document.forms[0].caracteres.style.color="#000000"; 
   } 

   cuenta() 
} 

//funcion contador

function cuenta(){ 
   document.forms[0].caracteres.value=document.forms[0].texto.value.length 
} 

//Boton para insertar commentarios*/
