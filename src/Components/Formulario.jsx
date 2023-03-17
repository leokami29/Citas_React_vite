import {useState, useEffect} from "react"
import Error from "./Error";

export const Formulario = ({Pacientes, setPacientes, Paciente, setPaciente}) => {
    
    // Primer State
    const [nombre, setNombre] = useState('');
    const [Propietario, setPropietario] = useState('');
    const [Email, setEmail] = useState('');
    const [Alta, setAlta] = useState('');
    const [Sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(Paciente).length > 0){
            setNombre(Paciente.nombre)
            setPropietario(Paciente.Propietario)
            setEmail(Paciente.Email)
            setAlta(Paciente.Alta)
            setSintomas(Paciente.Sintomas)
        }
        
    }, [Paciente]);

    const generarID = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }
    
    const handleSubmit =  (e) => {
        e.preventDefault()

        //Validacion del formulario
        if ([ nombre, Propietario, Email, Alta, Sintomas].includes('')) {

            setError(true)
            return ;
    
        }

        setError(false)

        //Obejto de Pacientes
        const objPaciente = {
            nombre, 
            Propietario, 
            Email, 
            Alta, 
            Sintomas
        }

        if(Paciente.id){
            //Editabdo el registro
            objPaciente.id = Paciente.id;

            const pacientesActualizado = Pacientes.map(pacienteState => pacienteState.id === Paciente.id ? objPaciente : pacienteState )
            setPaciente({})

            setPacientes(pacientesActualizado)
            
        }else {
            //Nuevo Registro
            objPaciente.id = generarID();
            setPacientes([...Pacientes, objPaciente]);
        }
        

         //REinizar el forrmulario
         setNombre("")
         setEmail("")
         setPropietario("")
         setAlta("")
         setSintomas("")
    }

    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-5">
            <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {""}
                <span className=" text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form   onSubmit={handleSubmit} 
                    className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                    {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                    
                <div className=" mb-5">
                    <label htmlFor="mascota" className=" block text-gray-700 uppercase font-bold" >
                        Nombre Mascota</label>
                    <input  
                            id="mascota" 
                            type="text"
                            placeholder="Nombre de la Mascota" 
                            className=" border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md"
                            value={nombre}
                            onChange = {(e) => setNombre(e.target.value)} 
                             />
                </div>
                <div className=" mb-5">
                    <label htmlFor="Propietario" className=" block text-gray-700 uppercase font-bold" >
                        Nombre Propietario</label>
                    <input 
                            id="Propietario"
                            type="text"
                            placeholder="Nombre del Propietario" 
                            className=" border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md" 
                            value={Propietario}
                            onChange = {(e) => setPropietario(e.target.value)} 
                            />
                </div>
                <div className=" mb-5">
                    <label htmlFor="Email" className=" block text-gray-700 uppercase font-bold" >
                    Email</label>
                    <input 
                            id="Email" 
                            type="email" 
                            placeholder="Email Contacto Propietario" 
                            className=" border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md" 
                            value={Email}
                            onChange = {(e) => setEmail(e.target.value)} />
                </div>
                <div className=" mb-5">
                    <label htmlFor="Alta" className=" block text-gray-700 uppercase font-bold" >
                    Alta</label>
                    <input 
                            id="Alta" 
                            type="date"
                            className=" border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md"
                            value={Alta}
                            onChange = {(e) => setAlta(e.target.value)}/>
                </div>
                <div className=" mb-5">
                    <label htmlFor="Sintomas" className=" block text-gray-700 uppercase font-bold" >
                    Sintomas</label>
                    <textarea 
                            id="Sintomas" 
                            className=" border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md" 
                            placeholder="Describe los sintomas"
                            value={Sintomas}
                            onChange = {(e) => setSintomas(e.target.value)}/>
                </div>

                <input 
                            type="submit"
                            id="Agregar" 
                            value={Paciente.id ? "Editar Paciente" : "Agregar Paciente" }
                            className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all" />
            </form>
        </div>
    )
}
