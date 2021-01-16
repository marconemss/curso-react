import React from 'react'

export default props => {
    return (

        /**
         * Sem implementar este onChange, o input não altera o seu valor!!
         * 
         * Passa a ser um input readOnly!
         */
        <div>
             <input type="number" value={props.passo} 
                    onChange={e => props.doSetPasso(+e.target.value)}/>
        </div>

    )
}

