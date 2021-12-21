import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('https://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(transactions => console.log(transactions))
  }, []);
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">
              Desenvolvimento de Website
            </td>
            <td className="deposit">
              R$ 12000,00
            </td>
            <td>
              Desenvolvimento
            </td>
            <td>
              20/02/2021
            </td>
          </tr>
          <tr>
            <td className="title">
              Aluguel Apartamento
            </td>
            <td className="withdraw">
              - R$ 2000,00
            </td>
            <td>
              Despesa
            </td>
            <td>
              10/02/2021
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}