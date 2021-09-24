import { useEffect, useState } from "react";

const FormLogin = () =>{

    //declaracion de estados 
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState ("password")
    const [isLogged, setIsLogged] = useState(false)
    
    const handleEmailChange = (e)=> setEmail(e.target.value);
    const handlePassChange = (e)=>setPassword(e.target.value);
    const showPassCheck =(e)=>setShowPass(e.target.checked ? "text" : "password");
    const sendData = (e) => {
        e.preventDefault()
        setIsLogged(email !== "polodiego82@gmail.com" || password !== "holamundo2021" ? true : false)  
    }  

    //renderizado condicional
    const isLogeedRedender =() => isLogged && <h5 className = "login-link">Credenciales incorrectas</h5> 
    
    //ComponentDidMount
    useEffect(()=>{
        console.log("Primer Render ")
    }, [])

    //ComponentDidUpdate
    useEffect(()=>{
        console.log("cambio el showPass");
    }, [showPass])

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
            {isLogeedRedender()}
        </form>
    );
}

export default FormLogin;