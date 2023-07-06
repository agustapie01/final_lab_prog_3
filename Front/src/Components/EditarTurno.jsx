import  Axios  from 'axios'
import  { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import imagenFondo from "../assets/imagenFondo.jpg"
import { Header, Footer } from '../Constants';
import Button from 'react-bootstrap/Button';

  export const EditarTurno = () => {

    let {id} = useParams()
    let navigate = useNavigate()

    const [idPaciente, setIdPaciente] = useState(0)
    const [idDentista, setIdDentista] = useState(0)
    const [fechaTurno, setFechaTurno] = useState("")
    const [numOrden, setNumOrden] = useState("")
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

    const getTurno = () =>{
        const url = "http://localhost:8000/turno/"
        Axios.get(url+id).then((response) => {
          setIdPaciente(response.data[0].idPaciente)
          setIdDentista(response.data[0].idDentista)
          setFechaTurno(response.data[0].fechaTurno.slice(0,10))
          setNumOrden(response.data[0].numOrden)
        })
      }

      const handleEditar = () => {
        const url = "http://localhost:8000/turno/editar/"
        Axios.put(url+id,{
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
            getTurno()
              getDentista()
              getPacientes()
        }, [])

  return (
      <div style={{ backgroundImage: `url(${imagenFondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Header/>
    <div className="container p-2">
    <>
    <Form.Group>
    <Form.Label>Seleccione el paciente</Form.Label>
        <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example" onClick={(e) => setIdPaciente(e.target.value)}>
        <option disabled defaultValue={0} >Seleccione una opcion</option>
          { pacientes.map(paciente => {
            return(
              <option key={paciente.id_Pacientes} value={paciente.id_Pacientes}>{paciente.apellido}</option>)
          })
        }
        </Form.Select>        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha De Turno</Form.Label>
          <Form.Control value={fechaTurno} type='text' maxLength={10} placeholder="fechaTurno" onChange={(e) => setFechaTurno(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numero De Orden</Form.Label>
          <Form.Control value={numOrden} placeholder="numOrden" onChange={(e) => setNumOrden(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Seleccione el dentista</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e) => setIdDentista(e.target.value)}>
            <option disabled  defaultValue={0}  >Seleccione una opcion</option>
            { dentista.map(dentista => {
            return(
              <option key={dentista.id_Dentista} value={dentista.id_Dentista}>{dentista.apellidoDent}</option>)
          })
          }
        </Form.Select>
        </Form.Group>
        
          
          <Button variant='success' onClick={handleEditar}>Agregar</Button>
          
    </Form.Group>
    </>
    </div>
    <Footer/>
      </div>

  );
};

export default EditarTurno;