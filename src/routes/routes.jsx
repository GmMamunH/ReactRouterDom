import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { Auth } from "../pages/Auth";
import { NotFount } from "../pages/NotFount";
import { Service } from "../pages/Service";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "services", element: <Service /> },
    ],
  },
  { path: "auth", element: <Auth /> },
  { path: "*", element: <NotFount /> },
]);
export default routes;
