import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const orderDetails = {
    subtotal: 2200,
    deliveryFee: 200,
    serviceFee: 200,
    tax: 300,
    total: 9900
  };

  const handleProceedToCheckout = () => {
    // Store order data in sessionStorage or state management
    const checkoutData = {
      ...orderDetails,
      promoCode,
      specialInstructions,
      timestamp: Date.now() // eslint-disable-line 
    };
    
    sessionStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    
    // Navigate to payment page
    navigate('/my-orders/payment');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
      
      {/* Promo Code */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Add a Promo Code</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Code here"
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
            Login
          </button>
        </div>
      </div>

      {/* Order Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span>₦{orderDetails.subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Delivery Fee</span>
          <span>₦{orderDetails.deliveryFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Service Fee</span>
          <span>₦{orderDetails.serviceFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax</span>
          <span>₦{orderDetails.tax.toLocaleString()}</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₦{orderDetails.total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Special Instructions */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Special Instructions for Restaurant
        </label>
        <textarea
          placeholder="E.g no cream, loud to be spicy, have its text NONONONONO"
          className="w-full px-4 py-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={4}
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        />
      </div>

      {/* Proceed Button */}
      <button
        onClick={handleProceedToCheckout}
        className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;