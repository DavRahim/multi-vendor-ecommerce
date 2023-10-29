import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import {Provider} from 'react-redux'
import "./index.css";
import {Toaster} from 'react-hot-toast'
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import store from "./store";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="Loading....">
        <App />
        <Toaster toastOptions={{
          position: 'top-right',
          style: {
            background: '#283046',
            color: '#fff'
          }
        }}/>
      </Suspense>
    </Provider>
  </BrowserRouter>
);
