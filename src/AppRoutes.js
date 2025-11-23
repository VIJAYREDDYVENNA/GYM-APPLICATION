import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Login from "./auth/login";
import NotFound from "./pages/NotFound";

const Attendance = React.lazy(() => import("./pages/Attendance"));
const Clients = React.lazy(() => import("./pages/Clients"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Trainers = React.lazy(() => import("./pages/Trainers"));
const Payments = React.lazy(() => import("./pages/Payments"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
      <Route path="/clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/trainers" element={<ProtectedRoute><Trainers /></ProtectedRoute>} />
      <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
