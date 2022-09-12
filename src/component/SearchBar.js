import React, { useState } from "react";



const SearchBar = ({onTermSubmit}) => {
    const [term,setTerm] = useState('')

    const onSubmitForm = (event) => {
        event.preventDefault()
        onTermSubmit(term)
    }


    return(
        <div className="search-bar ui segment">
                <form onSubmit={onSubmitForm} className="ui form">
                    <div className="field">
                        <label>Enter Text To Search</label>
                        <input type='text' value={term} onChange={(event) => setTerm(event.target.value)} />
                    </div>

                </form>

            </div>

    )
}


export default SearchBar