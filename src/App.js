import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import {
  AddBlogPage,
  AllBlogsPage,
  CompleteRegister,
  Dashboard,
  HomePage,
  LoginPage,
  RegisterPage,
  SingleBlogPage,
} from './pages';
import { AdminRoute } from './pages/dashboard/AdminRoute';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user/login" element={<LoginPage />} />
        <Route path="user/register" element={<RegisterPage />} />
        <Route path="user/register/complete" element={<CompleteRegister />} />
        <Route path="new/blog" element={<AddBlogPage />} />
        <Route path="blogs" element={<AllBlogsPage />} />
        <Route
          path="blogs/:id"
          element={
            <PrivateRoute>
              <SingleBlogPage />
            </PrivateRoute>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
