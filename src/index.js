//Se importa react, reactDom (para manipular el dom de la pagina), App (App.js)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//Se retorna al div root el contenido que retorna el archivo App.js
ReactDOM.render(<div><App/></div>, document.getElementById('root'));