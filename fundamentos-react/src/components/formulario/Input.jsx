import React, {useState} from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    /**
     * No input abaixo: se não declara onChange,
     * tem que marcar como readOnly, senão
     * estoura erro no console.
     * 
     * O componente com value undefined abaixo
     * é um componente não-controlado, ou seja,
     * não há nenhuma vinculação com um estado.
     */

    return (
        <div>
            <h5>{valor}</h5>
            <div style={{
                    display: 'flex',
                    flexDirection: 'column' }}>
                
                <input value='ReadOnly' readOnly />
                <input value={undefined} />
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} onChange={e => setValor(e.target.value)}/>
            </div>
        </div>
    )
}


