import React, {useState} from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function LoginPage({setUser}) {

    return (
        <div>
            <div>
                Login Here!  If you are not a current user, you will be asked to create an account.
            </div>
            <LoginForm setUser={setUser}/>
            <SignupForm setUser={setUser}/>
        </div>

    )
}

export default LoginPage