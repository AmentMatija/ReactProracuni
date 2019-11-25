import React from 'react';
import ListaMaterijala from "./ListaMaterijala";
import Search from "./Search";

const PMaterijal =({materijali}) =>{
  const komponentaMaterijala = materijali.map((mat,i) =>{
  	return <ListaMaterijala id={materijali[i].id} name={materijali[i].name} gustoca={materijali[i].gustoca} />
  })

  return(
  	<div>
  	<h2 className="text-center">Tablica gustoće materijala</h2>  
  	<Search/>	  
  	{komponentaMaterijala}
  	</div>
  );
}

export default PMaterijal;