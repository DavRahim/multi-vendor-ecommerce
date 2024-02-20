import authReducer from "./Reducers/authReducer";
import cardReducer from "./Reducers/cardReducer";
import dashboardReducer from "./Reducers/dashboardReducer";
import homeReducer from "./Reducers/homeReducer";
import orderReducer from "./Reducers/orderReducer";
import chatReducer from "./Reducers/chatReducer";

const rooReducers = {
  home: homeReducer,
  auth: authReducer,
  card: cardReducer,
  order: orderReducer,
  dashboard: dashboardReducer,
  chat: chatReducer,
};

export default rooReducers;
