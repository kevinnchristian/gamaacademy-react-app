import React, { useState, useCallback, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from '../../services/api';

interface IData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);

    api.post('auth/login', data)
      .then(response => {
        const sessionToken = JSON.stringify(response.data.token);
        localStorage.setItem('@gamaServiceToken', sessionToken);
        setLoad(false);
        toast.success('Login realizado com sucesso!', {
          hideProgressBar: false,
          onClose: () => navigate('/dashboard')
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
        <h5>Acesse o sistema:</h5>
        <form onSubmit={handleSubmit}>
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
            type="submit"
            value="Entrar"
          />
        </form>

        <Link
          to="/signup"
          className="anchor-signup"
        >
          Clique aqui para cadastrar
        </Link>
      </div>
    </Container>
  );
}

export default SignIn;