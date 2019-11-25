import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default class TezKru extends React.Component {
	state={
		duzinaP: '',
		sirinaP: '',
		dPlo: '',
		gustocaMaterijala:'7.85',
	}

	onSubmit= (e) =>{
		let gusM=this.state.gustocaMaterijala;
		let debljina=this.state.dPlo;					
		let duzina=this.state.duzinaP;
		let sirina=this.state.sirinaP;
		let tez=(sirina*duzina*debljina*gusM)/1000000;
		tez=(tez).toFixed(2);							
		this.setState({tezinaPloce: tez + " Kg"});					
	};

	render(){
		return(
			<div>
			<h1 className="text-center">Plosnata kvadratna ploča</h1>
			<Container>
			  <Row>
			    <Col xs={12} md={4}>
			      <img 
			        alt="plosnati pravokutni celik"
			        src='/img/plosnataPloca.png'
			        className="img-fluid" />
			    </Col>

				<form>
			      <Col xs={12} md={8}>
			        <Row>
			          <Col xs={5}><p>Širina(X):</p></Col>
			          <Col xs={4}>
			            <input			              
				          value={this.state.sirinaP} 
				          type="number" 
				          onChange={e => this.setState({sirinaP: e.target.value })} />			        
				   	  </Col>
				   	  <Col xs={3}><p>mm</p></Col>	          
			        </Row>

					<Row>
			     	  <Col xs={5}><p>Debljina ploče(Y):</p></Col>
			          <Col xs={4}>			        
				        <input 
				          value={this.state.dPlo} 
				          type="number"
				          onChange={e => this.setState({dPlo: e.target.value})} />				        
			          </Col>
			          <Col xs={3}><p>mm</p></Col>	          
			        </Row>

					<Row>
			     	  <Col xs={5}><p>Duzina(L):</p></Col>
			          <Col xs={4}>			        
				        <input 
				          value={this.state.duzinaP}
				          type="number"
				          onChange={e => this.setState({duzinaP: e.target.value})} />		        
			          </Col>
			          <Col xs={3}><p>mm</p></Col>	          
			        </Row>
			
			        <Row>
			          <Col xs={5}>Gustoća materijala:</Col>
			          <Col xs={4}>
			            <input 
				          value={this.state.gustocaMaterijala}
				          type="number"
				          onChange={e => this.setState({gustocaMaterijala: e.target.value})} />
				      </Col>
				      <Col xs={3}><p>g/cm&#179;</p></Col>
			        </Row>
		       
			        <Row>
			          <Col>
			            <button
			              type="button" 
			              className="btn btn-dark" 
			              onClick={e => this.onSubmit(e)}>Izračunaj 
			            </button>
			          </Col>
		        		        
			          <Col>
			          	<h2>{this.state.tezinaPloce}</h2>
			          </Col>
			        </Row>
		       
		          </Col> 
			      </form>
			    </Row>
			  </Container>
  			</div>  			
		);
	}	
}
