import './Components.css'
import ReactLogo from '../assets/react.svg'

const NavBar = () => {
  return (
    <div className='NavBar'>
        <h1 className='NavBar_Title'>TaskList</h1>
        <p className='NavBar_SideTitle'>Using : 
            <a href="https://react.dev/" className='NavBar_tooltipContainer'>
                <img src={ReactLogo} alt="React Logo" className='NavBar_Logo' /><span className='NavBar_tooltip'>Reactjs</span>
            </a>
        </p>
    </div>
  )
}

export default NavBar;