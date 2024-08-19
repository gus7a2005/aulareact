// simulando o banco de dados
const Dados =(resultado)=>{

    if(resultado < 18.5){
        return (
            <>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18.5</td>
            </>
        )
    }
    else if(resultado > 18.4 && resultado < 25){
        return(
            <>
            <td>Peso Normal</td>
            <td>18.5 - 24.9</td>
            </>
        )
    }
    else if(resultado > 24 && resultado > 30){
        return (
            <>
            <td>Sobre Peso</td>
            <td>25 - 29.9</td>
            </>
        )
    }
    else if(resultado > 34 && resultado < 40){
        return (
            <>
            <td>Obesidade Grau </td>
            <td>35 - 40</td>
            </>
        )
    }
    else{
        return(
        <>
        <td>Precisa se cuidar muito</td>
        <td>Overdose de peso</td>
        </>
        )
    }

}

// componente resultado
const Resultado =({resultado})=>{
    return(
        <>
        <div className="resultado">

        <h2>Seu IMC é de:
            <span className="imcSpan">{resultado}</span>
        </h2>

        <table className="tabela">
            <thead className="tableHeader">
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody className="tableBody">
                <tr>
                    {Dados(resultado)}
                </tr>
            </tbody>

        </table>

        </div>
        </>
    )
}
export default Resultado