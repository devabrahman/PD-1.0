import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { themeCheck } from 'utils/darkmode';

// importing auth pages
import Home from './pages/Home';
// import SignUp from 'pages/auth/SignUp';
// import Login from 'pages/auth/Login';
// import ForgotPassword from 'pages/auth/ForgotPassword';
// import ChangePassword from 'pages/auth/ChangePassword';
// import ResetMailSent from 'pages/auth/ResetMailSent';

// importing products pages
import Products from 'pages/product/Products';
import SingleProduct from 'pages/product/SingleProduct';
import NewProducts from 'pages/product/NewProduct';
import EditProduct from 'pages/product/EditProduct';

// importing category pages
import Categories from 'pages/product/Categories';
import NewCategory from 'pages/product/NewCategory';

// importing tag page
import Tags from 'pages/product/Tags';

// importing orders page
import Orders from 'pages/orders/Orders';
import OrderDetails from 'pages/orders/OrderDetails';

// importing posts page
import Posts from 'pages/blog/Posts';
import CreatePost from 'pages/blog/CreatePost';
import BlogCategories from 'pages/blog/BlogCategories';
import BlogCategoryCreate from 'pages/blog/BlogCategoryCreate';
import BlogTags from 'pages/blog/BlogTags';

// chat pages
import Chat from 'pages/Chat';

// importing customer profile page
import Customers from 'pages/Customers';
import CustomerProfile from 'pages/userProfile/CustomerProfile';
import ProfileEdit from 'pages/userProfile/ProfileEdit';

// help page
import Cards from 'pages/bonus/Cards';
import ProductCards from 'pages/bonus/ProductCards';
import Toast from 'pages/bonus/Toast';
import Help from 'pages/bonus/Help';

// error page
import Error404 from 'pages/Error404';
import CallToAction from 'pages/bonus/CallToAction';

// all routing
const router = createBrowserRouter([
  // auth pages
  {
    path: '/',
    element: <Home />
  },
  // {
  //   path: '/create-account',
  //   element: <SignUp />
  // },
  // {
  //   path: '/login',
  //   element: <Login />
  // },
  // {
  //   path: '/forgot-password',
  //   element: <ForgotPassword />
  // },
  // {
  //   path: '/reset-mail-sent',
  //   element: <ResetMailSent />
  // },
  // {
  //   path: '/change-password',
  //   element: <ChangePassword />
  // },

  // product CRUD pages
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/single-product',
    element: <SingleProduct />
  },
  {
    path: '/new-product',
    element: <NewProducts />
  },
  {
    path: '/edit-product',
    element: <EditProduct />
  },

  // category CRUD pages
  {
    path: '/categories',
    element: <Categories />
  },
  {
    path: '/category/create',
    element: <NewCategory />
  },

  // tags page
  {
    path: '/tags',
    element: <Tags />
  },

  // oders pages
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/order-details',
    element: <OrderDetails />
  },

  // blog pages
  {
    path: '/posts',
    element: <Posts />
  },
  {
    path: '/create-post',
    element: <CreatePost />
  },
  {
    path: '/blog-categories',
    element: <BlogCategories />
  },
  {
    path: '/blog/category/create',
    element: <BlogCategoryCreate />
  },
  {
    path: '/blog/tags',
    element: <BlogTags />
  },
  // chat page
  {
    path: '/chat',
    element: <Chat />
  },

  // customers pages
  {
    path: '/customers',
    element: <Customers />
  },
  {
    path: '/customer',
    element: <CustomerProfile />
  },
  {
    path: '/profile-edit',
    element: <ProfileEdit />
  },

  // bonus pages
  {
    path: '/cards',
    element: <Cards />
  },
  {
    path: '/product-cards',
    element: <ProductCards />
  },
  {
    path: '/call-to-action',
    element: <CallToAction />
  },
  {
    path: '/help',
    element: <Help />
  },
  {
    path: '/toast',
    element: <Toast />
  },

  // if no route march (fallback)
  {
    path: '/*',
    element: <Error404 />
  }
]);

const Routes = () => {
  //   themeCheck();
  return <RouterProvider router={router} />;
};

export default Routes;
