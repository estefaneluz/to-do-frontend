import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Login from '../pages/Auth/Login';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
};

export default Router;
