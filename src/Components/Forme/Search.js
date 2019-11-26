import React from 'react';

const Search = ({searchfield, searchChange}) => {
	return(
	<div className="text-center">
	  <input 
	    type = 'search'
	    placeholder= 'pretraži'
	    onChange={searchChange}/>
	</div>
	);

}
export default Search;