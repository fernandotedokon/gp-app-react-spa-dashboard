import React, { Component } from "react";
//import { consultarFaturamento } from "../../services/faturamento";

class Faturamento extends Component {
    constructor(props){
        super(props);
        this.state = {
            detalhamento : [
                { "descricao" : "A vista (especie)" , "valor" : 32.000},
                { "descricao" : "Cheque"            , "valor" : 2.000},
                { "descricao" : "Convenio"          , "valor" : 20.000},
                { "descricao" : "Cartao de Debito"  , "valor" : 28.000},
                { "descricao" : "Cartao de Credito" , "valor" : 18.000}
                ]
        };
    }

 //   componentDidMount(){
 //       consultarFaturamento().then(dados => this.setState(dados));

 //        fetch("http://projeto.tedmedia.com.br/php/api-dashboard/api/faturamento")
//        .then(resultado => resultado.json().then(dados => this.setState(dados)));

 //   }

    render(){
        return(
            <div>
                <h2 className="mt-2">Faturamento</h2>

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Total por forma de pagamento
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th className="text-right">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        this.state.detalhamento.map((item,indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.descricao}</td>
                                                    <td className="text-right">
                                                        { item.valor.toLocaleString("pt-BR", { style : "currency", currency : "BRL"}) }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>      
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faturamento;