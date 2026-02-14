import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    saveCard: false
  });
  const [checkoutData] = useState(() => {
    try {
        const data = sessionStorage.getItem('checkoutData');
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Failed to parse order confirmation', error);
        return null;
    }
  });

  useEffect(() => {
    // Retrieve checkout data from previous step
    const data = sessionStorage.getItem('checkoutData');
    if (!data) {
      // If no checkout data, redirect back to order summary
      navigate('/my-orders', { replace: true });
      return;
    }
  }, [navigate]);

  const handlePayment = async (e) => {
    e.preventDefault();

    // Validate card details
    if (paymentMethod === 'card') {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
        alert('Please fill in all card details');
        return;
      }
    }

    // Store payment details (encrypted in production)
    const paymentData = {
      ...checkoutData,
      paymentMethod,
      paymentDetails: paymentMethod === 'card' ? {
        lastFourDigits: cardDetails.number.slice(-4),
        saveCard: cardDetails.saveCard
      } : { method: paymentMethod }
    };

    sessionStorage.setItem('paymentData', JSON.stringify(paymentData));

    // Navigate to processing page
    navigate('/my-orders/processing');
  };

  if (!checkoutData) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Payment</h2>

      <form onSubmit={handlePayment}>
        {/* Payment Method Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">Pay With:</label>
          <div className="flex gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2 w-4 h-4 text-orange-500"
              />
              <span>Card</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2 w-4 h-4"
              />
              <span>Bank</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={paymentMethod === 'transfer'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2 w-4 h-4"
              />
              <span>Transfer</span>
            </label>
          </div>
        </div>

        {/* Card Details Form */}
        {paymentMethod === 'card' && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={cardDetails.number}
                onChange={(e) => {
                  // Format card number with spaces
                  const value = e.target.value.replace(/\s/g, '');
                  if (value.length <= 16 && /^\d*$/.test(value)) {
                    setCardDetails(prev => ({ ...prev, number: value }));
                  }
                }}
                maxLength={19}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={cardDetails.expiry}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    let formatted = value;
                    if (value.length >= 2) {
                      formatted = value.slice(0, 2) + '/' + value.slice(2, 4);
                    }
                    if (formatted.length <= 5) {
                      setCardDetails(prev => ({ ...prev, expiry: formatted }));
                    }
                  }}
                  maxLength={5}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={cardDetails.cvv}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 3) {
                      setCardDetails(prev => ({ ...prev, cvv: value }));
                    }
                  }}
                  maxLength={3}
                />
              </div>
            </div>

            {/* Save Card Checkbox */}
            <div className="mb-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={cardDetails.saveCard}
                  onChange={(e) => setCardDetails(prev => ({ ...prev, saveCard: e.target.checked }))}
                  className="mr-2 w-4 h-4 text-orange-500"
                />
                <span className="text-sm text-gray-600">Save card details</span>
              </label>
            </div>
          </>
        )}

        {/* Other Payment Methods */}
        {paymentMethod === 'bank' && (
          <div className="mb-6 p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-600">
              You will be redirected to your bank's secure payment page.
            </p>
          </div>
        )}

        {paymentMethod === 'transfer' && (
          <div className="mb-6 p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-600">
              Bank transfer details will be shown after confirmation.
            </p>
          </div>
        )}

        {/* Pay Button */}
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Pay ₦{checkoutData.total.toLocaleString()}
        </button>

        {/* Security Notice */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Your payment data will be stored in a secured wallet. Support may request a
          receipt and the amount, card, or other payment information if you have issues
          with your order.
        </p>
      </form>
    </div>
  );
};

export default Payment;