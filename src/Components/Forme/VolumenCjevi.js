import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default class VolumenCjevi extends React.Component {
	state={
		unutarnjiD: '',
		lCjevi: '',
		volumen:'',
	}

	onSubmit= (e) =>{
		let duzina=this.state.lCjevi;					//prijenos vrijednosti iz stanja u varijablu
		let promjer=this.state.unutarnjiD;
		duzina=duzina*10;								//pretvorba u decimetre
		promjer=promjer/100;
		let vol=(promjer/2)*(promjer/2)*3.14159*duzina;	//izracun volumena
		vol=(vol).toFixed(2);							//zaokruzivanje na dvije decimale
		this.setState({volumen: vol + " Litara"});		//prijenos vol vrijednosti u stanje
		
		
	};
	render(){
		return(
			<div>
			<h1 className="text-center">Zapremnina cjevovoda</h1>
			  <Container>
			  	<Row>		
					<form>
					  <Col xs={12} md={8}>
					    <Row>
						    <Col xs={5}><p>Dužina cjevovoda:</p></Col>
						    <Col xs={4}>
						      <input			              
							  value={this.state.lCjevi} 
							  type="number" 
							     onChange={e => this.setState({lCjevi: e.target.value})} />		        
							 </Col>
							 <Col xs={3}><p>metara</p></Col>	          
					    </Row>

						 <Row>
						    <Col xs={5}><p>Unutarnji promjer:</p></Col>
						    <Col xs={4}>
						      <input			              
							   value={this.state.unutarnjiD}
							   type="number" 
							   onChange={e => this.setState({unutarnjiD: e.target.value})} />		        
							 </Col>
							 <Col xs={3}><p>mm</p></Col>	          
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
					      <h2>{this.state.volumen}</h2>
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
