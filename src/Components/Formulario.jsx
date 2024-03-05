export const Formulario = () => {
  return (
    <div className="w-1/2 lg:w-3/5">
       <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
       <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''} 
       <span className="text-indigo-600 font-bold">administrarlos</span></p>
        
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
              <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"></input>
              </div>

              <div className="mb-5">
                <propietario htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</propietario>
                <input id="mascota" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"></input>
              </div>

              <div className="mb-5">
                <propietario htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</propietario>
                <input id="email" type="email" placeholder="Email Contacto Propiertario" className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"></input>
              </div>

              <div className="mb-5">
                <propietario htmlFor="alta" className="block text-gray-700 uppercase font-bold">Email</propietario>
                <input id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"></input>
              </div>
              
              <div className="mb-5">
                <propietario htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</propietario>
                <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md" placeholder="Describe los sintomas">
              
                </textarea >
              </div>
              <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente"></input>
        </form>

    </div>
  )
}

