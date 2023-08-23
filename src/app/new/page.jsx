"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage ({params}) {
  
  const router = useRouter ();
  const [title, setTitle] = useState ("");
  const [description, setDescription] = useState ("");

  useEffect(() => {

    if (params.id) {

      fetch (`/api/tasks/${params.id}`)
      .then (res => res.json)
      .then (data => {

        setTitle (data.title);
        setDescription (data.description);

      });

    }

  },[]);

  const handleSubmit = async (e) => {

    e.preventDefault ()

    if (params.id) {

      const res = await fetch (`/api/tasks/${params.id}`, {
      
        method: "PUT",
        body: JSON.stringify({title, description}),
        headers: {
          "Content-Type": "application/json",
        },
      
      })

      const data = await res.json();

    }

    else {

      const res = await fetch ("api/tasks", {

        method: "POST",
        body: JSON.stringify ({title, description}),
  
        headers: {
  
          "Content-Type": "application/json",
  
        },
  
      })
  
      const data = await res.json ();

    }
    router.refresh ();
    router.push ("/");

  };

  return (

    <div className="h-screen flex justify-center items-center">
      
      <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2" onSubmit={handleSubmit}>

        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input id="title" type="text" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Escribe aca el titulo de la tarea..." onChange={(e) => setTitle (e.target.value)} value={title}/>

        <label htmlFor="description" className="font-bold text-sm">
        Descripción de la tarea
        </label>
        <textarea id="description" rows="3" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Detalles de la tarea a crear." onChange={(e) => setDescription(e.target.value)} value={description}></textarea>

        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ok</button>

          {
            params.id && (

              <button onClick={async () => {

                const res = await fetch (`/api/tasks/${params.id}`, {

                  method: "DELETE",

                })

                const data = await res.json();
                router.refresh ();
                router.push ("/")

              }} 
              
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto">Eliminar</button>
              
            )
          }
        </div>

      </form>

    </div>

  )

}

export default NewPage