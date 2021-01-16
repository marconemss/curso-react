import React from 'react'


export default props => {

    return (
        <div>
            <div>
                Filho
            </div>

            <button onClick={
                    function (e) {
                        props.quandoClicar('Fulano', 40, false)
                    }
                    }>
                Fornecer Informações
            </button>
            <br></br>
            <button onClick={e => props.quandoClicar('Beltrano', 50, true)}>
                Fornecer Informações com Função Arrow 
            </button>
        </div>
    )
}


