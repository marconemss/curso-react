import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'


export default props => {

    const [texto, setTexto] = useState('?')
    const [numero, setNumero] = useState(0)
    const [bool, setBool] = useState(false)

    function fornecerInformacoes(textoParam, numeroParam, bolParam){
        console.log(textoParam,numeroParam,bolParam)

        setTexto(textoParam)
        setNumero(numeroParam)
        setBool(bolParam)

        //Neste exemplo abaixo, apenas atribuir valor às variáveis não reflete 
        //nos span abaixo! Daí a necessidade de se utilizar o useState

        //texto = textoParam;
        //numero = numeroParam;
        //bool = bolParam;
    }

    return (
        <div>
            <div>
                <span>{texto} </span>
                <span> <strong> {numero} </strong> </span>
                <span>{bool ? 'V' : 'F'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}


