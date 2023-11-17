import SellerReducer from "./reducers/SellerReducer";
import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";



const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: SellerReducer,
};

export default rootReducer;