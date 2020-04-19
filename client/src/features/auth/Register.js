import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classnames from 'classnames';

import {clearErrors, register} from 'features/auth/authSlice';
import Icon from 'assets/Icon';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [role, setRole] = useState('candidat');
    const errors = useSelector(state => state.auth.errors);

    const history = useHistory();
    const dispatch = useDispatch();

    const {isAuthenticated, loading} = useSelector(state => state.auth);
    // If logged in and user navigates to Register page, should redirect them to dashboard
    const nameUser = useSelector(state => state.auth.user.name)
    useEffect(() => {
        if (nameUser) history.push('/dashboard');
    }, [isAuthenticated]);

    const onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
            password2,
            role
        };
        console.log(newUser);

        dispatch(register(newUser));
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col s8 offset-s2'>
                    <Link
                        to='/'
                        onClick={() => dispatch(clearErrors())}
                        className='btn-flat waves-effect'
                    >
                        <i className='material-icons left'>keyboard_backspace</i> Back to
                        home
                    </Link>
                    <div className='col s12' style={{paddingLeft: '11.250px'}}>
                        <h4>
                            <b>Inscription</b> below
                        </h4>
                        <p className='grey-text text-darken-1'>
                            Vous avez déja un compte? <Link to='/login'>Log in</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div><label>
                            <input
                                onChange={e => setRole(e.target.value)}

                                id='role'
                                type='checkbox'
                                value={'recriteur'}
                            />
                            <span>je suis récriteur</span>
                        </label>

                        </div>
                        <div className='input-field col s12'>
                            <input
                                onChange={e => setName(e.target.value)}
                                value={name}
                                error={errors.name}
                                id='name'
                                type='text'
                                className={classnames('', {
                                    invalid: errors.name
                                })}
                            />
                            <label htmlFor='name'>Nom</label>
                            <span className='red-text'>{errors.name}</span>
                        </div>
                        <div className='input-field col s12'>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                error={errors.email}
                                id='email'
                                type='email'
                                className={classnames('', {
                                    invalid: errors.email
                                })}
                            />
                            <label htmlFor='email'>Email</label>
                            <span className='red-text'>{errors.email}</span>
                        </div>
                        <div className='input-field col s12'>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                error={errors.password}
                                id='password'
                                type='password'
                                className={classnames('', {
                                    invalid: errors.password
                                })}
                            />
                            <label htmlFor='password'>Mot de passe</label>
                            <span className='red-text'>{errors.password}</span>
                        </div>
                        <div className='input-field col s12'>
                            <input
                                onChange={e => setPassword2(e.target.value)}
                                value={password2}
                                error={errors.password2}
                                id='password2'
                                type='password'
                                className={classnames('', {
                                    invalid: errors.password2
                                })}
                            />
                            <label htmlFor='password2'>Confirm Mot de passe</label>
                            <span className='red-text'>{errors.password2}</span>
                        </div>
                        <div className='col s12' style={{paddingLeft: '11.250px'}}>
                            <button
                                style={{
                                    width: '150px',
                                    borderRadius: '3px',
                                    letterSpacing: '1.5px',
                                    marginTop: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                type='submit'
                                className='btn btn-large waves-effect waves-light hoverable blue accent-3'
                                disabled={loading === 'pending'}
                            >
                                {loading === 'pending' ? (
                                    <Icon name='spinner'/>
                                ) : (
                                    <span>Inscription</span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
