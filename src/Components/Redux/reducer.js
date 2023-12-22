import { FETCH_USERS_SUCCESS } from "./action";

const initialState = {
    users: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_SUCCESS:
        return{
            ...state,
            users: action.payload
        };
        default:
            return state;
    }
};

export default reducer;