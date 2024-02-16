import { Developer } from "@/app/page";
import "./styles.css";

interface TableProps {
  data: Developer[];
}

export function Table({ data }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Profissional</th>
          <th>Tech</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: Developer) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.tech}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
