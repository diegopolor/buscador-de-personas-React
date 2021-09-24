import './styles.css'
import iconOptions from '../../assets/iconOptions.svg'




const Header = ()=> {
    return (
        <div className="header">
            <nav className = "header-nav">
                <a href="#a">Gmail</a>
                <a href="#b">Imágenes</a>
                <img src={iconOptions} />
                <img class = "header-logo" src = "https://play-lh.googleusercontent.com/FJ8e7NYhyjzrjuROUSpigJ1TQNnZKUDh6AZc1SFjiD665bZsxr_7zus0DzlHIrC6Lgk" alt = "perfil"/>
                
            </nav>  
        </div>
        
    )
}

export default Header;


