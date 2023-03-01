import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
