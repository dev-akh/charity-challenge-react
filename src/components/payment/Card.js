import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { storePayment } from '../../reducer/actions/creator';
import Option from './Option';

const Card = ({ charity }) => {

  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);
  const [showPay, setShowPay] = useState(false);
  const [selectedAmount, setSelectAmount] = useState(0);
  const [selectAmountError, setselectAmountError] = useState('');

  const setPaymentAmount = (amount) => {
    setselectAmountError('');
    setSelectAmount(amount);
  }

  const toggleShowPay = () => {
    setShowPay(!showPay);
  };

  const handlePayment = () => {
    if(selectedAmount == 0) {
      setselectAmountError("Select a amount to make this donation!");
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
        dispatch(storePayment(payment));
        window.location.reload(true);
      }
    });
  }

  return (
    <div className="paymentCards shadow rounded" >
      {showPay && (
        <Option toggleShowPay={toggleShowPay} setPaymentAmount={ setPaymentAmount } handlePayment={handlePayment} selectAmountError={selectAmountError}/>
      )}
      <img src='/images/charities/save-the-children.jpeg' className='w-100' alt='Save the Children'/>
      <Row className='p-4'>
        <Col> {charity.name} </Col>
        <Col className='text-end'> 
          <Button className='btn btn-sm btn-primary bg-white text-primary' onClick={toggleShowPay} >Donate</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
