import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Dashboard from '@/pages/Dashboard/Dashboard'
import MainLayout from '@/components/Layout/MainLayout'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
