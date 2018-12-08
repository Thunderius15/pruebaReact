//Se importa react y component
import React,{Component} from 'react';
//Se genera una clase llamada app, que extiende de component
class App extends Component
{
    //Metodo constructor de la clase App
    constructor()
    {
        //Obtiene las caracteristicas de component
        super();
        //Variables globales del archivo App.js
        this.state = {
            //Arreglo que almacenara los datos de los ingredientes
            datosIngrediente: [],
            //Variable que almacenara una cadena
            mensaje: ""
        };
        //Necesario para que no falle la funcion botonazo
        this.botonazo=this.botonazo.bind(this);
        //Necesario para que no falle la funcion botonazoParametros
        this.botonazoParametro=this.botonazoParametro.bind(this);
    }
    //Funcion botonazo
    botonazo()
    {
        //Se utiliza para acceder al metodo prueba del web service
        fetch('http://localhost:8080/prueba')
        //convierne la respuesta del web service en un json
        .then(response => response.json())
        //cada elemento del json lo tomara en la variable ingrediente
        .then((ingrediente) => {
            //envia valores a las variables globales
            this.setState({
                //agrega el elemento del json al arreglo de datosIngrediente (sigue siendo un objeto json)
                datosIngrediente: ingrediente
            });
            //ciclo for con el arreglo datosIngrediente (solo para mostrar en consola)
            this.state.datosIngrediente.forEach( function(valor, indice) {
                //muestra el indice y el campo nombreIngrediente del objeto json
                console.log("En el índice " + indice + " hay este valor: " + valor.nombreIngrediente + " - "+valor.nombreImagen)
            });
        });
    }
    //funcion botonazoParametro
    //obtiene el contenido del input valor
    //si tiene contenido
    //Se utiliza para acceder al metodo pruebaParametro del web service y se le envia el valor
    //convierne la respuesta del web service en un json
    //cada elemento del json lo tomara en la variable campo
    //envia valores a las variables globales
    //agrega el elemento del json a la cadena de mensaje (es cadena porque se esta obteniendo el campo mensaje)
    //muestra el mensaje
    //si no tiene contenido
    //similar al required
    botonazoParametro()
    {
        var contenido=document.getElementById("valor").value
        if(contenido)
        {
            fetch('http://localhost:8080/pruebaParametro?valor='+contenido)
            .then(response => response.json())
            .then((campo) => {
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
    //Metodo necesario en un componente
    render()
    {
        //Declaracion de constante ingredientes, y se le asigna el resultado del recorrido map(similar a forEach, pero requiere metodo return)
        const ingredientes = this.state.datosIngrediente.map((ingrediente,i) => {
            return(
                //retornara 1 div para cada elemento del arreglo datosIngrediente en las variables globales, si no se coloca key falla
                //Se asigna el campo nombreIngrediente del elemento (recordar que se almacenaron como objetos en el arreglo)
                //Se asigna un guion entre los 2 datos
                //Se asigna el campo nombreImagen del elemento (recordar que se almacenaron como objetos en el arreglo)
                <div key={i}>
                    {ingrediente.nombreIngrediente}
                    " - "
                    {ingrediente.nombreImagen}
                </div>
            );
        })
         //Declaracion de constante mensaje, y se le asigna la cadena mensaje de las variables globales
        const mensaje = <div>{this.state.mensaje}</div>
        //Metodo necesario en un render
        //Se declara un input tipo button con un onclick que llama a la funcion botonazo
        //Se declara un label y se asigna al input con nombre valor
        //Se declara un input tipo number con un name y id valor
        //Se declara un input tipo button con un onclick que llama a la funcion botonazoParametro
        //Se muestra el contenido de la constante ingredientes que se genero anteriormente
        //Se muestra el contenido de la constante mensaje que se genero anteriormente
        return(
            //retornara 1 div
            <div>
                <input type="button" value="Dale click" onClick={this.botonazo}></input>
                <br/>
                <label htmlFor="valor">Ingresa un Valor: </label>
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
//Se utiliza como un return de un metodo java, que manda el contenido del return dentro del render al lugar donde llamen al componente App.js
export default App;