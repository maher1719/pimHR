import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Login, Register} from './features/auth';
import {NotificationContainer} from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import MaterialCss from './features/auth/MaterialCss';
import MaterialJs from './features/auth/MaterialJs';
import D from "./features/dashboard/Dashboard";
import HeaderFeature from './components/layout/Common/Header/HeaderFeature';
import Sidebar from './components/layout/Common/Sidebar/SideBar';
import Content from './components/layout/Content';
import Landing from './components/layout/Landing';
import Profile from "./components/layout/Profile/Profile";
import PrivateRoute from './components/private-route/PrivateRoute';
import checkAuth from './utils/checkAuth';
import AddEmploi from './components/layout/Emploi/AddEmploi'
import store from './store';
import ListeEmploi from "./components/layout/Emploi/ListeEmploi";
import SingleEmploi from "./components/layout/Emploi/SingleEmploi";
import SearchPage from "./components/layout/SearchPage";
import Search from "./components/layout/Profile/Search";
//import MyEmploil from "./components/layout/Emploi/MyEmploil";
import MesEmplois from "./components/layout/Emploi/MesEmplois";
import ModifierEmploi from "./components/layout/Emploi/ModifierEmploi";
import ProfileUser from "./components/layout/Profile/ProfileUser";


const App = () => {
    // Check if user is already logged in
    useEffect(() => {
        checkAuth(store);
    }, []);
    return (
        <Router>
            <div className='App'>


                <Route exact path='/'>
                    <MaterialCss/>
                    <Landing/>
                    <MaterialJs/>
                </Route>
                <Route exact path='/Login'>
                    <MaterialCss/>
                    <Login/>
                    <MaterialJs/>
                </Route>
                <Route exact path='/Register'>
                    <MaterialCss/>
                    <Register/>
                    <MaterialJs/>
                </Route>

                <Switch>

                    <PrivateRoute exact path='/dashboard'>
                        <Content/>
                    </PrivateRoute>
                    <PrivateRoute exact path='/d'>
                        <D/>
                    </PrivateRoute>
                    <PrivateRoute exact path='/Profile'>
                        <HeaderFeature/>
                        <Sidebar/>
                        <Profile/>
                    </PrivateRoute>
                    <PrivateRoute path='/emploiAdd'>

                        <HeaderFeature/>
                        <Sidebar/>
                        <AddEmploi/>

                    </PrivateRoute>
                    <PrivateRoute path='/emploiList'>
                        <HeaderFeature/>
                        <Sidebar/>
                        <ListeEmploi/>
                    </PrivateRoute>
                    <PrivateRoute path='/profileSearch'>
                        <HeaderFeature/>
                        <Sidebar/>
                        <Search/>
                    </PrivateRoute>
                    <PrivateRoute path='/myEmploi'>
                        <HeaderFeature/>
                        <Sidebar/>
                        <MesEmplois/>
                    </PrivateRoute>
                    <PrivateRoute path='/emploiSingle'>
                        <HeaderFeature/>
                        <Sidebar/>
                        <SingleEmploi/>
                    </PrivateRoute>
                    <PrivateRoute exact path='/ModifierEmploi:id'>
                        <HeaderFeature/>
                        <Sidebar/>
                        <ModifierEmploi/>
                    </PrivateRoute>
                    <PrivateRoute exact path='/Profile:id'>
                        <HeaderFeature/>
                        <Sidebar/>
                        <ProfileUser/>
                    </PrivateRoute>
                    <PrivateRoute exact path='/search'>
                        <HeaderFeature/>
                        <Sidebar/>
                        <SearchPage/>
                    </PrivateRoute>


                </Switch>
                <NotificationContainer/>
            </div>
        </Router>
    );
};
export default App;

