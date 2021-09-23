import FormLogin from "./formLogin"
import './css/login.css';

const Login = ()=>(
    <div className = "login">
        <h2 style = {{"marginTop": "0"}}>Iniciar Sesión</h2>
        <FormLogin />         
    </div>
)

export default Login;