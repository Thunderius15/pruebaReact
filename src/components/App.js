/*Se importa react y component*/
import React,{Component} from 'react';
/*Se genera una clase llamada app, que extiende de component*/
class App extends Component
{
    /*Metodo constructor de la clase App*/
    constructor()
    {
        /*Obtiene las caracteristicas de component*/
        super();
        /*Variables globales del archivo App.js*/
        this.state = {
            /*Arreglo que almacenara los datos de los ingredientes*/
            datosIngrediente: [],
            /*Variable que almacenara una cadena*/
            mensaje: ""
        };
        /*Necesario para que no falle la funcion botonazo*/
        this.botonazo=this.botonazo.bind(this);
        /*Necesario para que no falle la funcion botonazoParametros*/
        this.botonazoParametro=this.botonazoParametro.bind(this);
    }
    botonazo()
    {
       //alert("Testo");
        fetch('http://localhost:8080/prueba')
        .then(response => response.json()).then((ingrediente) => {
            this.setState({
                datosIngrediente: ingrediente
            });
            this.state.datosIngrediente.forEach( function(valor, indice) {
                console.log("En el índice " + indice + " hay este valor: " + valor.nombreIngrediente + " - "+valor.nombreImagen)
            });
        });
    }
    botonazoParametro()
    {
        var contenido=document.getElementById("valor").value
        if(contenido)
        {
            //alert("Testo");
            fetch('http://localhost:8080/pruebaParametro?valor='+contenido)
            .then(response => response.json()).then((campo) => {
                this.setState({
                    mensaje: campo.mensaje
                });
                console.log(this.state.mensaje);
            });
        }
        else
        {
            alert("Es un Campo Requerido");
        }
    }
    render()
    {
        const ingredientes = this.state.datosIngrediente.map((ingrediente,i) => {
            return(
                <div key={i}>
                    {ingrediente.nombreIngrediente}
                    " - "
                    {ingrediente.nombreImagen}
                </div>
            );
        })
        const mensaje = <div>{this.state.mensaje}</div>
        return(
            <div>
                <input type="button" value="Dale click" onClick={this.botonazo}></input>
                <br/>
                <label for="valor">Ingresa un Valor: </label>
                <input type="number" name="valor" id="valor"></input>
                <br/>
                <input type="button" value="Enviar Valor" onClick={this.botonazoParametro}></input>
                <br/>
                {ingredientes}
                <br/>
                {mensaje}
            </div>
        );
    }
}
export default App;