import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
