import React from 'react'
export default class PaginaInicial extends React.Component {
    render() {
        return (
            <>
                <h1>Seja bem-vind ao Labe-Dev!</h1>
                <button onClick={() => this.props.changePage("form-page")}>Cadastrar um Serviço</button>
                <button onClick={() => this.props.changePage("list-page")}>Contratar serviços</button>
            </>
        )
    }
}
            