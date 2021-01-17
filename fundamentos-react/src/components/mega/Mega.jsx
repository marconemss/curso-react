import { render } from '@testing-library/react';
import React, {Component} from 'react'
import './Mega.css'

class Mega extends Component {
    state = {
        qtde: this.props.quantidade || 1,
    }

    setQuantidade = (valor) => {
        this.setState({
            qtde: valor
        })
    }

    geraMegaSena = (quantidade) => {
        var colecao = [0];

        if(quantidade < 6){ quantidade = 6; }
        if(quantidade > 60){ quantidade = 60; }

        for(let i=0;i<quantidade;i++){
            var aleatorio = parseInt(Math.random() * (60) + 1);
            var limite = colecao.length;
            var comparativo = true;

            for(let j=0;j<limite;j++){
                var numeroDaColecao = colecao[j];
                comparativo = comparativo & (numeroDaColecao != aleatorio);
            }

            if(comparativo){
                colecao[i] = aleatorio;
            } else {
                i = i - 1;
            }
        }
        this.setState({
            retorno: (colecao.sort((n1 , n2) => n1 - n2)).join(', ')
        })
    }

    render(){
        return (
            <div>
                {this.state.retorno}
                <div className="Input">
                    <input type="number" min="6" max="60"
                            value={this.state.qtde} 
                            onChange={e => this.setQuantidade(e.target.value)} />
                </div>
                <div>
                    <button onClick={_ => this.geraMegaSena(this.state.qtde)}>
                        Surpresinha
                    </button>
                </div>
            </div>
        )
    }
}

export default Mega