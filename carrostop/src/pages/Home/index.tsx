import { useHistory } from 'react-router-dom';
import HomeCardCar from 'components/HomeCardCar';
import './styles.css';

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/catalogo');
  };
  return (
    <div className="container">
      <HomeCardCar />
      <div className="btn-card">
        <button className="btn btn-primary" onClick={handleClick}>
          VER CATÁLOGO
        </button>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
