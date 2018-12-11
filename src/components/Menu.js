//se importa react, component, el archivo css del menu, y NavLink (similar a la etiqueta <a>,solo que cuenta con una validacion para detectar si esta opcion esta activa o no)
import React,{Component} from 'react';
import '../css/Menu.css';
import {NavLink} from 'react-router-dom';

//activeClassName detecta si esa opcion esta activa o no en el menu
//NavLink sustituye a
//to sustituye href
class Menu extends Component
{
    render(){
        return(
            <div className="navbar">
                <NavLink exact to="/" activeClassName="active">Bienvenido</NavLink>
                <NavLink to="/menu" activeClassName="active">¡Arma tu Pizza!</NavLink>
                <NavLink to="/sucursales" activeClassName="active">Nuestras Sucursales</NavLink>
                <NavLink to="/promociones" activeClassName="active"> Nuestras Promociones</NavLink>
                <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
            </div> 
        );
    }
}
export default Menu;