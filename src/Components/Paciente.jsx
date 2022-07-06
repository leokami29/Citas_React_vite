
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, Propietario, Email, Alta, Sintomas, id} = paciente 

    const handleELiminar = () => {
        const respuesta = confirm("Deseas eliminar este paciente")
        
        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className=" mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl" >
            <p className=" font-bold mb-3 uppercase text-gray-700">Nombre: {""}
                <span className=" font-normal normal-case">{nombre}</span>
            </p>

            <p className=" font-bold mb-3 uppercase text-gray-700">Propetario: {""}
                <span className=" font-normal normal-case">{Propietario}</span>
            </p>

            <p className=" font-bold mb-3 uppercase text-gray-700">Email: {""}
                <span className=" font-normal normal-case">{Email}</span>
            </p>

            <p className=" font-bold mb-3 uppercase text-gray-700">Fecha Alta: {""}
                <span className=" font-normal normal-case">{Alta}</span>
            </p>

            <p className=" font-bold mb-3 uppercase text-gray-700">Sintomas: {""}
                <span className=" font-normal normal-case">{Sintomas}</span>
            </p>

            <div className=" flex justify-between mt-10">
                <button 
                    type="button"
                    className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button 
                    type="button"
                    className=" py-2 px-10 bg-red-600 hover:bg-red-900 text-white font-bold uppercase rounded-lg"
                    onClick={handleELiminar}
                >Eliminar</button>
            </div>

        </div>
    )
}

export default Paciente