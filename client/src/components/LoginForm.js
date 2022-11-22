import React, { useState } from "react";

function LoginForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <form>
                <input
                    type="text"
                    name="username"
                    value={username}
                    autoComplete="off"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    name="password"
                    value={password}
                    autoComplete="off"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
        </div>

    )
}