import MainContent from './components/MainContent.jsx'
import Main from './components/MainContent.jsx'
import Navbar from './components/Navbar.jsx'
import './css/app.css'
import React from 'react'
import Radium from 'radium'


export default function App() {

  // setting isDark state
  const [isDark, setIsDark] = React.useState(false);
  
  // function to switch mode
  function switchMode() {
    console.log('switch mode');
    setIsDark(prevIsDark => !prevIsDark)
  }
  

  // UI render
  return (
    <div className='app-container'>
      <Navbar onClick = {switchMode} isDark = {isDark} />
      <MainContent isDark = {isDark}/>
    </div>
  )
}


