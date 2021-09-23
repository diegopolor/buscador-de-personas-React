import { useState } from "react";

const FormLogin = () =>{
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState ("password")
 
    const handleEmailChange = (e)=> setEmail(e.target.value);
    const handlePassChange = (e)=>setPassword(e.target.value);
    const showPassCheck =(e)=>setShowPass(e.target.checked ? "text" : "password");
    const sendData = (e) => {
        e.preventDefault()
        console.log("Email: " + email + " Password: "+ password)
    }  

    return(
        <form className = "login-form" onSubmit = {sendData} >     
           <label className = "login-label">
                Correo: 
                <input className="login-input" type="email" value ={email} onChange= {handleEmailChange}/>
           </label>
           <label className = "login-label">
                Contraseña:
                <input className="login-input" type ={showPass} value = {password} onChange = {handlePassChange} />
            </label>
            <label className = "login-check"> 
                <input type = "checkbox" onClick = {showPassCheck}/>
                Mostrar contraseña    
            </label>     
            <input type = "submit" value="Iniciar sesión" className = "login-button"/>
            <a className = "login-link" href = "#hola">¿Olvidaste tu contraseña?</a>    
        </form>
    );
}

export default FormLogin;