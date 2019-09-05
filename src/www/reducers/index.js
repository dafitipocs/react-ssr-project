import { combineReducers } from "redux";

import user from "./user";
import banners from "./banners";

const reducers = combineReducers({
  user,
  banners
});

export default reducers;
