import {Switch, Route} from 'react-router-dom'

import React,  {Component} from 'react';
import TezKru from "./Components/Forme/TezKru";
import TezKva from "./Components/Forme/TezKva";
import TezCjev from "./Components/Forme/TezCjev";
import OkrugliProfil from "./Components/Forme/OkrugliProfil";
import TezPravokutneCjevi from "./Components/Forme/TezPravokutneCjevi";
import PravokutniProfil from "./Components/Forme/PravokutniProfil";
import TablicaMaterijala from "./Components/Forme/TablicaMaterijala";

class Tezina extends Component {
  render() {
      return (      
          <React.Fragment>             
              <Switch>                          
                <Route exact path="/Components/Forme/TezKru" component={TezKru} />
                <Route exact path="/Components/Forme/TezKva" component={TezKva} />
                <Route exact path="/Components/Forme/Forme/TezCjev" component={TezCjev} />
                <Route exact path="/Components/Forme/TezPravokutneCjevi" component={TezPravokutneCjevi} />
                <Route exact path="/Components/Forme/OkrugliProfil" component={OkrugliProfil} />
                <Route exact path="/Components/Forme/PravokutniProfil" component={PravokutniProfil} />
                <Route exact path="/Components/Forme/TablicaMaterijala" component={TablicaMaterijala} />
              </Switch> 
            </React.Fragment>         
        
      );
   }
}
export default Tezina;