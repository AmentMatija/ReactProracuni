import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const PMaterijal = ({name, gustoca, id}) => {
  
  return (
      <Container>
        <Row>
          <Col>
            <p>{name}</p>
          </Col>
          <Col>
            <p>{gustoca}</p>
          </Col>
          <Col>
            <p>g/cm&#179;</p>
          </Col>
          
        </Row>
      </Container>
  );
}

export default PMaterijal;