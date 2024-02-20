
import SellerReducer from "./reducers/SellerReducer";
import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
import chatReducer from "./reducers/chatReducer";
import productReducer from "./reducers/productReducer";
import OrderReducer from './reducers/OrderReducer'
import PaymentReducer from "./reducers/PaymentReducer";
import dashboardIndexReducer from "./reducers/dashboardIndexReducer";
import bannerReducer from "./reducers/bannerReducer";



const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: SellerReducer,
  chat: chatReducer,
  order: OrderReducer,
  payment: PaymentReducer,
  dashboardIndex: dashboardIndexReducer,
  banner : bannerReducer
};

export default rootReducer;