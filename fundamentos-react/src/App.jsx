import React from 'react'

import "./App.css"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

const hello = 'Hello React!'

export default function App() {
    return (
        <div className="App">
            <div className="Cards">
                <Card titulo="Tabela Produtos" color='#6E0000'>
                    <TabelaProdutos />
                </Card>
                <Card titulo="Repetição" color='#3A9AD9'>
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="Componente com Filhos" color='#660066'>
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>
                <Card titulo="Desafio Aleatório" color='#021542' borda='#F2671F'>
                    <Aleatorio min={0} max={10} />, {" "}
                    <Aleatorio min={0} max={10} />, {" "}
                    <Aleatorio min={0} max={10} /> 
                </Card>
                <Card titulo="Fragmento" color='#FF2321'>
                    <Fragmento/>
                </Card>
                <Card titulo="Componente com Parâmetro" color='#333333'>
                    <ComParametro 
                            titulo='Situação do Aluno'
                            aluno='Pedro'
                            nota={9.5} />
                </Card>
                <Card titulo="Primeiro Componente" color='#10206B'>
                    <h1> { hello } </h1>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}