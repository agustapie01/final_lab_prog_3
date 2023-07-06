import { useEffect, useState } from 'react'
import { Footer, Header } from '../Constants'
import {  Table } from 'react-bootstrap'
import axios from 'axios'


export const MostrarJoins = () => {
    const [array, setArray] = useState([])
    const [array2, setArray2] = useState([])

    const getJoin = () =>{
        axios.get("http://localhost:8000/join").then((resp)=>{
            setArray(resp.data)
            console.log(array)
        })
    }
    const getJoin2 = () =>{
      axios.get("http://localhost:8000/join/join").then((resp)=>{
        setArray2(resp.data)
          console.log(array)
      })
  }
    

    useEffect(() => {
        getJoin()
        getJoin2()
    }, [])
    
  return (

    <div>

        <>
            <Header/>

            <h2>Pacientes con Historial Clinico</h2>
            <Table striped bordered hover variant="dark" className=''>
          <thead className=''>
          <tr className=''>
            <th>Apellido Paciente</th>
            <th>Nombre Paciente</th>
            <th>Dni</th>
            <th>Fecha del turno</th>
            <th>Diagnostico</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {
          array.map((item)=>{
            return(
          <tr className='' key={item.id_Pacientes}>
            <td>{item.apellido}</td>
            <td>{item.nombre}</td>
            <td>{item.dni}</td>
            <td>{item.fecha.slice(0,10)}</td>
            <td>{item.diagnostico}</td>
            <td>{item.observaciones}</td>
            
          </tr>)
          })
          }
        </tbody>
      </Table>
      <br /><br /><br /><br />
    <h2>Pacientes con turno y su respectivo dentista</h2>
      <Table striped bordered hover variant="dark" className=''>
        <thead className=''>
          <tr className=''>
            <th>Apellido Paciente</th>
            <th>Nombre Paciente</th>
            <th>Dni Paciente</th>
            <th>Fecha del turno</th>
            <th>Apellido Dentista</th>
            <th>Nombre Dentista</th>
          </tr>
        </thead>
        <tbody>
          {
          array2.map((item)=>{
            return(
              <tr className='' key={item.id_Pacientes}>
            <td>{item.apellido}</td>
            <td>{item.nombre}</td>
            <td>{item.dni}</td>
            <td>{item.fechaTurno.slice(0,10)}</td>
            <td>{item.apellidoDent}</td>
            <td>{item.nombreDent}</td>
            
          </tr>)
          })
          }
        </tbody>
      </Table>
            <Footer/>
        </>
    </div>
  )
}

export default MostrarJoins