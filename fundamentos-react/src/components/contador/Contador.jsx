import React, {Component} from 'react'
import './Contador.css'

/**
 * No tópico 35 ele separou botões e inputs em componentes diferentes.
 * 
 * Caso seja do interesse, rever o tópico 35. Eu deixei o exercício
 * original dentro da mesma página por motivos didáticos.
 */

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 1,
        passo: this.props.passo || 1,
    }

    /**
     * Se não for uma função arrow, teria que fazer um 
     * bind do "this", porque uma vez que a função
     * foi chamada de dentro de um botão, o "this"
     * não é mais a classe e sim o botão!
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
                <h5>{this.state.numero}</h5>
                <input type="number" value={this.state.passo} 
                    onChange={this.setPasso}/>
                <button onClick={this.decrementa}>-</button>
                <button onClick={this.incrementa}>+</button>
            </div>
        )
    }
}

export default Contador

