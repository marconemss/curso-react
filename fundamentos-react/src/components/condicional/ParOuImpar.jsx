import React from 'react'

export default props => {

    /**
     * O operador === compara não apenas o valor, mas o tipo, ex:
     * 
     * 2 == '2' é true
     * 
     * 2 === '2' é false
     */
    
    const isPar = props.numero % 2 === 0;

    return (
        <div>
            Número informado: {props.numero}
            <p/>
            {
                isPar ? <span>Par</span>
                : <span>Ímpar</span>
            }
        </div>
    )
}


