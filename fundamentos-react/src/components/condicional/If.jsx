export default props => {
    /**
     * Varre os filhos children;
     * Para cada child encontrado, retorna aquele
     * que tenha type e tenha nome === 'Else'
     * 
     * O retorno disso tudo é um array, por isso
     * eu pego apenas o primeiro elemento [0]
     * levando-se em conta que o If só terá um único Else
     */

    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    /**
     * Vou pegar todos os elementos lá dentro da tag
     * que não sejam o Else
     */
    const ifChildren = props.children.filter(child => {
        return child !== elseChild;
    })

    if(props.test) {
        return ifChildren;
    } else if(elseChild) {
        return elseChild;
    } else {
        return false;
    }
}

export const Else = props => props.children
