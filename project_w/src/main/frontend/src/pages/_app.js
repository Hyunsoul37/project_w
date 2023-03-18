import Layout from "../util/Layout";
import { Provider } from "react-redux";
import { store } from "../store";
import "./Layout.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    storePathValues();
  }, [router.asPath]);

  const storePathValues = () => {
    const storage = sessionStorage;
    if (!storage) return;
    const prevPrevPath = storage.getItem("prevPath");
    const prevPath = storage.getItem("currentPath");
    if (
      prevPrevPath !== prevPath &&
      prevPrevPath !== "/login" &&
      prevPrevPath !== "/login/join"
    ) {
      storage.setItem("prevPrevPath", prevPrevPath);
    }
    if (prevPath !== router.asPath) {
      storage.setItem("prevPath", prevPath);
    }
    storage.setItem("currentPath", router.asPath);
  };
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
};
export default App;
