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
                <h2>La calificación de su trabajo es:</h2>
            </div>
        );
    }
}

export default ActualizaProtocolo