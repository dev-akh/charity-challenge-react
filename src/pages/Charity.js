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

  const style = {
    color: 'red',
    margin: '1em 0',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
  };

  // const donate = this.props.donate;
  // const message = this.props.message;

  return (
    <Container>
      <Row> 
        <Col className='text-center'>
          <h1>Tamboon React</h1>
          <p>All donations: {totalDonate}</p>
        </Col>
      </Row> 
      <p style={style}>{error}</p>
      <Row> 
        {paymentCards}
      </Row>
    </Container>
  );
};

export default Charity;

