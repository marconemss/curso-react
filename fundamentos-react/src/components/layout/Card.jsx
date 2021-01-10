import React from 'react'
import './Card.css'

export default props => {

    const estilo = {
        backgroundColor: props.color || '#10206B',
        borderColor: props.borda || props.color
    }

    return (
        <div className="Card" style={estilo}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}


