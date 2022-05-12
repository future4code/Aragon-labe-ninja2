import React from "react"
import PaginaDeCarrinho from "./Componentes/PaginaDeCarrinho.js"
import CriarPaginaDeServicos from "./Componentes/CriarPaginaDeServicos.js"
import PaginaInicial from "./Componentes/PaginaInicial.js"
import PaginaDeServicosDetalhados from "./Componentes/PaginaDeServicosDetalhados.js"
import CartaoDosProdutos from "./Componentes/CartaoDosProdutos.js"
import Filtros from "./Componentes/Filtros.js"
import Produtos from "./Componentes/Produtos.js"
import Itens from "./Componentes/Itens.js"

export default class App extends React.Component {
  state = {
    currentPage: "paginaInicial",
    servico: {}
  }

  servicoDetalhado = (paginaDeServicosDetalhados, servico) => { this.setState({ currentPage: paginaDeServicosDetalhados, servico: servico }) }

  changePage = (pagina) => { this.setState({ currentPage: pagina }) }

  choosePage = () => {

    switch (this.setState.currentPage) {
      case "paginaInicial":
        return <PaginaInicial
          changePage={this.setStats.changePage} />

      case "list-page":
        return < PaginaDeServicosDetalhados
          changePage={this.changePage} />

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
    this.choosePage()
    return (

      <main>
        <header>
          changePage={this.setState.props.changePage}
        </header>

        <section>
          {this.choosePage()}
        </section>
      </main>
    )
  }
}
