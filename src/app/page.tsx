"use client";
import { ChangeEvent, useEffect, useState } from "react";
import "./page.css";
import { NavLinks } from "./components/NavLinks";
import { routes } from "./constants/routes";
import { SelectInput } from "./components/SelectInput";
import { optionsBack, optionsCloud, optionsFront } from "./constants/options";
import { Table } from "./components/Table";

export interface Developer {
  id: number;
  nome: string;
  tech: string;
}

export default function Home() {
  const [nome, setNome] = useState("");
  const [stackFront, setStackFront] = useState("");
  const [stackBack, setStackBack] = useState("");
  const [cloud, setCloud] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [formData, setFormData] = useState({
    stackFront: "",
    stackBack: "",
    cloud: "",
    nome: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const url =
          "https://my-json-server.typicode.com/Guilhermelolidev/fakeapi/developers";
        const response = await fetch(url);

        const data: Developer[] = await response.json();

        setDevelopers(data);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleStackFront = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, stackFront: event.target.value }));
  };

  const handleStackBack = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, stackBack: event.target.value }));
  };

  const handleCloud = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, cloud: event.target.value }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, nome: event.target.value }));
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStackFront(formData.stackFront);
    setStackBack(formData.stackBack);
    setCloud(formData.cloud);
    setNome(formData.nome);
  };

  return (
    <div className="content">
      <header>
        <h1>Tech professionals 2.0</h1>

        <NavLinks routes={routes} />
      </header>

      <div className="hero">
        <h2>Informações: </h2>

        {nome && <h3>Profissional: {nome}</h3>}
        {stackFront && <h3>Front: {stackFront}</h3>}
        {stackBack && <h3>Back: {stackBack}</h3>}
        {cloud && <h3>Cloud: {cloud}</h3>}

        {isLoading ? "Carregando..." : <Table data={developers} />}
      </div>

      <div className="body">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite seu nome: "
          />

          <SelectInput
            value={formData.stackFront}
            onChange={handleStackFront}
            options={optionsFront}
          />

          <SelectInput
            value={formData.stackBack}
            onChange={handleStackBack}
            options={optionsBack}
          />

          <SelectInput
            value={formData.cloud}
            onChange={handleCloud}
            options={optionsCloud}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>

      <footer>
        <p>Rodapé da Página &copy; 2024</p>
      </footer>
    </div>
  );
}
