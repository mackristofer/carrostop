import CatalogoCardCar from 'components/CatalogoCardCar';
import './styles.css';

const Catalogo = () => {
    return (
        <div className='container'>
            <div className='d-flex mt-3 base-card input-container'>
                <input type='text' placeholder='Digite sua busca' />
                <button className='btn btn-primary'>BUSCAR</button>
            </div>
            <div className='row'>
                <div className='col-md-6 col-lg-4 col-xl-3'><CatalogoCardCar /></div>
                <div className='col-md-6 col-lg-4 col-xl-3'><CatalogoCardCar /></div>
                <div className='col-md-6 col-lg-4 col-xl-3'><CatalogoCardCar /></div>
                <div className='col-md-6 col-lg-4 col-xl-3'><CatalogoCardCar /></div>
                <div className='col-md-6 col-lg-4 col-xl-3'><CatalogoCardCar /></div>
                <div className='col-md-6 col-lg-4 col-xl-3'><CatalogoCardCar /></div>
                <div className='col-md-6 col-lg-4 col-xl-3'><CatalogoCardCar /></div>
                <div className='col-md-6 col-lg-4 col-xl-3'><CatalogoCardCar /></div>
            </div>
        </div>
    );
};

export default Catalogo;
