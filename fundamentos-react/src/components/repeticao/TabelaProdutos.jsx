import React from 'react'
import Produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {

    const produtos = Produtos.map( (produto, i) => {
        return (
            <tr key={produto.id}>
                <td align="left">
                    {i+1} - {produto.nome}
                </td>
                <td align="right">
                    {"R$ "} {produto.preco}
                </td>
            </tr>
        )
    })

    return (
        <div>
            <table border="0" className="TabelaProdutos">
                <tbody>
                    {produtos}
                </tbody>
            </table>
        </div>
    )
}