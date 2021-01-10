import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    const lis = alunos.map((aluno) => {
        return (
            /**
             * Se não utilizar o key vai funcionar, 
             * mas o console do browser vai reclamar
             */
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome} : {aluno.nota}
            </li>
        )
    })

    return (
         <div>
             <ul style={ {listStyle: 'square'}}>
                 {lis}
             </ul>
        </div>
    )
}