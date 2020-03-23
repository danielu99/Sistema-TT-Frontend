import React from "react";
import '../MenuAlumno.css'
import Registro from './RegistrarProtocolo'
import Estado from './EstadoProtocolo'
import Actualiza from './ActualizaProtocolo'
import Unirse from './UnirseProtocolo'
import NavBar from './NavBarAlumno2'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class MenuAlumno extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: localStorage.getItem("Sesion"),
            nombre: ''
        }
    }

    componentDidMount() {
        this.nombre()
    }

    cleanSession() {
        localStorage.removeItem("Sesion")
        localStorage.removeItem("Type")
    }

    async nombre() {
        const response = await fetch("http://192.168.0.18:4000/NombreAlumno", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                boleta: this.state.usuario,
            })
        })
            .catch(err => console.error(err))
        const json = await response.json();
        this.setState({ nombre: json.data[0].nombre })
    }

    render() {
        return (
            <div className="MenuAlumno">
                <NavBar />
                <header className="MenuAlumno-header">
                    <h1>Sistema de Registro de Protocolos </h1>
                </header>
                <div className="bienvenida">
                    <h1>Bienvenido {this.state.nombre}</h1>
                </div>

                {/* <Router>
                    <div className='container3'>
                        <button>
                            <Link to="/Alumno/Bienvenido/registrar">Registrar Protocolo</Link>
                        </button>
                        <div classname="separador"></div>
                        <br></br>
                        <button>
                            <Link to="/Alumno/Bienvenido/edoProtocolo">Estado de Protocolo</Link>
                        </button>
                        <div classname="/Alumno/Bienvenido/separador"></div>
                        <br></br>
                        <button>
                            <Link to="/Alumno/Bienvenido/evaluacion">Evaluación de Protocolo</Link>
                        </button>
                        <div classname="separador"></div>
                        <br></br>
                        <button>
                            <Link to="/Alumno/Bienvenido/unirse">Unirse a Protocolo</Link>
                        </button>
                        <div classname="separador"></div>
                        <br></br>

                    </div>
                    <Switch>
                        <Route path="/Alumno/Bienvenido/registrar" component={() => <Registro usuario={this.state.usuario} />}/>
                        <Route path="/Alumno/Bienvenido/edoProtocolo" component={() => <Estado usuario={this.state.usuario} />}/>
                        <Route path="/Alumno/Bienvenido/evaluacion" component={() => <Evaluacion usuario={this.state.usuario} />}/>
                        <Route path="/Alumno/Bienvenido/unirse" component={()=><Unirse usuario={this.state.usuario}/>}/>
                    </Switch>
                </Router> */}
                <Route path="/Alumno/Bienvenido/registrar" component={() => <Registro usuario={this.state.usuario} />} />
                <Route exact path="/Alumno/Bienvenido/" component={() => <Estado usuario={this.state.usuario} />} />
                <Route path="/Alumno/Bienvenido/Actualiza" component={() => <Actualiza usuario={this.state.usuario} />} />
                <Route path="/Alumno/Bienvenido/unirse" component={() => <Unirse usuario={this.state.usuario} />} />
                {/* <button className="myButton" onClick={this.eliminar}>Eliminar Protocolo</button><br /><br /> */}
                <Link to="/sistematt"><button className="myButton" onClick={this.cleanSession}>Log Out</button></Link>
            </div>
        );
    }
}

export default MenuAlumno;