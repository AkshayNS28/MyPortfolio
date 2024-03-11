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
      path:"/",
      element:<Home/>
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:"/Education",
      element:<Education/>
    },
    {
      path:"/Skills",
      element:<Skills/>
    },
    {
      path:"/Memories",
      element:<Memories/>
    },
    {
      path:"/Contact",
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
