import React from "react"
import PaginaDeCarrinho from "./Componentes/PaginaDeCarrinho.js"
import CriarPaginaDeServicos from "./Componentes/CriarPaginaDeServicos.js"
import PaginaInicial from "./Componentes/PaginaInicial.js"
import PaginaDeServicosDetalhados from "./Componentes/PaginaDeServicosDetalhados.js"
import CartaoDosProdutos from "./Componentes/CartaoDosProdutos.js"
import Filtros from "./Componentes/Filtros.js"
import Produtos from "./Componentes/Produtos.js"
import Itens from "./Componentes/Itens.js"
import axios from "axios"

export default class App extends React.Component {
  state = {
    currentPage: "paginaInicial",
    servico: {}
  listaDeServicos(props) = {
  ["Diarista", "encanador", "Dog walker", "artezã/o", "bengala-humana", "eletricista", "massoterapeuta", "segurança-armada", "oficeboy", "oficegirl", "detetive", " decoradores de festa infantil", "nutricionista", "decoração casa,festas e jardinagem", "aparador de grama", "cíndico", "porteiro", "banho e tosa", "motorista para pessoas com deficiências"],

    servicosDetalhados = (paginaDeServicosDetalhados, servico) => {
      this.setState.props({ currentPage: paginaDeServicosDetalhados, servicos: servico 
        )
    }
}
changePage = (page) => {
  this.setState.props({ currentpage: page })
}
choosePage = () => {

  switch (this.setState.props.targth.currentPage) {
    case "paginaInicial":
      return <PaginaInicial
        changePage={this.setStats.props.changePage}
      />

    case "list-page":
      return < PaginaDeServicosDetalhados
        changePage={this.changePage}
      />

    case "form-page":
      return <CriarPaginaDeServicos />
    case "PaginaDeCarrinho":
      return <PaginaDeCarrinho
        changePage={this.changePage}
      />
    case "PaginaDeServicosDetalhados":
      return <PaginaDeServicosDetalhados
        servico={this.state.servico}
        changePage={this.changePage}
      />
    default:
      return <PaginaInicial />
  }
}

render() {
  return (

    <main>
      <header>
        changePage={this.setState.props.changePage}
      </header>
      <hr />
      <section>
        {this.choosePage()}
      </section>
    </main>
  )
}

