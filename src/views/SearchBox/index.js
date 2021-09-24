import './styles.css'
import search from '../../assets/search.svg'
import micro from '../../assets/micro.svg'

const Search = ()=>(
    <div className = "search">
        <div className="search-bottons">
            <div className = "search-logo"></div>
            <div className = "search-bar">
                <img src={search} alt = "search" />
                <input className = "search-input" type = "text" placeholder = "Buscar en google o escribir una URL"/>
                <img src={micro} alt = "search" />
            </div>
            
        </div>
    </div>
)

export default Search;