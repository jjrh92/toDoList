// Inicio

// Elementos Basicos del DOM.

const cuadroBlanco = document.getElementById ("cuadroBlanco");
const boton_agregar_tarea = document.getElementById ("boton_agregar_tarea");
const texto_agregar_tarea = document.getElementById ("texto_agregar_tarea");

// Esta funcion comprueba que el contenido del input no se encuentre vacio. En caso de que este vacio el usuario recibira un mensaje de error.

function VerificarTarea () {

    if (texto_agregar_tarea.value == "" || texto_agregar_tarea.value == " " || texto_agregar_tarea.value == null ) {

        alert ("El nombre de la tarea no puede estar en blanco.")

    }

    else if (texto_agregar_tarea.value !== "" || texto_agregar_tarea.value !== " " || texto_agregar_tarea.value !== null ) {

        alert ("Tarea Agregada satisfactoriamente.")
        CrearTarea ();

    }

}

// Esta funcion agrega la tarea a la lista en caso de que se apruebe la validacion

function CrearTarea () {

    const nuevaTarea = document.createElement ("div");
    nuevaTarea.setAttribute ("class", "mb-3 d-flex align-content-center justify-content-center px-3 gap-2");

    const nuevoInput = document.createElement ("input");

    nuevoInput.setAttribute ("type", "text");
    nuevoInput.setAttribute ("class", "form-control border-1 border-success text-success bg-white");
    nuevoInput.setAttribute ("placeholder", texto_agregar_tarea.value);
    nuevoInput.setAttribute ("autocomplete", "off");
    nuevoInput.disabled = true;

    const botonEliminar = document.createElement ("button");
    botonEliminar.setAttribute ("class", "btn btn-success bi bi-trash-fill");
    botonEliminar.innerText = "Eliminar";

    cuadroBlanco.append (nuevaTarea);
    nuevaTarea.append (nuevoInput);
    nuevaTarea.append (botonEliminar);
    texto_agregar_tarea.value = "";

};

boton_agregar_tarea.addEventListener ("click", VerificarTarea);

// Fin