import "../Styles/MainHome.css"
import Button from 'react-bootstrap/Button'
import dentista from "../assets/dentista.png"
import Historial from "../assets/Historial.png"
import paciente from "../assets/paciente.png"
import Turno from "../assets/Turno.png"
import imagenFondo from "../assets/imagenFondo.jpg"
import {Link} from "react-router-dom"
import { Footer } from "../Constants"




export const Home = () => {
  return (
    <div className="fondo"  style={{ backgroundImage: `url(${imagenFondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <header> 
                        <h2 className="h2_main_header" >Panel de control </h2>
                        <br />
                        <h3 className="h2_main_header">Consultorio Dentista</h3>
                </header>

            <div className="contenedor_button1" >
            <Button className="buton1"  variant="warning">
                    <Link to="/dentistas">
                    <img src={dentista} alt="" className="icono3"/>
                    </Link>
                    <h4>Ir a Seccion Dentista</h4>
            </Button>
           

            <Button className="buton1"  variant="warning">
                    <Link to="/pacientes">
                    <img src={paciente} alt="" className="icono3" />
                    </Link>
                    <h4>Ir a Seccion Paciente</h4>
            </Button>
            </div>
            
            
            <div className="contenedor_button2">

            <Button className="buton1"  variant="warning">
                    <Link to="/historialclinico">
                    <img src={Historial} alt="" className="icono3"/>
                    </Link>
                    <h4>Ir a Seccion Historial Clinico</h4>
            </Button>
            


            <Button className="buton1"  variant="warning">
                    <Link to="/turno">
                    <img src={Turno} alt="" className="icono3"/>
                    </Link>
                    <h4>Ir a Seccion Turnos</h4>
            </Button>
            
            </div>


            <Footer/>


    </div>
  )
}

export default Home