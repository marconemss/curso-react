import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={props.dec}>-</button>
            <button onClick={props.inc}>+</button>
        </div>
    )
}

