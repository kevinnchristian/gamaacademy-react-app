import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

interface IData {
  name: string;
  email: string;
}


const Contact: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setData({
      ...data,
      name: event.currentTarget.user_name.value,
      email: event.currentTarget.email.value,
    });
  }

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>

        Name: {data ? data.name : ''}
        <br />
        Email: {data ? data.email : ''}

        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="user_name"
              placeholder="Nome"
            // onChange={e => setData({ ...data, name: e.target.value })}
            />
            <input
              type="text"
              id="email"
              placeholder="Email"
            // onChange={e => setData({ ...data, email: e.target.value })}
            />
            <input
              type="submit"
              value="Cadastrar"
            />
          </form>
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