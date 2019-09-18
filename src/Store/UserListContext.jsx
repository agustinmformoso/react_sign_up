import React, { useState, createContext } from 'react';
export const UserListContext = createContext();

export const UserListProvider = (props) => {
    const [user, setUser] = useState([
        {
            name: 'Homero',
            last_name: 'Chintrolas',
            email: 'homeroc@gmail.com',
            password: 'homeroc123',
        },
        {
            name: 'Cosme',
            last_name: 'Fulanito',
            email: 'cosmef@gmail.com',
            password: 'cosmef123',
        },
    ]);

    return (
        <UserListContext.Provider value={[user, setUser]}>
            {props.children}
        </UserListContext.Provider>
    );
}