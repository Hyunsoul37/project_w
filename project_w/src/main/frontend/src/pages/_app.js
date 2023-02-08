import Layout from '../util/Layout';
import { Provider } from 'react-redux';
import { store } from '../store';
import './Layout.css';

const App = ({ Component, pageProps }) => {
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
