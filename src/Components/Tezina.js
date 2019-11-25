import {Switch, Route} from 'react-router-dom'

import React,  {Component} from 'react';
import TezKru from "./Forme/TezKru";
import TezKva from "./Forme/TezKva";
import TezCjev from "./Forme/TezCjev";
import OkrugliProfil from "./Forme/OkrugliProfil";
import TezPravokutneCjevi from "./Forme/TezPravokutneCjevi";
import PravokutniProfil from "./Forme/PravokutniProfil";
import TablicaMaterijala from "./Forme/TablicaMaterijala";

class Tezina extends Component {
  render() {
	    return (	    
	        <React.Fragment>  	         
              <Switch>                          
                <Route exact path="/TezKru" component={TezKru} />
                <Route exact path="/TezKva" component={TezKva} />
              	<Route exact path="/TezCjev" component={TezCjev} />
              	<Route exact path="/TezPravokutneCjevi" component={TezPravokutneCjevi} />
              	<Route exact path="/OkrugliProfil" component={OkrugliProfil} />
              	<Route exact path="/PravokutniProfil" component={PravokutniProfil} />
                <Route exact path="/TablicaMaterijala" component={TablicaMaterijala} />
              </Switch> 
            </React.Fragment> 	      
	   	  
	   	);
	 }
}
export default Tezina;