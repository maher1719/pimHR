import React from "react";
import {useSelector} from 'react-redux';

const Auth = ()=> {
    return useSelector(state => state.auth.user);
}
export default Auth;