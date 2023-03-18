// Inicio

// Elementos Basicos del DOM.

const cuadroBlanco = document.getElementById ("cuadroBlanco");
const boton_agregar_tarea = document.getElementById ("boton_agregar_tarea");
const texto_agregar_tarea = document.getElementById ("texto_agregar_tarea");
let tareasEncontradas = [];

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

// Declaramos una funcion para restaurar las tareas del localstorage. Soporta maximo 10 tareas.

window.addEventListener ("load", (event) => {

    localStorage.removeItem ("loglevel", "SILENT");

    let t1 = localStorage.getItem ("Tarea1");
    if (t1 !== null) {

        tareasEncontradas.push (t1);

    }

    let t2 = localStorage.getItem ("Tarea2");
    if (t2 !== null) {

        tareasEncontradas.push (t2);

    }

    let t3 = localStorage.getItem ("Tarea3");
    if (t3 !== null) {

        tareasEncontradas.push (t3);

    }

    let t4 = localStorage.getItem ("Tarea4");
    if (t4 !== null) {

        tareasEncontradas.push (t4);

    }

    let t5 = localStorage.getItem ("Tarea5");
    if (t5 !== null) {

        tareasEncontradas.push (t5);

    }

    let t6 = localStorage.getItem ("Tarea6");
    if (t6 !== null) {

        tareasEncontradas.push (t6);

    }


    let t7 = localStorage.getItem ("Tarea7");
    if (t7 !== null) {

        tareasEncontradas.push (t7);

    }

    let t8 = localStorage.getItem ("Tarea8");
    if (t8 !== null) {

        tareasEncontradas.push (t8);

    }

    let t9 = localStorage.getItem ("Tarea9");
    if (t9 !== null) {

        tareasEncontradas.push (t9);

    }

    let t10 = localStorage.getItem ("Tarea10");
    if (t10 !== null) {

        tareasEncontradas.push (t10);

    }

    tareasEncontradas.forEach (CrearTareasEncontradas);

    if (tareasEncontradas.length > 0) {

        pintarBotonEliminarTodas ();

    }

    function pintarBotonEliminarTodas () {

        const BotonEliminarTodas = document.createElement ("button");
        BotonEliminarTodas.setAttribute ("id", "boton_eliminar_tarea");
        BotonEliminarTodas.setAttribute ("class", "btn btn-success bi bi-trash-fill mx-3 py-3");
        BotonEliminarTodas.innerText = "Eliminar Todas y Reiniciar...";
        cuadroBlanco.append (BotonEliminarTodas);

        BotonEliminarTodas.addEventListener ("click", () => {

            alert ("Se actualizara esta pagina.");
            localStorage.clear ();
            location.reload ();

        });

    }



    function CrearTareasEncontradas (tareas) {

        const nuevaTarea = document.createElement ("div");
        nuevaTarea.setAttribute ("class", "mb-3 d-flex align-content-center justify-content-center px-3 gap-2");
        const nuevoInput = document.createElement ("input");
        nuevoInput.setAttribute ("type", "text");
        nuevoInput.setAttribute ("class", "form-control border-1 border-success text-success bg-white");
        nuevoInput.setAttribute ("placeholder", `${tareas}`);
        nuevoInput.setAttribute ("autocomplete", "off");
        nuevoInput.disabled = true;

        cuadroBlanco.append (nuevaTarea);
        nuevaTarea.append (nuevoInput);

    }

});

// Esta variable guarda el valor que se va a incrementar en la proxima funcion de manera que cada tarea tenga un numero identificador.

let tareaNumero = 0;

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

    // Seccion de parametros para el local storage.

    tareaNumero += 1;
    let tareaIngresada = "Tarea" +tareaNumero;
    localStorage.setItem (tareaIngresada, texto_agregar_tarea.value);

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
        localStorage.removeItem (tareaIngresada);

    });

};

// Este event listener vincula toda la logica definida anteriormente al evento click (cuando el usuario agrega una tarea).
// Primero se verifica que el campo ingresado sea valido, y si es asi se agrega la tarea (permitiendo ademas su eliminacion posterior).
// En caso contrario donde la verificacion no sea satisfactoria se muestra un mensaje de error al usuario.

boton_agregar_tarea.addEventListener ("click", VerificarTarea);

// V-1.0.0 - Julio Reyes - 15MAR2023.
// V-2.0.0 - Julio Reyes - 18MAR2023.

// Fin