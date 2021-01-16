import React, {Component} from 'react'
import './ContadorComponente.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

/**
 * Mesmo exemplo do Contador, porém, agora separado em componentes:
 * 
 * Display, Formulário e Botões.
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
     * Aqui já não tem o evento, ele recebe já o número
     * que deverá ser atribuído a "passo". Este valor
     * vai ser definido lá na arrowFunction do input dentro
     * do componente PassoForm!
     */
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return (
            <div className="Contador">
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} doSetPasso={this.setPasso} />
                <Botoes inc={this.incrementa} dec={this.decrementa} />
            </div>
        )
    }
}

export default Contador

