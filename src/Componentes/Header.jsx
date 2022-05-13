import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <main>
                <h1>Labeninja dos Catetos</h1>
                <nav>
                    <button onClick={() => this.props.changePage("paginaInicial")}>Ir para Página Inicial</button>
                    <button onClick={() => this.props.changePage("paginaDeCarrinho")}>Ir para Página de Carrinho</button>
                </nav>
            </main>
        );
    }
}