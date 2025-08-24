import React from 'react'
import Navbar from './components/Navbar'
import Permission from './components/Permission'
import Content from './components/Content'
import Collaboration from './components/Collaboration'
import Security from './components/Security'
import Footer from './components/Footer'
import Empower from './components/Empower'
import Discover from './components/Discover'


const App = () => {
  return (
    <div id="main-container" className='bg-white flex flex-col items-center data-scroll-container'>
      <Navbar />
      <Permission />
      <Content />
      <Collaboration />
      <Security />
      <Empower />
      <Discover />
      <Footer />
    </div>
  )
}

export default App