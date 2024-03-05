import React from "react"
import {Formulario} from "./Components/Formulario";
import {Header} from "./Components/Header";
import {ListadoPaciente} from "./Components/ListadoPaciente";

export const App = () => {
  return (
    <div className="container mx-auto mt-20">
      <Header/>
          <div className="mt-12 md:flex"> 
            <Formulario/>
            <ListadoPaciente/>
          </div>
     
    </div>
  )
}


