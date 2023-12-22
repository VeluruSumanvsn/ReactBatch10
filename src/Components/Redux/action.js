export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const fetchUserSuccess = (users) =>({
    type:FETCH_USERS_SUCCESS,
    payload: users,
})