import { useState } from 'react'

import './styles.css'
import data from '../../data/data.json'

import SearchBox from  './components/SearchBox'
import SearchNoResult from './components/SearchNoResults'
import SearchResult from './components/SearchResults'

const Search = ()=>{
    const [inSearch, setInSearch] = useState(false) //estado de si ya envio la busqueda
    const [searchText, setSearchText] = useState("") //texto ingresado para buscar
    const [results, setResults] = useState([1]) //resultados filtrados

    //se ejecuta cuando se hace la peticion de la busq
    const SendSearch = (e, text)=>{
        e.preventDefault();
        setInSearch(true);
        const textLower = text.toLowerCase()
        //filtra la infomacion de data con los condicionales pasados
        const filterData = data.filter((user)=> 
            user.name.toLowerCase().includes(textLower) ||
            user.email.toLowerCase().includes(textLower) ||
            user.username.toLowerCase().includes(textLower) 
        )   
        setSearchText(text)
        setResults(filterData) 
    }

    //devuelve true o false si dependiendo de si hay resultados de la busqueda
    const noResults = ()=> {
        const isResults = results.length < 1 ? true : false;
        return isResults
    }

    return(
        <div className = "search">
            <SearchBox onSendSubmit = {SendSearch}/>      
            { 
                noResults() ? 
                    <SearchNoResult texto = {searchText} /> 
                    :!searchText.length ?
                        undefined
                        :inSearch && 
                            <SearchResult datos = {results}/> 
            }        
        </div>
    )
}
   

    


export default Search;