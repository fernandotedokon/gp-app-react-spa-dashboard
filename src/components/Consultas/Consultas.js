import React, { Component } from "react";
//import { listarConsultas } from "../../services/consultas";

class Consultas extends Component {
    constructor(props){
        super(props);
        this.state = {
            realizadas : [
                { "especialidade" : "Cardiologia", "quantidade" : 20},
                { "especialidade" : "Clinica Geral", "quantidade" : 30},
                { "especialidade" : "Dermatologia", "quantidade" : 14},
                { "especialidade" : "Gastroenterologia", "quantidade" : 10},
                { "especialidade" : "Pedriatria", "quantidade" : 13}
                ],
            marcadas : [
                { "especialidade" : "Cardiologia", "quantidade" : 19},
                { "especialidade" : "Clinica Geral", "quantidade" : 29},
                { "especialidade" : "Dermatologia", "quantidade" : 13},
                { "especialidade" : "Gastroenterologia", "quantidade" : 9},
                { "especialidade" : "Pedriatria", "quantidade" : 12}
                ]
        };
    }

        
//    componentDidMount(){
//        listarConsultas().then(dados => this.setState(dados));

//      fetch("http://projeto.tedmedia.com.br/php/api-dashboard/api/consultas")
//      .then(resultado => resultado.json().then(dados => this.setState(dados)));

//    }


    render(){
        return (
            <div>
                <h2 className="mt-2">Consultas</h2>

                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                Realizadas
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        this.state.realizadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                Marcadas
                            </div>
                            <table className="table">
                            <thead>
                                <tr>
                                    <th>Especialidade</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.state.marcadas.map((item, indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.especialidade}</td>
                                                <td>{item.quantidade}</td>
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

export default Consultas;