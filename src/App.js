import React, {Component} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from 'react-router-dom'

import Navbarb from "./Components/Navbarb";
import Pocetna from "./Components/Pocetna";
import Volumen from "./Components/Volumen";
import Tezina from "./Components/Tezina";
import Izometrija from "./Components/Izometrija";
import Footer from "./Components/Footer";

import TezKru from "./Components/Forme/TezKru";
import TezKva from "./Components/Forme/TezKva";
import TezCjev from "./Components/Forme/TezCjev";
import TezPravokutneCjevi from "./Components/Forme/TezPravokutneCjevi";
import OkrugliProfil from "./Components/Forme/OkrugliProfil";
import PravokutniProfil from "./Components/Forme/PravokutniProfil";
import TablicaMaterijala from "./Components/Forme/TablicaMaterijala";
class App extends Component {
  render() {
    return ( 
      <React.Fragment>    
        <Navbarb/>
        <Switch>
        <div className="srednjiDio">
          <Route exact path="/" component={Pocetna} />
          <Route exact path="/Components/Volumen" component={Volumen} />
          <Route exact path="/Components/Tezina" component={Tezina} />
          <Route exact path="/Components/Izometrija" component={Izometrija} />

          <Route exact path="/Components/Forme/TezKru" component={TezKru} />
          <Route exact path="/Components/Forme/TezKva" component={TezKva} />

          <Route exact path="/Components/Forme/TezCjev" component={TezCjev} />
          <Route exact path="/Components/Forme/TezPravokutneCjevi" component={TezPravokutneCjevi} />

          <Route exact path="/Components/Forme/OkrugliProfil" component={OkrugliProfil} />
          <Route exact path="/Components/Forme/PravokutniProfil" component={PravokutniProfil} />
          <Route exact path="/Components/Forme/TablicaMaterijala" component={TablicaMaterijala} />
        </div>
        </Switch> 
        <Footer/>        
      </React.Fragment>     
    );
  }
}

export default App;
