import React from 'react'
import "../component/Home1.css"
function Home1() {
  return (
    <div className='i-card'>
      <div className='i-card-info'>

        <div className='i-card-form' >
        <span>What does it mean to be Habesha?</span>
        <span>Is it a name for all people who speak a 
          language related to Geez ,<br />and share a common culture?</span>
        <span>The difference between
           being<br/> an Ethiopian and being Habesha</span>
        <button> see video for Habesha</button>
        </div>
      </div>
      
      <div className='i-image'>
      <img  src='/Image/habesha3.jpg' style={{width:"40%"}} />
      </div>
    </div>
  )
}

export default Home1
