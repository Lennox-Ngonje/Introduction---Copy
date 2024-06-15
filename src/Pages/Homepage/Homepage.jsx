import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Cardone from '../../Components/Cardone/Cardone'
import Jobcardarea from '../../Components/Jobcardarea/Jobcardarea'

const Homepage = () => {
  const cardOneData = [

      {
            id:1,
            title: "For Developer",
            description: "Browser our React Jobs and start Your Career",
            btntext: "Browse Jobs"
        },
        {
            id:2,
            title: "For Employers",
            description: "List your job to Find the perfect Developer For Your Job",
            btntext: "Add Jobs"
        } 
  ]

  return (
    <div>
        <Hero/>
        <div className='home'>
          {cardOneData.map((info)=>(
            <Cardone key= {info.id} props= {info} />
          ))}
          
        </div>

        <div className="jobcardarea">
          <Jobcardarea/>
        </div>
    </div>
  ) 
}

export default Homepage