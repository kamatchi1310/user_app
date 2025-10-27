import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import UserList from "./pages/UserList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
}
