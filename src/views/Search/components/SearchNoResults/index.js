import './styles.css'


const  SearchNoResult = ({texto})=>(
    <h4 className = "search-noResults">
        No se econtraron resultados para 
        <span style = {{"color" : "red"}}> {texto}</span>
    </h4>
)

export default SearchNoResult;