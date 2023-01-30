import SingleProduct from 'pages/SingleProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// importing pages
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/category" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
