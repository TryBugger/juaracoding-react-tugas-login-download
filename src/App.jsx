import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage';
import DownloadPage from './components/DownloadPage';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');

  const handleAuth = (authValue) => {
    setIsAuth(authValue);
  }

  if (!isAuth) {
    return <LoginPage onLogin = {handleAuth} username = {username} setUsername = {setUsername} />
  } else {
    return <DownloadPage username = {username}/>
  }
}

export default App
