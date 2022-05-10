import React from 'react'
export default class PaginaDeCarrinho extends React.Component {
    render() {
        return (
            <>
                <section>
                    <h1>Dados da compra</h1>
                    <p>Preço total: </p>
                    <button onClick={() => this.props.changePage("list-page")}>Voltar para lista de serviços</button>
                    <button type="submit">Finalizar compra</button>
                </section>
                <hr />
                <section>
                    <h1>Carrinho</h1>
                </section>
            </>
        )
    }
}
