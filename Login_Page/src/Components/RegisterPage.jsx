import { useState } from 'react';
import './RegisterStyle.css'; // Ensure this is the correct path

function RegisterPage({ onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    alert(`Registration Successful!\nGender: ${gender}\n(Demo only, no saving)`);
    onSwitchToLogin();
  };

  const handleClear = () => {
    setEmail('');
    setUsername('');
    setPassword('');
    setGender('');
    setTermsAccepted(false);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === 'Other'}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label>I accept the terms and conditions</label>
        </div>

        <div className="button-group">
          <button
            type="button"
            onClick={handleClear}
            className="clear-btn"
          >
            Clear
          </button>
          <button
            type="submit"
            className="register-btn"
          >
            Register
          </button>
        </div>
      </form>

      <div className="footer">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin}>Login here</button>
      </div>
    </div>
  );
}

export default RegisterPage;
