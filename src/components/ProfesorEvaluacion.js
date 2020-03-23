import React from 'react'
import { Link } from 'react-router-dom'
import '../button.css'

class ProfesorEvaluacion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profesor: this.props.usuario,
            protocolo: localStorage.getItem("protocolo"),
            info: []
        }
        this.aprobar=this.aprobar.bind(this)
        this.rechazar=this.rechazar.bind(this)
    }

    componentDidMount() {
        this.getInfo()
    }

    async getInfo() {
        const response = await fetch("http://192.168.0.18:4000/InfoProtocolo", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                protocolo: this.state.protocolo,
            })
        })
            .catch(err => console.error(err))
        const json = await response.json();
        this.setState({ info: json.data })

    }

    renderProtocolos = ({ Nombre, URL }) =>
        <tr>
            <td>
                {Nombre}
            </td>
            <td>
                <a href={URL} target="_blank">{URL}</a>
            </td>
        </tr>

    async aprobar(event) {
        const response = await fetch("http://192.168.0.18:4000/ProtocoloEvaluado", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                protocolo: this.state.protocolo,
                calificacion: "Aprobado",
                profesor: this.state.profesor
            })
        })
            .catch(err => console.error(err))
        const json = await response.json();
        if (json.data == 1) {
            alert("Protocolo calificado correctamente!")
        }
        else{
            alert("Algo salió mal")
        }
    }

    async rechazar(event) {
        const response = await fetch("http://192.168.0.18:4000/ProtocoloEvaluado", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                protocolo: this.state.protocolo,
                calificacion: "Rechazado",
                profesor: this.state.profesor
            })
        })
            .catch(err => console.error(err))
        const json = await response.json();
        if (json.data == 1) {
            alert("Protocolo calificado correctamente!")
        }
        else{
            alert("Algo salió mal")
        }
    }

    render() {
        if (!localStorage.getItem("protocolo")) {
            window.location.href = "/Profesor"
        }
        else {
            return (
                <div>
                    <h1>Información del Protocolo</h1>
                    <br />
                    <div className="container">
                        <div>
                            <table className="tabla" align="center">
                                <tr>
                                    <th>NombreTT</th>
                                    <th>URL a documento PDF</th>
                                </tr>
                                {this.state.info.map(this.renderProtocolos)}
                            </table>
                        </div><br />
                        <button className="myButton" onClick={this.aprobar}>APROBAR</button><br /><br />
                        <button className="myButton" onClick={this.rechazar}>RECHAZAR</button><br /><br />
                    </div>
                </div>
            )
        }

    }
}

export default ProfesorEvaluacion