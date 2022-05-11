import React from "react";
export default class CartaoDosProdutos extends React.Component {
  render() {
    return (
      <Cartao>
        <TextoDoCartao>
          <p>{this.props.nome}</p>
          <p>R$ {this.props.valor},00</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
        </TextoDoCartao>
      </Cartao>
    );
  }
}
