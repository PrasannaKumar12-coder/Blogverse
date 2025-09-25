import React from 'react'
import Header from '../components/Header'
import ResponsiveHeader from '../components/Navbar'
import BloList from '../components/BloList'

const Home = () => {
  return (
    <div>
        <ResponsiveHeader/>
        <Header/>
        <BloList/>
    </div>
  )
}

export default Home