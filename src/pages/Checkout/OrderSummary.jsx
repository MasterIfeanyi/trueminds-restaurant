import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@/components/Button"
import TextArea from "@/components/TextArea";
import Input from "@/components/Input";

const OrderSummary = () => {
  const navigate = useNavigate();
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [promoCode, setPromoCode] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const orderDetails = {
    subtotal: 2200,
    deliveryFee: 200,
    serviceFee: 200,
    tax: 300,
    total: 9900
  };

  const handleDeliveryMethodClick = (method) => {
    setDeliveryMethod(method);
    
    if (method === 'delivery') {
      // Navigate to delivery details page
      navigate('/my-orders/delivery-details', { 
        state: { deliveryMethod: method } 
      });
    }
    // If pickup is selected, stay on this page (no pickup page yet)
  };

  const handleProceedToCheckout = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!promoCode.trim()) {
      alert('Please enter a promo code');
      return;
    }
    
    if (!specialInstructions.trim()) {
      alert('Please enter special instructions');
      return;
    }
    
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
      
      <form onSubmit={handleProceedToCheckout}>
        {/* Promo Code */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Add a Promo Code</label>
          <div className="flex gap-2 flex-col sm:flex-row">
            <Input
              id="promoCode"
              type="text"
              placeholder="Enter Code here"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              required
              single={false}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-auto mt-0"
            />
            
            <button 
              type="button"
              className="flex-1 mt-2 h-auto sm:h-12 px-8 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
            >
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

        <div className="flex gap-0 mb-6 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => handleDeliveryMethodClick('delivery')}
            className={`flex-1 py-3 font-medium transition ${
              deliveryMethod === 'delivery'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            Delivery
          </button>
          <button
            type="button"
            onClick={() => handleDeliveryMethodClick('pickup')}
            className={`flex-1 py-3 font-medium transition ${
              deliveryMethod === 'pickup'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            Pick up
          </button>
        </div>

        {/* Special Instructions */}
        <div className="mb-6">
          <TextArea
            id="specialInstructions"
            name="specialInstructions"
            label="Special Instructions for Restaurant"
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
            rows={4}
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            required
          />
        </div>

        {/* Proceed Button */}
        <Button
          label="Proceed to Checkout"
          type="submit"
          variant="primary"
          size="large"
          className="bg-orange-500 hover:bg-orange-600"
        />
      </form>
    </div>
  );
};

export default OrderSummary;