import React, {useState, useEffect} from "react";

function SignupForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [age, setAge] = useState("")
    const [bio, setBio] = useState("")
    const [imageURL, setImageURL] = useState("")

    return (
        <form>
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
            <h3>Confirm Password:</h3>
            <input
                type="text"
                name="password-confirmation"
                value={passwordConfirmation}
                autoComplete="off"
                placeholder="Confirm Password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            <h3>Age:</h3>
            <input
                type="number"
                name="age"
                value={age}
                autoComplete="off"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
            />
            <h3>Tell Us About Yourself:</h3>
            <input
                type="test"
                name="bio"
                value={bio}
                autoComplete="off"
                placeholder="Bio"
                onChange={(e) => setBio(e.target.value)}
            />
            <h3>Profile Picture:</h3>
            <input
                type="text"
                name="pictue"
                value={imageURL}
                autoComplete="off"
                placeholder="Profile Picture"
                onChange={(e) => setImageURL(e.target.value)}
            />
        </form>
    )
}