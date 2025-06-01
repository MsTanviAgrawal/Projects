
import { useState } from 'react'
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage'


function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showLogin ? (
        <LoginPage />
      ) : (
        <RegisterPage onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  )
}

export default App
