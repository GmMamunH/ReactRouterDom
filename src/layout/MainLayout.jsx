import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/footer/Footer";
import { NavBar } from "../components/shared/header/NavBar";

export const MainLayout = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-screen-lg mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
