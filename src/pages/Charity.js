import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PaymentCard from '../components/payment/Card';
import './Charity.css'

const Charity = ({ totalDonate, charities, error }) => {
  const paymentCards = charities.map((charity, i) => (
    <Col key={i} xs="12" lg="6" className='p-3' >
      <PaymentCard key={i} charity={charity} />    
    </Col>
  ));

  return (
    <Container>
      <Row> 
        <Col className='text-center mt-3'>
          <h1>Omise Tamboon React</h1>
          <p>All donations: {totalDonate}</p>
        </Col>
      </Row> 
      <Row> 
        <Col> <p className='error-message'>{error}</p> </Col>
      </Row>
      <Row> 
        {paymentCards}
      </Row>
    </Container>
  );
};

export default Charity;

