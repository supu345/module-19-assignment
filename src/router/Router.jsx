import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/errorPage";
import ThanksPage from "../pages/ThanksPage";
import RegistrationPage from "../pages/RegistrationPage";
import TermsPolicyPage from "../pages/home/TermsPolicyPage";
import FAQPage from "../pages/FAQPage";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/CartPage";
import CheckOutPage from "../pages/CheckOutPage";
import Product from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/thanks",
        element: <ThanksPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },

      {
        path: "/termsPolicy",
        element: <TermsPolicyPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

export default router;
