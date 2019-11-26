import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default class TezKru extends React.Component {
	state={
		promjer: '',
		dPlo: '',
		gustocaMaterijala:'7.85',
	}

	onSubmit= (e) =>{
		let gusM=this.state.gustocaMaterijala;
		let debljina=this.state.dPlo;					
		let promjer=this.state.promjer;
		let tez=((promjer/2)*(promjer/2)*3.14159*debljina*gusM)/1000000;
		tez=(tez).toFixed(2);							
		this.setState({tezinaPloce: tez + " Kg"});					
	};

	render(){
		return(
			<div>
			<h1 className="text-center">Plosnata okrugla ploča</h1>
			  <Container>
			    <Row>
			      <Col xs={12} md={4}>
			        <img 
			          alt="Plosnata okrugla ploca" 
			          src='/img/plosnataOkrugla.png'
			          className="img-fluid" />
			      </Col>

				  <form>
			        <Col xs={12} md={8}>
			          <Row>
			            <Col xs={5}><p>Debljina ploče(S):</p></Col>
			            <Col xs={4}>
			              <input			              
				           value={this.state.dPlo}  
				            type="number" 
				            onChange={e => this.setState({dPlo: e.target.value})} />		        
				   	    </Col>
				   	    <Col xs={3}><p>mm</p></Col>	          
			          </Row>

			          <Row>
			     	    <Col xs={5}><p>Promjer(D):</p></Col>
			            <Col xs={4}>			        
				          <input 
				           value={this.state.promjer}
				           type="number"
				           onChange={e => this.setState({promjer: e.target.value})} />			        
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
			  <br/><br/><br/>	
  			</div> 
		
		);
	}
	
}
	
  			