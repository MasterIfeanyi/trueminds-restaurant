import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Layout from '@/layout/layout'
import Checkout from '@/pages/Checkout/Checkout.jsx'

// import MainLayout from '@/components/Layout/MainLayout'

export function AppRouter() {
  return (
    <Layout>
        <Routes>

            {/* <Route element={<MainLayout />}>
            </Route> */}

            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<div>Explore Page</div>} />
            <Route path="/my-orders" element={<Checkout />} />
            <Route path="/account" element={<div>Account Page</div>} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Layout>
  )
}
