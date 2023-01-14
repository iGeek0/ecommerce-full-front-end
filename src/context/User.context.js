import React, { useState, useCallback } from 'react';
const { verifyingTokenService } = require('../services/Auth.service');
const UserContext = React.createContext({});
const { useJwt } = require('react-jwt');
const TOKEN = window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN);

export const UserContextProvider = ({ children }) => {
    const { decodedToken, isExpired } = useJwt(TOKEN);
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

    const verifyingToken = useCallback(
        async (decodedToken) => {

            const token = window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN);

            if (token) {
                await verifyingTokenService();
                window.localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN, token);
                console.log(decodedToken);
                setUser({
                    id: decodedToken.data.id,
                    name: decodedToken.data.full_name,
                });

            } else {
                logout();
            }
        },
        []
    )

    return (
        <UserContext.Provider value={{ user, login, logout, verifyingToken }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
