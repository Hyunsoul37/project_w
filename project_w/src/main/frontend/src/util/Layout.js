import Footer from "../components/home/Footer";
import Header from "../components/home/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
