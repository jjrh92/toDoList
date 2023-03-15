// Inicio

// Elementos Basicos del DOM.

const cuadroBlanco = document.getElementById ("cuadroBlanco");
const boton_agregar_tarea = document.getElementById ("boton_agregar_tarea");
const texto_agregar_tarea = document.getElementById ("texto_agregar_tarea");

// Esta funcion comprueba que el contenido del input no se encuentre vacio. En caso de que este vacio el usuario recibira un mensaje de error.

function VerificarTarea () {

    if (texto_agregar_tarea.value == "" || texto_agregar_tarea.value == " " || texto_agregar_tarea.value == null ) {

        Swal.fire ({

            toast: "true",
            position: "center",
            icon: "error",
            color: "green",
            text: "El nombre de la tarea no puede estar vacio.",
            showConfirmButton: false,
            timer: 1500,

        });

    }

    else if (texto_agregar_tarea.value !== "" || texto_agregar_tarea.value !== " " || texto_agregar_tarea.value !== null ) {

        Swal.fire ({

            toast: "true",
            position: "center",
            icon: "success",
            color: "green",
            text: "Tarea Agregada satisfactoriamente.",
            showConfirmButton: false,
            timer: 1500,

        });

        CrearTarea ();

    }

}

// Esta funcion agrega la tarea a la lista en caso de que se apruebe la validacion

function CrearTarea () {

    // La funcion comienza creando un div y definiendo atributos basicos como clases de bootstrap para definir estilos, margenes, alineacion, padding y gap entre elementos hijos.

    const nuevaTarea = document.createElement ("div");
    nuevaTarea.setAttribute ("class", "mb-3 d-flex align-content-center justify-content-center px-3 gap-2");

    // El primer elemento hijo es del tipo input, definimos atributos y estilos.

    const nuevoInput = document.createElement ("input");
    nuevoInput.setAttribute ("type", "text");
    nuevoInput.setAttribute ("class", "form-control border-1 border-success text-success bg-white");
    nuevoInput.setAttribute ("placeholder", texto_agregar_tarea.value);
    nuevoInput.setAttribute ("autocomplete", "off");
    nuevoInput.disabled = true;

    // El segundo elemento hijo es el boton de eliminar tarea el cual por ahora definiremos visualmente sin incorporar logica alguna todavia.

    const boton_eliminar_tarea = document.createElement ("button");
    boton_eliminar_tarea.setAttribute ("id", "boton_eliminar_tarea");
    boton_eliminar_tarea.setAttribute ("class", "btn btn-success bi bi-trash-fill");
    boton_eliminar_tarea.innerText = "Eliminar";

    // Habiendo definido los hijos, se agregan todos al contenedor padre, luego se resetea el valor del input quedando en blanco nuevamente.

    cuadroBlanco.append (nuevaTarea);
    nuevaTarea.append (nuevoInput);
    nuevaTarea.append (boton_eliminar_tarea);
    texto_agregar_tarea.value = "";

    // Dentro de la misma Funcion para agregar tareas vinculamos el boton de eliminar (que agregamos previamente) con la logica de eliminar dicha tarea.

    boton_eliminar_tarea.addEventListener ("click", () => {

        Swal.fire ({

            toast: "true",
            position: "center",
            icon: "warning",
            color: "green",
            text: "Tarea Eliminada satisfactoriamente.",
            showConfirmButton: false,
            timer: 1500,

        });

        nuevaTarea.remove ();

    });

};

// Este event listener vincula toda la logica definida anteriormente al evento click (cuando el usuario agrega una tarea).
// Primero se verifica que el campo ingresado sea valido, y si es asi se agrega la tarea (permitiendo ademas su eliminacion posterior).
// En caso contrario donde la verificacion no sea satisfactoria se muestra un mensaje de error al usuario.

boton_agregar_tarea.addEventListener ("click", VerificarTarea);

// V-1.0.0 - Julio Reyes - 15MAR2023.

// Fin