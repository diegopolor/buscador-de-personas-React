import React from 'react';

class PruebaReact extends React.Component {
    
    constructor(props, check){
        super(props);
        this.state = {check: "password"};  
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        let checked = e.target.checked;
        this.setState( {check : checked ? "text" : "password"})
    }

    render(){      
        return(
            <React.StrictMode>
                <h3>Escribe tu Contraseña:</h3>
                <input type= {this.state.check} name = "nombre"/> <br/>
                <input type = "checkbox" onClick = {this.handleClick}/>   
                <label>Mostrar contraseña</label>   
            </React.StrictMode>
        )
    }
}

export default PruebaReact;