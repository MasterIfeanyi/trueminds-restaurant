import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessingOrder = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if payment data exists
    const paymentData = sessionStorage.getItem('paymentData');


    if (!paymentData) {
      console.log("here")
      navigate('/my-orders', { replace: true });
      return;
    }

    // Simulate payment processing stages
    const processPayment = async () => {
      try {

        // ADD DELAY HERE - simulate processing time
        await new Promise(resolve => setTimeout(resolve, 4000)); // 4 seconds

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
        navigate('/my-orders/success', { replace: true });

      } catch (error) {
        console.error('Payment processing error:', error);
        // In production, navigate to error page
        alert('Payment failed. Please try again.');
        navigate('/my-orders/payment', { replace: true });
      }
    };

    processPayment();
  }, [navigate]);

  

  return (
    <div className="w-full max-w-md p-8 flex flex-col items-center justify-center min-h-[400px]">

      <div className="flex flex-col items-center justify-center h-screen">

        <div className="relative w-12 h-12">
          <style>
            {`
              @keyframes spinnerBar {
                0% { background-color: #f97316; }
                12.5% { background-color: #f97316; }
                12.6% { background-color: #d1d5db; }
                100% { background-color: #d1d5db; }
              }
            `}
          </style>

          {[...Array(8)].map((_, i) => {
            return (
              <span
                key={i}
                className={`absolute left-1/2 top-1/2 w-1.5 h-4 rounded-full`}
                style={{
                  backgroundColor: "#d1d5db",
                  transform: `rotate(${i * 45}deg) translate(-50%, -150%)`,
                  transformOrigin: "center",
                  animation: "spinnerBar 2.4s linear infinite",
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            );
          })}
        </div>


      </div>  
    </div>
  );
};

export default ProcessingOrder;