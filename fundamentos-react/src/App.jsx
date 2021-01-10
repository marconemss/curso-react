import React from 'react'

import "./App.css"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

const hello = 'Hello React!'

export default () => (
        <div className="App">
            <div className="Cards">
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
