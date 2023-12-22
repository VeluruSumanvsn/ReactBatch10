import React from "react";
import { Provider } from "react-redux";
import UserList from '../UserList';
import store from "../Redux/store";

function Practice() {
  return (
   <Provider store={store}>
    <UserList />
   </Provider>
  );
}

export default Practice;
