import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Layout from '@/layout/layout'

// Checkout Flow Components
import DeliveryDetails from '@/pages/Checkout/DeliveryDetails';
import OrderSummary from '@/pages/Checkout/OrderSummary';
import Payment from '@/pages/Checkout/Payment';
import ProcessingOrder from '@/pages/Checkout/ProcessingOrder';
import OrderSuccess from '@/pages/Checkout/OrderSuccess';
import PhoneLayout from '../../layout/PhoneLayout';

// Create a PhoneLayout wrapper component
const PhoneLayoutWrapper = () => {
  return <PhoneLayout><Outlet /></PhoneLayout>;
};

export function AppRouter() {
  return (
    <Layout>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<div>Explore Page</div>} />
        <Route path="/account" element={<div>Account Page</div>} />

        {/* Checkout Flow - Sequential Routes */}
        <Route path="/my-orders" element={<PhoneLayoutWrapper />}>
          <Route index element={<OrderSummary />} />
          <Route path="/my-orders/delivery-details" element={<DeliveryDetails />} />
          <Route path="/my-orders/payment" element={<Payment />} />
          <Route path="/my-orders/processing" element={<ProcessingOrder />} />
          <Route path="/my-orders/success" element={<OrderSuccess />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Layout>
  )
}
