import React, {useState} from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function LoginPage() {

    console.log("hi")



    return (
        <div>
            <div>
                Login Here!  If you are not a current user, you will be asked to create an account.
            </div>
            <LoginForm />
            <div>
                {/* Create sign up form here */}
            </div>
        </div>

    )
}

export default LoginPage