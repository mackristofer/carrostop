import './styles.css';
import CarImg from 'assets/img/car-catalogo.svg';

const CatalogoCardCar = () => {
    return (
     <div className='base-card mb-3 catalogo-container'>
        <img src={CarImg} alt='Car catalogo' />
        <h4>Audi Supra TT</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, facere?</p>
        <button className='btn btn-primary'>COMPRAR</button>
     </div>
    );
};

export default CatalogoCardCar;
