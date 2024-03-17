import React, { useState } from "react";

const LoginPage = (props) => {

    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (props.username && password) {
            props.onLogin(true);
        } else {
            alert('Username atau Password belum Diisi, Mohon Diisi')
        }
    }

    return (
        <>
            <div className="loginContainer">
                <h1>Login Website Download</h1>
                <input type="text" id="usernameForm" placeholder="Masukkan Username" value={props.username} onChange={(e) => props.setUsername(e.target.value)} />
                <input type="password" id="passwordForm" placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

LoginPage.defaultProps = {
    username: '',
}

export default LoginPage;