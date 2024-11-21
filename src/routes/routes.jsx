import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { SignIn } from "../pages/auth/SIgnIn";
import { NotFount } from "../pages/NotFount";
import { Service } from "../pages/Service";
import { Clients } from "../pages/Clients";
import { ClientPost } from "../components/clients/ClientPost";
import { loadPostData, loadUserData } from "../utils/utils";
import { SignUp } from "../pages/auth/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "services", element: <Service /> },
      {
        path: "clients",
        element: <Clients />,
        loader: loadUserData,
      },
      {
        path: "clients/:clientId",
        element: <ClientPost />,
        loader: ({ params }) => loadPostData(params.clientId),
      },
    ],
  },
  { path: "sign-in", element: <SignIn /> },
  { path: "sign-up", element: <SignUp /> },
  { path: "*", element: <NotFount /> },
]);
export default routes;
