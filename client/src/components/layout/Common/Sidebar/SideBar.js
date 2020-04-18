import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from 'features/auth/authSlice';
import SidebarRecurteur from "./SidebarRecurteur";
import SidebarCandidat from "./SidebarCandidat";

const SliderBar = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    console.log("side bar", user);

    var sidebarTitle = "";
    if (user.role == "candidat") {
        sidebarTitle = <SidebarCandidat/>
    } else {
        sidebarTitle = <SidebarRecurteur/>;

    }
    const side = "hello";

    const onLogoutClick = e => {
        e.preventDefault();
        dispatch(logoutUser());
        console.log(dispatch(logoutUser()));
        window.location.href = "/";
    };
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="/profile" className="brand-link">
                <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
                     className="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}

            <div className="sidebar">
                {/* Sidebar user (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2"
                             alt="User Image"/>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    {sidebarTitle}
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    );

};
export default SliderBar;