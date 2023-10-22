import React, { useState } from 'react';

const LoginUseState = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    const sumbit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await function login({ userName, password }) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (userName === 'admin' && password === 'admin') {
                            setIsLoggedIn(true);
                            setIsLoading(false);
                            resolve();
                        } else {
                            reject()
                        }
                    })
                }, 2000);
            }
        } catch (error) {
            setError('Invalid UserName or Password:', error);
            setIsLoading(false);
            setUserName('');
            setPassword('');
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
        setIsLoading(false);
    }

    return (
        <div className='App'>
            <div>
                {
                    IsLoggedIn ? (
                        <div>
                            <h1>Welcome, {userName}</h1>
                            <button onClick={logout}> LogOut </button>
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
                                        value = {userName}
                                        onChange={(e) => setUserName(e.currentTarget.value)}
                                    ></input>
                                    <input
                                        type='text'
                                        placeholder='password'
                                        value = {password}
                                        onChange={(e) => setPassword(e.currentTarget.value)}
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

export default LoginUseState;
