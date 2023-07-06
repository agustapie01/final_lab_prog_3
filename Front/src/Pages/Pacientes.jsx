import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Link } from 'react-router-dom'
import {  TablaPacientes } from '../Constants'
import "../Styles/Pacientes.css"
import { Button } from 'react-bootstrap';



export const Pacientes = () => {


  return (
    <div>
      <Header/>
      <Link to="/pacientes/agregar">
            <Button variant="success"  className='boton_paciente1'>Agregar Paciente</Button>
        </Link>
      <Link to="/mostrarjoins">
            <Button variant="success" className='boton_paciente1'>Mostrar Pacientes con turnos</Button>
        </Link>
        <h2>Pacientes</h2>
            <TablaPacientes/>
      <Footer/>
    </div>
  );
}

export default Pacientes