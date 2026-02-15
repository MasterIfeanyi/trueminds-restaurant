import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@/components/Button"
import { HiCheck } from "react-icons/hi";
import { IoCheckmark } from "react-icons/io5";

const OrderSuccess = () => {

    const navigate = useNavigate();

    let orderData = null


     try {
        const confirmation = sessionStorage.getItem('orderConfirmation');
        if (confirmation) {
            orderData = JSON.parse(confirmation);
        }
    } catch (error) {
        console.error('Failed to parse order confirmation', error);
    }
    

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
            <div className="w-20 h-20 bg-[#0E7A3E] rounded-full flex items-center justify-center">
                <IoCheckmark className="w-12 h-12 text-white" />
            </div>
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-center mb-2">
            Order Placed Successfully!
        </h2>
        
        <p className="text-center text-gray-600 mb-8">
            Your delicious Chuks Kitchen meal is on its way!
        </p>

        {/* green ball */}
        <div className="flex justify-center mb-8">
            <div className="w-6 h-6 rounded-full bg-[#CFE5D8]"></div>
        </div>


        {/* Order ID */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center">
            <p className="text-sm text-gray-500 mb-1">Order Number</p>
            <p className="text-lg font-bold text-gray-800">
                #{orderData.orderId} Confirmed
            </p>
        </div>


        {/* Action Buttons */}
        <div className="space-y-3">

            <Button
                label="Track Order"
                onClick={handleTrackOrder}
                variant="primary"
                size="large"
                className="bg-orange-500 hover:bg-orange-600"
            />

            <Button
                label="Generate Receipt"
                onClick={handleGenerateReceipt}
                variant="neutral"
                size="large"
                className="text-gray-700 border-gray-300 hover:bg-gray-50"
            />

            <button
                onClick={handleNeedHelp}
                className="w-full py-3 text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >
                Need help with your order?
            </button>
        </div>

        
    </div>
  );
};

export default OrderSuccess;