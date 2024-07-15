import './sideMenu.css' 
import userImage from '../../assets/Home 2.jpg'
import {  NavLink  } from 'react-router-dom'



export default function SideMenu() {
  

  function handleSideMenu(){
    const sideMenu=document.getElementById('sideMenu')
    sideMenu.style.width=0
    sideMenu.style.padding=0
  }
  function handleResize(){
    const sideMenu=document.getElementById('sideMenu')
    if(window.innerWidth>992){
      sideMenu.style.width='270px'
      sideMenu.style.padding='20px'
    }else{
      sideMenu.style.width=0
      sideMenu.style.padding=0
    }
  }
  window.addEventListener('resize', handleResize)
  
  return (
    <aside id="sideMenu" className='pt-5'>
                <div className="image-container">
                        <img src={userImage} className='w-100' alt="" />
                </div>

                <div className="user-title text-center mt-3">
                    <h5 className="fw-semibold">Jackson Ford</h5>
                    <p className='text-muted'><span className='title'>UI/UX/DESIGNER</span> IN PHILIPPINES </p>
                </div>

                <ul className='menu-item list-unstyled text-center'>
                    <li className='py-2'><NavLink onClick={handleResize} className={`nav-link ${(navData) => (navData.isActive ? "active" : 'none')}`}  to='home' >Home</NavLink> </li>
                    <li className='py-2'><NavLink onClick={handleResize} className={`nav-link ${(navData) => (navData.isActive ? "active" : 'none')}`}  to='about'>About</NavLink></li>
                    <li className='py-2'><NavLink onClick={handleResize} className={`nav-link ${(navData) => (navData.isActive ? "active" : 'none')}`} to='skills'>Skills</NavLink></li>
                    <li className='py-2'><NavLink onClick={handleResize} className={`nav-link ${(navData) => (navData.isActive ? "active" : 'none')}`} to='experience'>EXPERIENCE</NavLink></li>
                    <li className='py-2'><NavLink onClick={handleResize} className={`nav-link ${(navData) => (navData.isActive ? "active" : 'none')}`} to='work'>WORK</NavLink></li>
                </ul>

                <button className='border-0 close-sideMenu' onClick={handleSideMenu}><i className="fa-solid fa-xmark"></i></button>
    </aside>
  ) 
}
