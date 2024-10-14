import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import Gallary from './Gallary/Gallary'
import PopularClasses from './PopularClasses/PopularClasses'
import PopularInstructor from './PopularTeacher/PopularTeacher'
import Bar from './Bar/Bar'

const Home = () => {
  return (
    <section>
      <HeroContainer/>
      <div className="max-w-screen-xl mx-auto">
    
    <PopularClasses/>
    <PopularInstructor/>
    <Gallary/>
    </div>
    <Bar/>
    </section>
    
  )
}

export default Home
