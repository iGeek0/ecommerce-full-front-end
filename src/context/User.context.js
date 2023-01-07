import React, { useState } from 'react';

const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (data) => {

        setUser({
            id: data.user.id,
            name: data.user.full_name,
        });

        window.localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN, data.token);

    }

    const logout = () => {
        window.localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN);
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
