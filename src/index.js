//Se importa react, reactDom (para manipular el dom de la pagina), App (App.js)
import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';
import NuestroMenu from './components/NuestroMenu';
import Contacto from './components/Contacto';
import Menu from './components/Menu';

//Constante para hacer el cambio de vista con el menu
//Se carga el Menu dentro de la constante
//Con Route se indica que segun el url de la pagina, sera el componente que inyectara codigo al index
//exact path sirve para evitar que este activo el "/" y "/algo mas" al mismo tiempo (intenta eliminar la palabra exact y juega con el menu)
const routing = (
    <Router>
        <div>
            <Menu/>
            <Route exact path="/" component={App}/>
            <Route path="/menu" component={NuestroMenu}/>
            <Route path="/contacto" component={Contacto}/>
        </div>
    </Router>
)
//Se retorna al div root el contenido que retorna la constante routing
ReactDOM.render(<div>{routing}</div>, document.getElementById('root'));