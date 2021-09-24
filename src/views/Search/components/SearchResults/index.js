import './styles.css'

import SearchResultsItems from "../SearchResultsItems"

const SearchResults = ({datos}) => (

    <div className = "search-results">
        {datos.map((result) =>(
            <SearchResultsItems key  = {result.id} results = {result} />   
        ))}
    </div>
)

export default SearchResults;