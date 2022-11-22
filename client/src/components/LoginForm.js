import React, { useState } from "react";

function LoginForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]) 

    function handleLoginSubmit(e){
        e.preventDefault()
        fetch("login route here", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((response) => {
            if (response.ok){
                response.json().then((user) => onLogin(user))
            }
            else{
                response.json().then((error) => setErrors(error.errors)) //If the user is not valid, then return the array of errors that will be coded in the controllers
            }
        })
    }

    return(
        <div>
            <form onSubmit={handleLoginSubmit}>
                <h3>Username:</h3>
                <input
                    type="text"
                    name="username"
                    value={username}
                    autoComplete="off"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <h3>Password:</h3>
                <input
                    type="text"
                    name="password"
                    value={password}
                    autoComplete="off"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <div className="login_erors">
                {errors.map(error => error)}
            </div>
        </div>

    )
}

export default LoginForm