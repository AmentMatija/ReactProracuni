import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default class TezCjev extends React.Component {
	state={
		vanjskiPromjer: '',
		debljinaStjenke: '',
		lCjev: '',
		gustocaMaterijala:'7.85',
	}

	onSubmit= (e) =>{
		let duzina=this.state.lCjev;
		let vanjskiD=this.state.vanjskiPromjer;
		let debljinaSt=this.state.debljinaStjenke;
		let gusM=this.state.gustocaMaterijala;
		
		let vanjska=(Math.pow((vanjskiD/2),2)*Math.PI*duzina*gusM)/1000000;
		let unutarnja=(Math.pow(((vanjskiD/2)-debljinaSt),2)*Math.PI*duzina*gusM)/1000000;
		let tez=(vanjska-unutarnja).toFixed(2);
								
		this.setState({tezinaCjevi: tez + " Kg"});					
	};

	render(){
		return(
			<div>
			<h1 className="text-center">Okrugla cjev</h1>
			  <Container>
			    <Row>
			      <Col xs={12} md={4}>
			        <img 
			          alt="Okrugla cjev" 
			          src='/img/okruglaCjev.png'
			          className="img-fluid" />
			      </Col>

			      <form>
			        <Col xs={12} md={8}>
			          <Row>
			            <Col xs={5}><p>Dužina(L):</p></Col>
			            <Col xs={4}>
			              <input			              
				            value={this.state.lCjev} 
				            type="number" 
				            onChange={e => this.setState({lCjev: e.target.value})} />		        
				   	    </Col>
				   	    <Col xs={3}><p>mm</p></Col>	          
			          </Row>

					  <Row>
			     	    <Col xs={5}><p>Vanjski promjer(D):</p></Col>
			            <Col xs={4}>			        
				          <input 
				           value={this.state.vanjskiPromjer}
				           type="number"
				           onChange={e => this.setState({vanjskiPromjer: e.target.value})} />			        
			            </Col>
			            <Col xs={3}><p>mm</p></Col>	          
			          </Row>
		        
			          <Row>
			     	    <Col xs={5}><p>Debljina stjenke(S):</p></Col>
			            <Col xs={4}>			        
				          <input 
				           value={this.state.debljinaStjenke}
				           type="number"
				           onChange={e => this.setState({debljinaStjenke: e.target.value})} />		        
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
			          	  <h2>{this.state.tezinaCjevi}</h2>
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
