import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")


    /**
     * Esta forma de declarar o array acima é a mesma coisa de dizer:
     * 
     * const count = array[0] 
     * const setCount = array[1] 
     * 
     * No caso acima, ele inicializa count = 0;
     * 'setCount' é o nome da função utilizada abaixo e definida na arrow function.
     */

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <span className="text"> {count} </span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}> -1 </button>
                    <button className="btn" onClick={() => setCount(count + 1)}> +1 </button>
                    <button className="btn" onClick={() => setCount(500)}> 500 </button>
                    <button className="btn" onClick={() => setCount(currect => currect + 500)}> +500 </button>
                </div>
            </div>


            <SectionTitle title="Exercício 02" />
            <input type="text" className="input" 
                    value={name} onChange={e => setName(e.target.value)} />

            <span>{name}</span>
        </div>
    )
}

export default UseState
