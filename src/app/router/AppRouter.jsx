import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Layout from '../../Layout/layout'

// import MainLayout from '@/components/Layout/MainLayout'

export function AppRouter() {
  return (
    <Layout>
        <Routes>

            {/* <Route element={<MainLayout />}>
            </Route> */}

            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Layout>
  )
}
