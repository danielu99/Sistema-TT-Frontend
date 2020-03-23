import React from 'react'
import {Link,Route} from 'react-router-dom'
import PalabrasClave from './PalabrasClave'

class ActualizaProtocolo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: this.props.usuario,
            protocolo:this.props.protocolo
        }
    }

    render() {
        return (
            <div className="container">
                <Route exact path="/Alumno/Bienvenido/Actualiza/Palabras" component={() => <PalabrasClave usuario={this.state.usuario} protocolo={this.state.protocolo}/>} />
                <h1>Actualiza tu trabajo</h1>
                <h1>Selecciona una opción</h1>
                <Link to="/Alumno/Bienvenido/Actualiza/Palabras"><button className="myButton" >Añadir palabras clave</button></Link><br/><br/>
                <Link to="/Alumno/Bienvenido/Actualiza/URL"><button className="myButton">Modificar URL</button></Link>
            </div>
        );
    }
}

export default ActualizaProtocolo