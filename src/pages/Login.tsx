import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import useStore from '../hooks/useStore';

interface Login {
    password: string,
    username: string,
}

function Login(): React.ReactElement {
    const login = useStore(s => s.login);
    const navigate = useNavigate();
    const { handleSubmit, register } = useForm<Login>({ shouldUseNativeValidation: true });

    function onSubmit(data: Login): void {
        if (data.username !== 'admin' || data.password !== 'password') return;
        login();
        navigate('/');
    }

    return (
        <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <h3>Log In</h3>
            <div className="login__input">
                <label htmlFor="input--username">Username</label>
                <input
                    id="input--username"
                    type="text"
                    placeholder="admin"
                    maxLength={20}
                    required
                    {...register('username')}
                />
            </div>
            <div className="login__input">
                <label htmlFor="input--password">Password</label>
                <input
                    id="input--password"
                    type="password"
                    placeholder="password"
                    maxLength={50}
                    required
                    {...register('password')}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
