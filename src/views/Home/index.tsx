import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link
        to='/contact'
        style={{
          height: '16px',
          width: '50px',
          backgroundColor: '#000',
          borderRadius: '4px',
          color: '#f4f4f5',
          textAlign: 'center',
          padding: '6px 12px',
        }}
      >Contact</Link>
    </Container>
  );
}

export default Home;