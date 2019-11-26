import React,  {Component} from 'react';
import ListaMaterijala from "./ListaMaterijala";
import {materijali} from "./materijali";
import Search from "./Search";

class tablicaMaterijala extends Component {
  constructor() {
    super()
    this.state = {
      materijali: materijali,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
  	this.setState({searchfield: event.target.value})
  	
  }

  render(){
  	const filtriraniMaterijali = this.state.materijali.filter(materijali =>{
  	  return materijali.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  	})
  	return(
  		<div>
  		  <h1 className="text-center">Tablica gustoće materijala</h1>
  		  <Search searchChange={this.onSearchChange} />
  		  <ListaMaterijala materijali={filtriraniMaterijali} />
  		</div>
  	);
  }
}

export default tablicaMaterijala;