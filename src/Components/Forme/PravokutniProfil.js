import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default class TezKvaCjevi extends React.Component {
	state={
		lProfila: '',
		sirinaD: '',
		visinaD: '',
		gustocaMaterijala:'7.85',
	}

	onSubmit= (e) =>{	
		let gusM=this.state.gustocaMaterijala;					
		let duzina=this.state.lProfila;
		let sirinaCjevi=this.state.sirinaD;
		let visinaCjevi=this.state.visinaD;
		let vanjska=(sirinaCjevi*visinaCjevi*duzina*gusM)/1000000;
		let tez=(vanjska).toFixed(2);
									
		this.setState({tezinaKvaProfila: tez + " Kg"});					
	};

	render(){
		return(
			<div>
			  <h1 className="text-center">Pravokutni puni profil</h1>
			  <Container>
			    <Row>
			      <Col xs={12} md={4}>
			        <img 
			          alt="Pravokutni puni profil" 
			          src='/img/pravokutniCelik.png'
			          className="img-fluid" />
			      </Col>

			       <form>
			        <Col xs={12} md={8}>
			          <Row>
			            <Col xs={5}><p>Dužina(L):</p></Col>
			            <Col xs={4}>
			              <input			              
				            value={this.state.lProfila} 
				            type="number" 
				            onChange={e => this.setState({lProfila: e.target.value })} />			        
				   	    </Col>
				   	    <Col xs={3}><p>mm</p></Col>	          
			          </Row>
				
			          <Row>
			     	    <Col xs={5}><p>Širina(X):</p></Col>
			            <Col xs={4}>			        
				          <input 
				           value={this.state.sirinaD}
				           type="number"
				           onChange={e => this.setState({sirinaD: e.target.value})} />			        
			            </Col>
			            <Col xs={3}><p>mm</p></Col>	          
			          </Row>

			          <Row>
			     	    <Col xs={5}><p>Visina(Y):</p></Col>
			            <Col xs={4}>			        
				          <input 
				           value={this.state.visinaD}
				           type="number"
				           onChange={e => this.setState({visinaD: e.target.value})} />			        
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
			          	  <h2>{this.state.tezinaKvaProfila}</h2>
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
