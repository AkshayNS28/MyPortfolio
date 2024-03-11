import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../Skills/Skills.css'
const Skills = () => {

  return (
    <>
      <div className="skills">
        <Navbar />

        <div class="card card1">
          <img src="../components/Skills/skills_pic/python.png" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">Python</h5>  
          </div>
        </div>

        <div class="card card2">
          <img src="../components/Skills/skills_pic/javascript.svg" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">Javascript</h5>  
          </div>
        </div>

        <div class="card card3">
          <img src="../components/Skills/skills_pic/react.png" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">ReactJS</h5>  
          </div>
        </div>

        <div class="card card4">
          <img src="../components/Skills/skills_pic/html.png" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">HTML</h5>  
          </div>
        </div>

        <div class="card card5">
          <img src="../components/Skills/skills_pic/node.png" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">NodeJS</h5>  
          </div>
        </div>

        <div class="card card6">
          <img src="../components/Skills/skills_pic/sql.svg" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">SQL</h5>  
          </div>
        </div>

        <div class="card card7">
          <img src="../components/Skills/skills_pic/css.svg" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">CSS</h5>  
          </div>
        </div>

        <div class="card card8">
          <img src="../components/Skills/skills_pic/express.png" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">ExpressJS </h5>  
          </div>
        </div>

        <div class="card card9">
          <img src="../components/Skills/skills_pic/da.png" class="card-img" alt="card"></img>
          <div class="card-body">
            <h5 class="card-title">Data Analytics</h5>  
          </div>
        </div>


        <Footer />
      </div >
    </>
  )
}

export default Skills
