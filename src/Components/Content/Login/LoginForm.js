import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ user: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                <h2>Login</h2>
                {(error != "") ? (<div>{error} </div>) : ""}

                <div>
                    <label htmlFor="user"> User: </label>
                    <input type="text" name="user" id="user" onChange={e => setDetails({ ...details, user: e.target.value })} value={details.user} />
                </div>

                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" name='password' id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </div>
        </form>
    )
}
// skzbum havaqvuma inputner@ u submite, heto avelacvum logikan
export default LoginForm;
