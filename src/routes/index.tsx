import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
};

export default Router;
