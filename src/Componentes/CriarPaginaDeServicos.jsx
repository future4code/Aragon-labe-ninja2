import React from 'react'

export default class CriarPaginaDeServicos extends React.Component {
    render() {
        return (
            <>
                <h1>Cadastre um Novo Serviço</h1>
                <form>
                    <label>Descrição dos serviços</label>
                    <input type="text"></input>
                    <label>Digite seu e-mail</label>
                    <input type="email"></input>
                    <button type="submit">Enviar dados</button>
                </form>
            </>
        )
    }
}
