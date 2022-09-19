import React, { FormEvent, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from "./style";

interface IData {
  name: string;
  email: string;
}


const Contact: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.post('/ggn8JQgXaacGJ1PGNROn', [], {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(response => {
        const { status } = response;

        if (status === 200) {
          setSubmit(true);
        }
      });
  }, [data]);

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>

        <div className="card">
          {submit ? (
            <div>
              <h1>Obrigado pelo envio dos dados:</h1>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
            </div>

          ) : (

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="user_name"
                placeholder="Nome"
                onChange={e => setData({ ...data, name: e.target.value })}
              />
              <input
                type="text"
                id="email"
                placeholder="Email"
                onChange={e => setData({ ...data, email: e.target.value })}
              />
              <input
                type="submit"
                value="Cadastrar"
              />
            </form>
          )}
        </div>

        <Link
          to="/"
          className="button-link"
        >Home</Link>
      </div>
    </Container>
  );
}

export default Contact;