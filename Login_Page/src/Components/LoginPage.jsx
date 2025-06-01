import { useState } from 'react';
import './LoginStyle.css';
import ProfilePage from './ProfilePage';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null); // null to handle "first visit"

  const handleClear = () => {
    setEmail('');
    setUsername('');
    setPassword('');
    setLoginSuccess(null);
  };

  const handleSubmit = () => {
    if (email === 'test@gmail.com' && username === 'test' && password === 'test@123') {
      setIsLoggedIn(true);
      setLoginSuccess(true);
    } else {
      setIsLoggedIn(false);
      setLoginSuccess(false);
    }
  };

  if (isLoggedIn && loginSuccess) {
    return <ProfilePage />;
  }

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSubmit}>Submit</button>

      {loginSuccess === false && <p style={{ color: 'red' }}>No profile found. Please check your credentials.</p>}
    </div>
  );
}

export default LoginPage;
