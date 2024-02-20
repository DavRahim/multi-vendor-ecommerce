import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import store from './store/index.js';
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          }}
        />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
