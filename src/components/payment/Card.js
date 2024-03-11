import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { storePayment } from '../../reducer/actions/creator';
import Option from './Option';

const Card = ({ charity }) => {

  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);
  const error = useSelector((state) => state.error);
  const [showPay, setShowPay] = useState(false);
  const [selectedAmount, setSelectAmount] = useState(0);
  const [selectAmountError, setselectAmountError] = useState('');

  const setPaymentAmount = (amount) => {
    setselectAmountError('');
    setSelectAmount(amount);
  }

  const toggleShowPay = () => {
    setShowPay(!showPay);
    setSelectAmount(0);
  };

  const handlePayment = () => {
    if(selectedAmount == 0) {
      setselectAmountError("Select an amount to make this donation!");
      return;
    }
    const largestId = payments.reduce((maxId, payment) => Math.max(maxId, payment.id), -Infinity);
    const payment = {
      "charitiesId": charity.id,
      "amount"     : selectedAmount,
      "currency"   : "THB",
      "id"         : largestId + 1
    };
    Swal.fire({
      title: "Donation Confirm.",
      text: "Are you sure you want to make this donation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          dispatch(storePayment(payment));
          if(error == null) {
            Swal.fire({
              title: "You did great thing!",
              text: "Your donation makes the world better. Thank you!",
              icon: "success"
            });
            setShowPay(!showPay);
            setSelectAmount(0);
          }
        } catch (error) {
          console.error("An error occurred while dispatching payment:", error);
        }
      }
    });
  }

  return (
    <div className="paymentCards shadow rounded">
      <Option showPay={showPay} toggleShowPay={toggleShowPay} setPaymentAmount={ setPaymentAmount } handlePayment={handlePayment} selectAmountError={selectAmountError} currency ={charity.currency}/>
      <img src={'/images/' + charity.image ?? '/charities/save-the-children.jpeg'} className='w-100 charity-image' alt={charity.name}/>
      <Row className='p-4'>
        <Col xs lg={8}> {charity.name} </Col>
        <Col className='text-end'> 
          <Button className='btn btn-sm btn-primary bg-white text-primary' onClick={toggleShowPay} >Donate</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
