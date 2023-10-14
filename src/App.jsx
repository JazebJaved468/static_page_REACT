import MainContent from './components/MainContent.jsx'
import Main from './components/MainContent.jsx'
import Navbar from './components/Navbar.jsx'
import './css/app.css'


export default function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <MainContent />
    </div>
  )
}


