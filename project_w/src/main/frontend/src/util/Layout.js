import Header from '../components/home/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
export default Layout;
