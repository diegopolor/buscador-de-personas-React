import './styles.css'

const SearchResult = ({results}) =>(
       <div className = "search-resultsItems">
            <a href = "#s" ><h3>{results.name}</h3></a>
            <a href = "#web-{}">{results.website} </a>
            <hr />
            <p>Username : {results.username}</p>
            <p>Email : {results.email}</p>
            <p>Telefono: {results.phone}</p>
            
       </div>
    )

export default SearchResult;