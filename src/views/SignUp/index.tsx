import React, { useState, useCallback, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from '../../services/api';

interface IData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);

    api.post('auth/register', data)
      .then(response => {
        setLoad(false);
        toast.success('Cadastro realizado com sucesso!', {
          hideProgressBar: false,
          onClose: () => navigate('/signin')
        });
      })
      .catch(e => {
        toast.error(e.response.data.msg);
        setLoad(false);
      })
  }, [data, navigate]);

  if (load) {
    return <Loader />;
  }

  return (
    <Container>
      <div className='card'>
        <h5>Cadastre-se:</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="user_name"
            placeholder="Informe seu nome"
            onChange={e => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            id="user_email"
            placeholder="Informe seu email"
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            id="user_password"
            placeholder="Informe sua senha"
            onChange={e => setData({ ...data, password: e.target.value })}
          />
          <input
            type="password"
            id="user_password"
            placeholder="Confirme sua senha"
            onChange={e => setData({ ...data, confirmPassword: e.target.value })}
          />
          <input
            type="submit"
            value="Cadastrar"
          />
        </form>
      </div>
    </Container>
  );
}

export default SignUp;