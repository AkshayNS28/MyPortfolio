import './App.css'
import Home from '../components/Home/Home'
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import Memories from '../components/Memories/Memories';
import Contact from '../components/Contact/Contact';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path:"/MyPortfolio/",
      element:<Home/>
    },
    {
      path:"/MyPortfolio/About",
      element:<About/>
    },
    {
      path:"/MyPortfolio/Education",
      element:<Education/>
    },
    {
      path:"/MyPortfolio/Skills",
      element:<Skills/>
    },
    {
      path:"/MyPortfolio/Memories",
      element:<Memories/>
    },
    {
      path:"/MyPortfolio/Contact",
      element:<Contact/>
    },
    
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
