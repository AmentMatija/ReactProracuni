import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const ListaMaterijala = (props) => {
	return (
	  <div>
	  	<Container>
	  	  <Row>
	  	    <Col>
	  	      <p>{props.name}</p>
	  	    </Col>
	  	    <Col>
	  	      <p>{props.gustoca}</p>
	  	    </Col>
	  	    <Col>
	  	      <p>g/cm&#179;</p>
	  	    </Col>
	  	  </Row>
	  	</Container>

	  </div>

	);
}
export default ListaMaterijala;