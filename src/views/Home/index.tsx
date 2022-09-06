import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

const Home: React.FC = () => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <Container>
      {isLoad ? (
        <>
          <p>Carregando...</p>
        </>
      ) : (
        <>
          <h1>Home</h1>
          <Link
            to='/contact'
            className='button-link'
          >Contact</Link>
        </>
      )}

      <button
        className='button-change-state'
        onClick={() => setIsLoad(!isLoad)}
      >
        Clique Aqui
      </button>
    </Container>
  );
}

export default Home;