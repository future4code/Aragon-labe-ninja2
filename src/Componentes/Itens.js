import React from "react";

class Itens extends React.Component {
  render() {
    return (
      <section>
        <p>{this.props.quantidade}x</p>
        <p>{this.props.nome}</p>
        <button onClick={this.props.onClick}>Remover</button>
      </section>
    );
  }
}

export default Itens;
