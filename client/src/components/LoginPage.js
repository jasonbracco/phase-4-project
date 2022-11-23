import React from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function LoginPage({setUser}) {

    return (
        <div>
            <p>Login Here!  If you are not a current user, you will be asked to create an account.</p>
            
            <LoginForm setUser={setUser}/>
            <SignupForm setUser={setUser}/>
        </div>

    )
}

export default LoginPage