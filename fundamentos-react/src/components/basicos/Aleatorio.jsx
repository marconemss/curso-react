
/**
 * A Funcao Arrow foi atribuida a uma constante
 * e a constante foi exported default.
 * 
 * O resultado eh o mesmo, mas no console do 
 * browser, ele acusa como erro!
 * 
 * Tem como desabilitar esta verificacao, checar em:
 * https://pt.stackoverflow.com/questions/483871/oque-significa-esse-erro-assign-arrow-function-to-a-variable-before-exporting
 * 
 */

const funcaoArrow = (props) => {
    //const min = props.min
    //const max = props.max

    const {min, max} = props;

    return Math.floor(Math.random() * (max - min + 1) + min);
};

export default funcaoArrow;

