import React, {cloneElement} from 'react'

export default props => {
    return (
        <div>
            {
                /** 
                 * React.Children.map :
                 * -> Vai fazer um mapeamento nos filhos:
                 * 
                 * props.children, child => 
                 * 
                 * -> para cada child de children, a funcao define que:
                 * 
                 * cloneElement(child,props)
                 * 
                 * -> clona o props para este child
                 * 
                 * Repare que {cloneElement} precisa constar no import!
                 */
                React.Children.map(props.children, child => {
                    return cloneElement(child,props)
                })
            }
        </div>
    )
}

