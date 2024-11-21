import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/footer/Footer";
import { NavBar } from "../components/shared/header/NavBar";

import Loading from "../components/loadding/Loadding";
import { useNavigation } from "react-router-dom";

export const MainLayout = () => {
  const navigation = useNavigation()
  
  return (
    <>
      <NavBar />

      <main className="max-w-screen-lg mx-auto">
        {navigation.state==="loading" ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
};
