import React from 'react'
import * as d3 from 'd3'
import '../myButton2.css'

class PalabrasClave extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            protocolo: this.props.protocolo,
            cont: 1
        }
        this.añadePalabra = this.añadePalabra.bind(this);
    }

    añadePalabra() {
        this.setState({ cont: this.state.cont + 1 })
        d3.select("div.palabras")
            .append("input")
            .attr("type", "text")
            .attr("placeHolder", "            Palabra clave " + ((this.state.cont) + 1));
    }

    render() {
        return (
            <div>
                <button className="myButton2" onClick={this.añadePalabra}>Añadir Palabra Clave</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="myButton2" onClick={this.añadePalabra}>Finalizar</button>
                <div className="palabras">
                    <input type='palabrasClave'
                        placeholder='            Palabra clave 1' />
                </div>
                <br></br>
            </div>
        )
    }
}

export default PalabrasClave