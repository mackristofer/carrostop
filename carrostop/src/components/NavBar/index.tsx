import 'bootstrap/js/src/collapse.js';
import './styles.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-secondary main-nav">
      <div className="container text-primary">
        <h4>Carros Top</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id='carrostop-navbar'>
          <ul className="navbar-nav offset-md-2 ul-style">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/catalogo">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
