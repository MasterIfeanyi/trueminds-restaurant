import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Layout from '@/layout/layout'

// import MainLayout from '@/components/Layout/MainLayout'

// Checkout Flow Components
import OrderSummary from '@/pages/Checkout/OrderSummary';
import Payment from '@/pages/Checkout/Payment';
import ProcessingOrder from '@/pages/Checkout/ProcessingOrder';
import OrderSuccess from '@/pages/Checkout/OrderSuccess';

export function AppRouter() {
  return (
    <Layout>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<div>Explore Page</div>} />
        <Route path="/account" element={<div>Account Page</div>} />

        {/* Checkout Flow - Sequential Routes */}
        <Route path="/my-orders" element={<OrderSummary />} />
        <Route path="/my-orders/payment" element={<Payment />} />
        <Route path="/my-orders/processing" element={<ProcessingOrder />} />
        <Route path="/my-orders/success" element={<OrderSuccess />} />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Layout>
  )
}
