import ReactLoading from 'react-loading';
import { Container } from './style';

const Loader: React.FC = () => {
  return (
    <Container>
      <ReactLoading type='bars' color='#68DE5A' />
    </Container>
  );
}

export default Loader;