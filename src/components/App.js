import React,{Component} from 'react';

class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            nombreIngrediente: []
        };
        this.botonazo=this.botonazo.bind(this);
    }
    botonazo()
    {
       //alert("Testo");
       fetch('http://localhost:8080/prueba')
    .then(response => response.json()).then((nombreIngrediente) => {
      console.log(nombreIngrediente);
      console.log(nombreIngrediente.length);
      this.setState({
        nombreIngrediente: nombreIngrediente});});
    }
    render()
    {
        return(
            <div>
                <input type="button" value="Dale click" onClick={this.botonazo}></input>
            </div>
        );
    }
}
export default App;