function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ==='Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre("Nicolas") === '',
    'Validar nombre fallo con un nombre valido',
  );

  console.assert(
    validarNombre("Nicolas121324121") === "El campo nombre solo acepta letras",
    "Validar nombre no valido que el nombre solo tenga letras"
  );

}



function probarValidarCiudad(){
  console.assert(
    validarCiudad("Buenos Aires") === '',
    'Validar ciudad fallo con un nombre de ciudad valido'
  );

  console.assert(
    validarCiudad('') === 'El campo ciudad no puede estar vacio',
    'validar cuidad no valido que la descripcion de la ciudad es vacia'
  )
 
}


function ProbarValidarDescricionRegalo() {
  console.assert(
      validarDescricionRegalo('') === 'El campo descricion no puede estar vacio',
      'Validar descripcion regalo no validó que la descricion no sea vacío',
  );

  console.assert(
      validarDescricionRegalo('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ==='Este campo debe contener menos de 100 caracteres',
      'Validar descrpicion no validó que la descripcion sea menor a 100 caracteres',
  );

  console.assert(
    validarDescricionRegalo("Regalos")==='',
    'validar descripcion fallo con una descripcion valida'
  );

  console.assert(
    validarDescricionRegalo(".,.,.,.,") === 'El campo descripcion solo puede tener numeros y letras',
    'la funcion validar descripcion regalo no valido que fueran solo numeros y letras'
  );
}


probarValidarNombre();
probarValidarCiudad();
ProbarValidarDescricionRegalo();