import React,  {Component} from 'react';

import {materijali} from "./materijali";
import PMaterijal from "./PMaterijal";

export default class tablicaMaterijala extends Component {
  render() {
	    return (
	    <PMaterijal materijali={materijali}/>
	   	);
	 	}
	}


