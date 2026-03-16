import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-warm-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
