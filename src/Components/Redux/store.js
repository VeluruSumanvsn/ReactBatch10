import { createStore, combineReducers} from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
    users: reducer,
});

const store = createStore(rootReducer);

export default store;