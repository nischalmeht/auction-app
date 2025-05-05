import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import SideDrawer from './layout/SideDrawer.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>
)
