// src/pages/Checkout/DeliveryDetails.jsx
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

const DeliveryDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const { deliveryMethod = 'delivery' } = location.state || {};
    // const [deliveryMethod, setDeliveryMethod] = useState('delivery'); // 'delivery' or 'pickup'
    const [address, setAddress] = useState('123 Main Street, Victoria Island, Lagos\nApt 4B, Opposite Mega Plaza');
    const [deliveryTime, setDeliveryTime] = useState('ASAP(30-25)');
    const [deliveryInstructions, setDeliveryInstructions] = useState('');
    const [contactPhone, setContactPhone] = useState('+234 801 234 5678');
    const [isEditingAddress, setIsEditingAddress] = useState(false);


    const handleProceedToOrderSummary = (e) => {
        e.preventDefault();
        
        // // Validate required fields
        // if (deliveryMethod === 'delivery' && !address.trim()) {
        //     alert('Please enter your delivery address');
        //     return;
        // }
        
        if (!deliveryTime.trim()) {
            alert('Please select a delivery time');
            return;
        }
        
        if (!contactPhone.trim()) {
            alert('Please enter your contact phone number');
            return;
        }
        
        // Store delivery data in sessionStorage
        const deliveryData = {
            deliveryMethod,
            address: deliveryMethod === 'delivery' ? address : 'Pickup at restaurant',
            deliveryTime,
            deliveryInstructions,
            contactPhone,
            timestamp: Date.now()
        };
        
        sessionStorage.setItem('deliveryData', JSON.stringify(deliveryData));
        
        // Navigate to order summary
        navigate('/my-orders');
    };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      

      <form onSubmit={handleProceedToOrderSummary}>
        <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>

        {/* Delivery Address - Only show if delivery method is selected */}
        {deliveryMethod === 'delivery' && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Delivery Address</label>
              <button 
                type="button"
                onClick={() => setIsEditingAddress(!isEditingAddress)}
                className="text-sm text-orange-500 hover:text-orange-600 font-medium"
              >
                {isEditingAddress ? 'Save Address' : 'Change Address'}
              </button>
            </div>
            
            {isEditingAddress ? (
              <TextArea
                id="address"
                name="address"
                placeholder="Enter your delivery address"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            ) : (
              <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                <p className="text-sm text-gray-700 whitespace-pre-line">{address}</p>
              </div>
            )}
          </div>
        )}

        {/* Delivery Time */}
        <div className="mb-6">
          <Input
            id="deliveryTime"
            label="Delivery Time"
            type="text"
            placeholder="ASAP(30-25)"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            required
            single={false}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-auto mt-2"
          />
        </div>

        {/* Delivery Instructions */}
        <div className="mb-6">
          <TextArea
            id="deliveryInstructions"
            name="deliveryInstructions"
            label="Delivery Instructions (Optional)"
            placeholder="E.g leave at the front of the door, knock twice.................."
            rows={4}
            value={deliveryInstructions}
            onChange={(e) => setDeliveryInstructions(e.target.value)}
          />
        </div>

        {/* Contact Phone */}
        <div className="mb-6">
          <Input
            id="contactPhone"
            label="Contact Address"
            type="tel"
            placeholder="+234 801 234 5678"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            required
            single={false}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-auto mt-2"
          />
        </div>

        {/* Continue Button */}
        <Button
          label="Continue to Order Summary"
          type="submit"
          variant="primary"
          size="large"
          className="bg-orange-500 hover:bg-orange-600"
        />
      </form>
    </div>
  );
};

export default DeliveryDetails;