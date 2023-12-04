
import SellerReducer from "./reducers/SellerReducer";
import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
import chatReducer from "./reducers/chatReducer";
import productReducer from "./reducers/productReducer";
import OrderReducer from './reducers/OrderReducer'



const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: SellerReducer,
  chat: chatReducer,
  order: OrderReducer
};

export default rootReducer;