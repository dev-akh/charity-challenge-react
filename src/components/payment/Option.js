import React from 'react';

const Option = ({ toggleShowPay, setPaymentAmount, handlePayment, selectAmountError }) => {

  const payments = [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={j} className='mx-2'>
      <input
        type="radio"
        name="payment"
        onClick={()=>setPaymentAmount(amount)}
      /> 
      {amount}
    </label>
  ));

  return (
    <div className="payment-options" >
      <div className='text-end px-2'>
        <button type='button' className='btn btn-link text-decoration-none text-dark' onClick={()=>toggleShowPay(false)}><b>x</b></button>
      </div>
      <div className='paymentOptions'>
        <div className='text-center'>
          <p className='m-0 p-2'>Select the amount to donate(USD)</p>
          {payments}
          <p className='text-danger'>{selectAmountError}</p>
          <div className='p-3'>
            <button className='btn btn-sm btn-outline-primary rounded-1 px-3' onClick={handlePayment}>Pay</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Option;
