import NavBar from './components/NavBar';
import Catalogo from './pages/Catalogo';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const Rotas = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/catalogo">
                    <Catalogo />
                </Route>
            </Switch>
        </Router>
    );
};

export default Rotas;
