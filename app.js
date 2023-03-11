// Inicio

const tarjeta = document.getElementById ("tarjeta");
const boton_agregar_tarea = document.getElementById ("boton_agregar_tarea");
const texto_agregar_tarea = document.getElementById ("texto_agregar_tarea");

function CrearTarea () {

    console.log (texto_agregar_tarea.value);
    alert (texto_agregar_tarea.value);
    texto_agregar_tarea.value = "";
    

};

boton_agregar_tarea.addEventListener ("click", CrearTarea);

// Fin