import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Value from './components/Value/Value'

const Aboutpage = () => {
  return (
    <div className="page-container">
      <Header />
      <About />
      <Value />
      <Footer />
    </div>
  )
}

export default Aboutpage
