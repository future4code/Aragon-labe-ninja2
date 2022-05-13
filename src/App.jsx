import React from "react"
import PaginaDeCarrinho from './Componentes/PaginaDeCarrinho.jsx'
import CriarPaginaDeServicos from './Componentes/CriarPaginaDeServicos.jsx'
import PaginaInicial from './Componentes/PaginaInicial.jsx'
import PaginaDeServicosDetalhados from './Componentes/PaginaDeServicosDetalhados.jsx      '
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
      case "paginaDeCarrinho":
        return <PaginaDeCarrinho
          changePage={this.changePage}
        />
      case "paginaDeServicosDetalhados":
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
          <Header changePage={this.changePage} />
        </header>
        <hr />
        <section>
          {this.choosePage()}
        </section>
      </main>
    )
  }
}
          