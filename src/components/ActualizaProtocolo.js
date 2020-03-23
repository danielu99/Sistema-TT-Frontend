import React from 'react'
import { Link, Route } from 'react-router-dom'
import PalabrasClave from './PalabrasClave'
import '../button.css'

class ActualizaProtocolo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: this.props.usuario,
            protocolo: this.props.protocolo
        }
    }

    render() {
        return (
            <div>
                <h1>Selecciona una opción</h1>
                <div className="container">
                    <Route exact path="/Alumno/Bienvenido/Actualiza/Palabras" component={() => <PalabrasClave usuario={this.state.usuario} protocolo={this.state.protocolo} />} />
                </div>
                <Link to="/Alumno/Bienvenido/Actualiza/Palabras"><button className="myButton" >Palabras Clave</button></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Alumno/Bienvenido/Actualiza/URL"><button className="myButton">Modificar URL</button></Link>
            </div>
        );
    }
}

export default ActualizaProtocolo