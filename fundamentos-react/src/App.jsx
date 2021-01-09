import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

const hello = 'Hello React!'

export default () => (
        <div>
            Randômico: <Aleatorio min={0} max={10} />
            <h1> { hello } </h1>
            <Primeiro></Primeiro>
            <ComParametro 
                    titulo='Situação do Aluno'
                    aluno='Pedro'
                    nota={9.5} />
                <Fragmento/>
        </div>
    )


