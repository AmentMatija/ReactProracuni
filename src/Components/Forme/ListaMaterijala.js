import React from 'react';
import PMaterijal from './PMaterijal';

const ListaMaterijala = ({materijali}) => {
	return (
	 <div>
	 {
	   materijali.map((mat, i) => {
	   	return (
	   	  <PMaterijal
	   	   key={i}
	   	   id={materijali[i].id}
	   	   name={materijali[i].name}
	   	   gustoca={materijali[i].gustoca}/>
	   	);
	   })
	}
	 </div>

	);
}
export default ListaMaterijala;