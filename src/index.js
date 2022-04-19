import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
);
