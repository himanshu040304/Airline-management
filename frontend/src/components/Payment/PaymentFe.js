
import React, { useState } from 'react';
import api from '../API/api'

function Payment({ amount }) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    console.log('Payment button clicked');
    try {
      const orderResponse = await api.post('/secure/payment/order', {
        amount: amount,
        currency: 'INR',
        receipt: 'receipt#1',
        notes: { flight: 'Flight XYZ' }
      });

      console.log('Order response:', orderResponse.data);
      const { id: order_id } = orderResponse.data;

      const options = {
        key: 'rzp_test_dWGuTHp9rBWXeX',
        amount: amount * 100,
        currency: 'INR',
        name: 'Flight Booking',
        description: 'Test Transaction',
        order_id: order_id,
        handler: async (response) => {
          console.log('Payment response:', response);
          try {
            await api.post('/secure/payment/success', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });
            setPaymentSuccess(true);
          } catch (error) {
            console.error('Error in payment success:', error);
          }
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '9999999999'
        },
        notes: {
          address: 'Your Address'
        },
        theme: {
          color: '#F37254'
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="container">
      <h2>Flight Price: ₹{amount}</h2>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentSuccess && <p>Payment Successful!</p>}
    </div>
  );
}

export default Payment;
