import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import imagenFondo from "../assets/imagenFondo.jpg"
import { Button } from "react-bootstrap";



export const AgregarTurno = () => {

  let navigate = useNavigate()

  const [idPaciente, setIdPaciente] = useState(0)
  const [idDentista, setIdDentista] = useState(0)
  const [fechaTurno, setfechaTurno] = useState("")
  const [numOrden, setnumOrden] = useState("")
  // const [pacientes, setPacientes] = useState([])
  const [dentista, setDentista] = useState([])
  const [pacientes, setPacientes] = useState([])

  const getPacientes = () =>{
    const url = "http://localhost:8000/pacientes/"
    Axios.get(url).then((response) => {
      setPacientes(response.data)
    })
  }
  

  const getDentista = () =>{
    const url = "http://localhost:8000/dentista/"
    Axios.get(url).then((response) => {
      setDentista(response.data)
    })
  }

console.log(idDentista)
  const handleAgregar = () => {
    Axios.post("http://localhost:8000/turno/registrar",{
      idPaciente: idPaciente,
      fechaTurno: fechaTurno,
      numOrden: numOrden,
      idDentista: idDentista
    }).then(()=>{
      alert("Turno registrado.")
      navigate('/turno',{ replace: true })
    })
  }

  useEffect(() => {
    getDentista()
    getPacientes()
}, [])

  return (
    
    <div style={{ backgroundImage: `url(${imagenFondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Header/>
        <div className="container p-2">
        <>
        <Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Paciente</Form.Label>
              <Form.Select aria-label="Default select example" onClick={(e) => setIdPaciente(e.target.value)}>
            <option disabled defaultValue={0} >Seleccione una opcion</option>
              { pacientes.map(paciente => {
                return(
                  <option key={paciente.id_Pacientes} value={paciente.id_Pacientes}>{paciente.apellido}</option>)
              })
            }
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha De Turno</Form.Label>
              <Form.Control type="date" placeholder="fechaTurno" onChange={(e) => setfechaTurno(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numero De Orden</Form.Label>
              <Form.Control placeholder="numOrden" onChange={(e) => setnumOrden(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Dentista</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => setIdDentista(e.target.value)}>
            <option disabled  defaultValue={0}  >Seleccione una opcion</option>
              { dentista.map(dentista => {
                return(
                  <option key={dentista.id_Dentista} value={dentista.id_Dentista}>{dentista.apellidoDent}</option>)
              })
              }
            </Form.Select>
              <Button variant="success" onClick={handleAgregar}>Agregar</Button>
            </Form.Group>

        </Form.Group>
        </>
        </div>
        <Footer/>
    </div>
  );
};

export default AgregarTurno;
