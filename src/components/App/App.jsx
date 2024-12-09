import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import { authenticateSpotify } from '../../utils/SpotifyAPi'

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [isAuthenticatted, setIsAuthenticated] = useState(false)

  const onClose = () => {
    setActiveModal("");
  }

  const handleLoginClick = () => {
    setActiveModal("login");
  }

  const handleRegisterClick = () => {
    setActiveModal("register")
  }

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood)
  }

  useEffect(() => {
    const token = authenticateSpotify();
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);


  return (
    <>
      <Header handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}/>
      <Main onMoodSelect={handleMoodSelect} selectedMood={selectedMood} isAuthenticatted={isAuthenticatted} />
      <Footer />
      <LoginModal 
      activeModal={activeModal === "login"}
      onClose={onClose}
      />
      <RegisterModal
      activeModal={activeModal === "register"}
      onClose={onClose}
      />
    </>
  )
}

export default App;
