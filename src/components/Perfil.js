import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      nombre: '',
      boleta: '',
      correo: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      nombre: decoded.nombre,
      boleta: decoded.boleta,
      correo: decoded.correo
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PERFIL</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Nombre</td>
                <td>{this.state.nombre}</td>
              </tr>
              <tr>
                <td>Boleta</td>
                <td>{this.state.boleta}</td>
              </tr>
              <tr>
                <td>Correo</td>
                <td>{this.state.correo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
