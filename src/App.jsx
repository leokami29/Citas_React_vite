import { useState, useEffect } from "react";
import { Formulario } from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoPacientes from "./Components/ListadoPacientes";



function App() {

  const [Pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('Pacientes')) ?? []);
  const [Paciente, setPaciente] = useState({});


  useEffect(() => {
    localStorage.setItem('Pacientes', JSON.stringify(Pacientes))
  }, [Pacientes]);


  const eliminarPaciente = (id) => {
    const pacientesA = Pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesA);
  }

  return (
    <div
      className="container mx-auto mt-20">
      <Header 
      />

      <div className=" mt-12 md:flex ">
        <Formulario
        Pacientes = {Pacientes}//props
        setPacientes ={setPacientes}//props
        setPaciente ={setPaciente}//props
        Paciente ={Paciente}//props
        />
        <ListadoPacientes 
        Pacientes={Pacientes}//props
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>


    </div>
  )
}

export default App
