import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSuccess } from "./Redux/action";



const UserList = () =>{
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    useEffect(() =>{
        const fetUsers = () =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) =>{
                return response.json();
            })
            .then((data) =>{
                dispatch(fetchUserSuccess(data))
            })
        };
        fetUsers();
    },[dispatch])
    return(
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
 export default UserList;