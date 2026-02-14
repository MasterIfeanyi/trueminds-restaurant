import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {

    const navigate = useNavigate();

    const [orderData] = useState(() => {
        try {
            const confirmation = sessionStorage.getItem('orderConfirmation');
            return confirmation ? JSON.parse(confirmation) : null;
        } catch (error) {
            console.error('Failed to parse order confirmation', error);
            return null;
        }
    });

    useEffect(() => {
        // Retrieve order confirmation
        if (!orderData) {
            // If no order confirmation, redirect to home
            navigate('/', { replace: true });
            return;
        }
    }, [navigate, orderData]);

    const handleTrackOrder = () => {
        navigate('/my-orders');
    };

    const handleGenerateReceipt = () => {
        // In production, this would generate a PDF receipt
        console.log('Generating receipt for order:', orderData?.orderId);
        alert('Receipt generation feature coming soon!');
    };

    const handleNeedHelp = () => {
        // Navigate to support or open help modal
        navigate('/support');
    };

    if (!orderData) {
        return null; // Will redirect via useEffect
    }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      {/* Success Icon */}
        <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <svg 
                    className="w-12 h-12 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-center mb-2">
            Order Placed Successfully!
        </h2>
        
        <p className="text-center text-gray-600 mb-8">
            Your delicious Chuks Kitchen meal is on its way!
        </p>

        {/* Order ID */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center">
            <p className="text-sm text-gray-500 mb-1">Order Number</p>
            <p className="text-lg font-bold text-gray-800">
                #{orderData.orderId} Confirmed
            </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
            <button
                onClick={handleTrackOrder}
                className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
                Track Order
            </button>

            <button
                onClick={handleGenerateReceipt}
                className="w-full py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
                Generate Receipt
            </button>

            <button
                onClick={handleNeedHelp}
                className="w-full py-3 text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >
                Need help with your order?
            </button>
        </div>

        {/* Order Summary (Optional) */}
        <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                    <span>Total Amount</span>
                    <span className="font-semibold">₦{orderData.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Payment Method</span>
                    <span className="capitalize">{orderData.paymentMethod}</span>
                </div>
                {orderData.specialInstructions && (
                    <div className="pt-2">
                        <p className="text-gray-500 text-xs">Special Instructions:</p>
                        <p className="text-gray-700">{orderData.specialInstructions}</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default OrderSuccess;