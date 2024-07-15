
import SideMenu from '../SideMenu/SideMenu'
import './blankLayout.css' 
import { Outlet } from 'react-router-dom'



export default function BlankLayout() {
  function handleSideMenu(){
    const sideMenu=document.getElementById('sideMenu')
    sideMenu.style.width='270px'
    sideMenu.style.padding='20px'
  }
  return (
   <>
        <main >
                  <section className='sideMenu'>
                    <SideMenu />
                  </section>
                    
                  <section className='content'>
                  
                      <button className='sideMenu-button rounded-3' onClick={handleSideMenu}><i className="fa-solid fa-bars"></i></button>
                 
                   <Outlet />
                  
                  </section>
        </main> 
   </>
  )
}
