import React from 'react'

class ActualizaProtocolo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: this.props.usuario
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Actualiza tu trabajo</h1>
                <h1>Selecciona una opción</h1>
                <button className="myButton">Añadir palabras clave</button><br/><br/>
                <button className="myButton">Modificar </button>
            </div>
        );
    }
}

export default ActualizaProtocolo