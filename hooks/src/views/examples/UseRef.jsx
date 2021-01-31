import React, { useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1,setValue1] = useState("")
    const count = useRef(-1)

    /**
     * Como está fora de useEffect, ele passa por aqui (abaixo) sempre (a cada renderização),
     * não estando vinculado à mudança de estado de algum componente.
     * 
     * Note que uma alteração via useRef NÃO CAUSA uma nova renderização! Se assim fosse,
     * esta página entraria em loop infinito.
     * 
     * O que está causando novas renderizações é a mudança de value1.
     */
    
    count.current = count.current + 1

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!" />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
            </div>
            <div className="center">
                <input type="text" className="input" value={value1} 
                        onChange={e => setValue1(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef

