import React from "react";
import CartaoDosProdutos from "./CartaoDosProdutos";
import axios from "axios"

export default class Produtos extends React.Component {
  state = {
    servicos: []
  }

  componentDidMount = () => {
    this.getServicos()
  }

  getServicos = () => {
    axios.get("https://labeninjas.herokuapp.com/jobs", {
      headers: { Authorization: "efb47975-83d5-4e22-84a5-dd8b35d906f7" }
    })
      .then((res) => {
        this.setState({ servicos: res.data.jobs })
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  render() {
    const produtosOrdenados =
      this.props.produtos &&
      this.props.produtos.sort((a, b) => {
        if (this.props.ordenacao === "Crescente") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

    const produtosMapeados =
      produtosOrdenados &&
      produtosOrdenados.map((produto) => {
        return (
          <section
            key={produto.id}
            nome={produto.name}
            valor={produto.price}
            onClick={() => this.props.onClick(produto)}
          />
        );
      });
    return (
      <section>
        <p>Quantidade de produtos: {this.props.quantidade}</p>
        <label>
          Ordenação:
          <select onChange={this.props.onChangeCabecalho}>
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </select>
        </label>
      </section>
    );
  }
}
