import search from '../../../../assets/search.svg'
import micro from '../../../../assets/micro.svg'
import { useState } from 'react'

const SearchBox = ({onSendSubmit})=> {
    const [searchText, setSearchText] = useState ("")

    return(
        <div className="search-bottons">
            <div className = "search-logo"></div>
            <form onSubmit = {(e) => onSendSubmit(e, searchText)} className = "search-bar">
                <img src={search} alt = "search" />
                <input onChange = {(e)=>setSearchText(e.target.value)} value = {searchText}  className = "search-input" type = "text" placeholder = "Escribe el nombre de la persona, su email o username"/>
                <img src={micro} alt = "search" />
            </form>
        </div>
    )
}



export default SearchBox;