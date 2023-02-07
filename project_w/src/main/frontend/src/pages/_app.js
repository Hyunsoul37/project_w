import Header from '../components/home/Header';
import { Provider } from 'react-redux';
import { store } from '../store';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
};
export default App;
