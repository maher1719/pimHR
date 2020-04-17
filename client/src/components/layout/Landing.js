import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Landing = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const history = useHistory();

    // If logged in redirect to dashboard
    useEffect(() => {
        if (isAuth) history.push('/dashboard');
    }, [isAuth]);
    return (
        <div>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div style={{height: '75vh'}} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h1><b>Bienvenu</b></h1>
                        <h4>
                            Vous
                            <span style={{fontFamily: 'monospace'}}> <b>CHERCHEZ</b></span> un emploi où bien des
                            candidats pour votre
                            entrprise?
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Joindre pour optimiser vos recherches.
                        </p>
                        <br/>
                        <div className="col s4">
                            <Link
                                to="/register"
                                style={{
                                    width: 'auto',
                                    borderRadius: '3px',
                                    letterSpacing: '1.5px'
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Inscription Recuriteur
                            </Link>
                        </div>
                        <div className="col s4">
                            <Link
                                to="/login"
                                style={{
                                    width: '140px',
                                    borderRadius: '3px',
                                    letterSpacing: '1.5px'
                                }}
                                className="btn btn-large btn-flat waves-effect hoverable white black-text"
                            >
                                Connexion
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
