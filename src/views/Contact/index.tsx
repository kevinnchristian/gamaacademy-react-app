import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

const Contact: React.FC = () => {
  return (
    <Container>
      <h1>Contact</h1>
      <Link
        to='/'
        style={{
          height: '16px',
          width: '50px',
          backgroundColor: '#000',
          borderRadius: '4px',
          color: '#f4f4f5',
          textAlign: 'center',
          padding: '6px 12px',
        }}
      >Home</Link>
    </Container>
  );
}

export default Contact;