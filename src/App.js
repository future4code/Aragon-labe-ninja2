import React from "react"
import PaginaDeCarrinho from './Componentes/PaginaDeCarrinho.js'
import CriarPaginaDeServicos from './Componentes/CriarPaginaDeServicos.js'
import PaginaInicial from './Componentes/PaginaInicial.js'
import PaginaDeServicosDetalhados from "./Componentes/PaginaDeServicosDetalhados.js"
export default class App extends React.Component {
  state = {
    currentPage: "paginaInicial",
    servico: {}
  }
  servicosDetalhados = (paginaDeServicosDetalhados, servico) => {
    this.setState({ currentPage: paginaDeServicosDetalhados, servicos: servico })
  }

  changePage = (page) => {
    this.setState({ currentpage: page })
  }
  choosePage = () => {

    switch (this.state.currentPage) {
      case "paginaInicial":
        return <PaginaInicial
          changePage={this.changePage}
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
          changePage={this.changePage}
        </header>
        <hr />
        <section>
          {this.choosePage()}
        </section>
      </main>
    )
  }
}
