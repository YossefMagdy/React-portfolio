
import {   createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound';
import BlankLayout from './Layout/BlankLayout/BlankLayout';
import Skills from './Components/Skills/skills.jsx'; 
import Experience from './Components/Experience/Experience.jsx';
import Work from './Components/Work/Work.jsx';
function App() {
  const routes=createHashRouter([
    {
      path:'/',
      element:<BlankLayout />,
      errorElement:<NotFound />,
      children:[
          {index:true,element:<Home />},
          {path:'home',element:<Home />},
          {path:'about',element:<About />},
          {path:'skills',element:<Skills />},
          {path:'experience',element:<Experience />},
          {path:'work',element:<Work />},
      ]
    }
  ])
  return (
    <>  
          <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
