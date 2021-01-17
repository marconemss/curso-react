import React, {Component} from 'react'
import './Contador.css'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 1,
        passo: this.props.passo || 1,
    }

    /**
     * Se não for uma função arrow, teria que fazer um 
     * bind do "this" no construtor (topico 34)
     */
    incrementa = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementa = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    /**
     * Este "+" na frente de e.target.value já converte
     * para valor numérico!!
     */
    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render(){
        return (
            <div className="Contador">
                <h1>{this.state.numero}</h1>
                <input type="number" value={this.state.passo} 
                    onChange={this.setPasso}/>
                <button onClick={this.decrementa}>-</button>
                <button onClick={this.incrementa}>+</button>
            </div>
        )
    }
}

export default Contador

