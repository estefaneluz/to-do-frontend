import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import ToDo from '../pages/ToDo';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Auth>
              <Login />
            </Auth>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Auth>
              <SignUp />
            </Auth>
          }
        />
        <Route path="/home" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
