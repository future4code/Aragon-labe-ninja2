import React from "react";
export default class Filtros extends React.Component {
  render() {
    return <GrupoDeFiltros>
      <h2>Filtros</h2>
      <section>
        Filtro Mínimo:
        <input type={"number"}
          value={this.props.minimo}
          onChange={this.props.onChangeMinimo}
        />
      </section>

      <section>
        Filtro Máximo:
        <input type={"number"}
          value={this.props.maximo}
          onChange={this.props.onChangeMaximo}
        />
      </section>

      <section>
        Busca por nome:
        <input type={"text"}
          value={this.props.buscaPorNome}
          onChange={this.props.onChangeBuscaPorNome}
        />
      </section>
    </GrupoDeFiltros>;
  }
}
