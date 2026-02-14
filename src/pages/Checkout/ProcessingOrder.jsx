import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessingOrder = () => {
  const navigate = useNavigate();
  const [processingStage, setProcessingStage] = useState('verifying');

  useEffect(() => {
    // Check if payment data exists
    const paymentData = sessionStorage.getItem('paymentData');
    if (!paymentData) {
      navigate('/checkout', { replace: true });
      return;
    }

    // Simulate payment processing stages
    const processPayment = async () => {
      try {
        // Stage 1: Verifying payment
        setProcessingStage('verifying');
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Stage 2: Processing
        setProcessingStage('processing');
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Stage 3: Confirming order
        setProcessingStage('confirming');
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Generate order ID
        const orderId = `123RGR${Math.floor(100000 + Math.random() * 900000)}Y`;
        
        // Store order confirmation
        const orderConfirmation = {
          ...JSON.parse(paymentData),
          orderId,
          status: 'confirmed',
          timestamp: new Date().toISOString()
        };

        sessionStorage.setItem('orderConfirmation', JSON.stringify(orderConfirmation));
        
        // Clean up checkout data
        sessionStorage.removeItem('checkoutData');
        sessionStorage.removeItem('paymentData');

        // Navigate to success page
        navigate('/checkout/success', { replace: true });

      } catch (error) {
        console.error('Payment processing error:', error);
        // In production, navigate to error page
        alert('Payment failed. Please try again.');
        navigate('/checkout/payment', { replace: true });
      }
    };

    processPayment();
  }, [navigate]);

  const stages = {
    verifying: 'Verifying payment details...',
    processing: 'Processing your payment...',
    confirming: 'Confirming your order...'
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center min-h-[400px]">
      {/* Loading Spinner */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
      </div>

      {/* Processing Text */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {stages[processingStage]}
      </h2>
      
      <p className="text-sm text-gray-500 text-center">
        Please don't close this page
      </p>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-6">
        <div className={`w-2 h-2 rounded-full ${processingStage === 'verifying' ? 'bg-orange-500 animate-pulse' : 'bg-gray-300'}`}></div>
        <div className={`w-2 h-2 rounded-full ${processingStage === 'processing' ? 'bg-orange-500 animate-pulse' : 'bg-gray-300'}`}></div>
        <div className={`w-2 h-2 rounded-full ${processingStage === 'confirming' ? 'bg-orange-500 animate-pulse' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  );
};

export default ProcessingOrder;