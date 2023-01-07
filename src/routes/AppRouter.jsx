
import { useContext } from 'react';
import UserContext from '../context/User.context';

import  PrivateRoute  from './PrivateRoute';
import PublicRoute  from './PublicRoute';

function AppRouter() {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <>
            {
                user?.id ? (<PrivateRoute />) : (<PublicRoute />)
            }
        </>
    );
}

export default AppRouter;