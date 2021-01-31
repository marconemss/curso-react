import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n-1) * n
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parImpar, setParImpar] = useState('Ímpar')

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    /**
     * Acima: sempre que [number] tiver o seu estado alterado,
     * vai gerar um efeito colateral definido por function():
     * invoca o setFatorial (isto é, mudança no estado de number
     * está mudando o estado de fatorial) que, por sua vez,
     * invoca a função recursiva calcFatorial definida lá em cima!
     */

    useEffect(function () {
        if (number > 18){
            document.title = 'Eita!!!!!';
        } else {
            document.title = 'React App';
        }
    }, [number])

    useEffect(function () {
        if(number % 2 === 0){
            setParImpar('Par');
        } else {
            setParImpar('Ímpar');
        }
    }, [number])

    return (
        <div>
            <PageTitle
                    title="Hook UseEffect"
                    subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercício 01" />
            <div className="UseEffect">
                <div>
                    <div>
                        <span className="text">Fatorial:</span>
                        <span className="text red">{fatorial < 0 ? 'Não existe' : fatorial}</span>
                    </div>
                    <input type="number" className="text" value={number} 
                            onChange={e => setNumber(e.target.value)} />
                </div>
            </div>
            <p />
            <SectionTitle title="Exercício 02" />
            <span className="text red">{parImpar}</span>
        </div>
    )
}

export default UseEffect
