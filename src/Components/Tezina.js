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
                <Route exact path="/Forme/TezKru" component={TezKru} />
                <Route exact path="/Forme/TezKva" component={TezKva} />
                <Route exact path="/Forme/Forme/TezCjev" component={TezCjev} />
                <Route exact path="/Forme/TezPravokutneCjevi" component={TezPravokutneCjevi} />
                <Route exact path="/Forme/OkrugliProfil" component={OkrugliProfil} />
                <Route exact path="/Forme/PravokutniProfil" component={PravokutniProfil} />
                <Route exact path="/Forme/TablicaMaterijala" component={TablicaMaterijala} />
              </Switch> 
            </React.Fragment>         
        
      );
   }
}
export default Tezina;