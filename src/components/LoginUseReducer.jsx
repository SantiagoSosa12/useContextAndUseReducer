import React, { useReducer } from 'react';
import { ERROR, FIELD, LOGIN, LOGOUT, SUCCESS, initialState, logginReducer } from './Actions/useReducerLoggin';

//Reducer
const LoginUseReducer = () => {

    const [stateLoggin, dispatchLoggin] = useReducer(logginReducer, initialState);

    // Obtain all varables form state
    const { userName, password, error, isLoading, isLoggedIn } = stateLoggin;

    //Submit
    const sumbit = async (e) => {
        e.preventDefault();
        dispatchLoggin({ type: LOGIN });
        try {
            if (userName === 'admin' && password === 'admin') {
                dispatchLoggin({ type: SUCCESS });
            } else {
                dispatchLoggin({ type: ERROR });
            }

        } catch (error) {
            dispatchLoggin({ type: ERROR });
        }
    }

    const logoutUser = () => {
        dispatchLoggin({ type: LOGOUT })
    }

    return (
        <div className='App'>
            {error && <p> Username or password are incorrect </p>}
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>Welcome, {userName}</h1>
                            <button onClick={logoutUser}> LogOut </button>
                        </div>
                    ) :
                        (
                            <div>
                                <form onSubmit={sumbit}>
                                    {
                                        error && <p style={{ color: 'tomato' }}></p>
                                    }
                                    <input
                                        type='text'
                                        placeholder='Username'
                                        value={userName}
                                        onChange={(e) =>
                                            dispatchLoggin({
                                                type: FIELD,
                                                fieldName: 'userName',
                                                payload: e.currentTarget.value
                                            })
                                        }
                                    ></input>
                                    <input
                                        type='text'
                                        placeholder='password'
                                        value={password}
                                        onChange={(e) =>
                                            dispatchLoggin({
                                                type: FIELD,
                                                fieldName: 'password',
                                                payload: e.currentTarget.value
                                            })
                                        }
                                    ></input>
                                    <button type='submit'>
                                        {isLoading ? 'Logging....' : 'Login'}
                                    </button>
                                </form>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default LoginUseReducer;
