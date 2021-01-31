import React from 'react'

const Home = props => (
    <div className="Home">
        <h1>Início</h1>
        <h2>Bem Vindo!</h2>
        <p>
            Como a rota (Route) do Home está usando o 'exact',
            significa que o 'Não Existe' ficaria em branco!
            <br/><br/>
            Caso não tivesse 'exact', o 'Não Existe' cairia
            também no Home, pois ele encontraria a '/'
            <br/><br/>
            Só não ficou em branco porque no Content.jsx existe 
            uma 'Route path' com asterisco, ou seja, qualquer
            página que não esteja mapeada nas rotas cairá em "NotFound/"
            <br/><br/>
            Para ver a diferença, vá em content e retire o 'exact' da Route Home...
            O link no menu 'Não Existe' não apontará mais para '404 Não encontrado!'
        </p>
    </div>
)

export default Home