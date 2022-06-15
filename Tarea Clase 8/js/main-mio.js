const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
  


const ciudad = $form.ciudad.value; 
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value; 



function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }

    if(nombre.length >=50){
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras'
    }


    return '';
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){ // tambien puede ser (ciudad === '')
        return 'El campo ciudad no puede estar vacio';
    }
    return '';
}
    

function validarDescricionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return 'El campo descricion no puede estar vacio';
    }
    if(descripcionRegalo.length >=100){
        return 'Este campo debe contener menos de 100 caracteres';
    }

    if(!/^[a-z 0-9]+$/i.test(descripcionRegalo)){ // !/^[a-z0-9,\._ ]+$/i.test(descripcionRegalo), para el caso que quiseramos poner la codicion de comas, puntos guines y espacios
        return 'El campo descripcion solo puede tener numeros y letras'
    }

    return '';
}

validarNombre(nombre);
validarCiudad(ciudad);
validarDescricionRegalo(descripcionRegalo);

function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa");
   
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescricionRegalo(descripcionRegalo);


    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,
    };

    

    const esExito = manejarErrores(errores) === 0;

    if (esExito){
        document.querySelector('#carta-a-santa').className = 'oculto'; // para ocultar el formulario
        document.querySelector('#exito').className = ''; // para mostrar ek mensaje de exit
        redirigirPagina();
   
    }

    event.preventDefault();

}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    eliminarErrores();

    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if(error){ 
            cantidadErrores++;
            $form[key].className = "error" // form en la llave. funciona solo si la llave tiene el mismo nombre que el atributo name que esta recorriendo
            
            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);
        
        }else{
            
            $form[key].className = "";
                      
        }
    });

        return cantidadErrores;
    }
    

    function redirigirPagina (){

        tiempoRecarga = window.setTimeout(nuevaPagina, 5000);
        function nuevaPagina(){
            location.assign("wishlist.html");
        }
    }
   
    function eliminarErrores() {
        const listaErrores = document.querySelector('#errores');
        while (listaErrores.hasChildNodes()) {
          listaErrores.removeChild(listaErrores.firstChild);
        }

    }    

    $form.onsubmit = validarFormulario;
   

