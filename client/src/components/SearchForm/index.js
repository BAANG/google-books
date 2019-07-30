import React from 'react';

function SearchForm(props){
    
    return(
    <div id='search-form'>

        <p className='lead'>Book Search</p>
        <br />
        <input name='title'
            placeholder='Search for a book...'
            type='text'
            onChange={props.handleInputChange}></input>
        <button
            onClick={props.handleFormSubmit}
            type='submit'
        >   Search
        </button>
    </div>
    )
}

export default SearchForm