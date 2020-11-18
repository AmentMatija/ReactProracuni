import React,  {Component} from 'react';


export default class Pocetna extends Component {
  render() {
	    return (
	      <div className="m-3">
	   		<h1>Dobrodošli!</h1>
	   	
	   		<p>Ovdje možete izračunati zapremninu cjevovoda te težinu cjevi, ploča i punih profila.</p>
	   		<p>Pri izračunu težine, zadana je gustoća lijevanog čelika, a u tablici gustoće materijala mogu se pronaći vrijednosti za neke najčešće vrste materijala.</p>
	   		<p>Vrijednosti nisu egzaktne već variraju ovisno o gustoći konkretnog materijala.</p>
	  
	      </div>
	   	);
	}
}
