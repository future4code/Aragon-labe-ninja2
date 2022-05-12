import React from "react"
import Itens from "./Itens.js"

export default class Carrinho extends React.Component {
    render() {
        const itensDoCarrinho =
            this.props.carrinho &&
            this.props.carrinho.map((item) => {
                return (
                    <Itens
                        key={item.id}
                        quantidade={item.quantidade}
                        nome={item.name}
                        onClick={() => this.props.removerItemDoCarrinho(item)}
                    />
                );
            });

        return (
            <section>
                <h2>Carrinho:</h2>
                <section>{itensDoCarrinho}</section>
                <p>Valor total: R$ {this.props.valorTotal},00</p>
            </section>
        );
    }
}
