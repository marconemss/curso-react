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
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

const hello = 'Hello React!'

export default function App() {
    return (
        <div className="App">
            <div className="Cards">
                <Card titulo="Uso de Classes" color="#363635">
                    <Contador numeroInicial={10} passo={1}/>
                </Card>
                <Card titulo="Componente Controlado" color="#3B5998" borda="#F5DF65">
                    <Input />
                </Card>
                <Card titulo="Comunicação Indireta" color="#982395">
                    <IndiretaPai />
                </Card>
                <Card titulo="Comunicação Direta" color="#DC403B">
                    <DiretaPai />
                </Card>
                <Card titulo="Renderização Condicional" color='#0241E2'>
                    <ParOuImpar numero={20} />
                    <p/>
                    <UsuarioInfo usuario = {{ nome: 'Mário'}} />
                </Card>
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