import React from 'react'
import HomeNavbar from './components/NavBar/HomeNavbar'
import HeroSection from './Pages/Home/HeroSection'
import AboutSection from './Pages/Home/AboutSection'
import Offer from './Pages/Home/Offer'
import Footer from './components/Footer/Footer'
import PackageSection from './Pages/Home/PackageSection'

function App() {
    return (
        <div>


            <HomeNavbar />
            <HeroSection />

            <AboutSection />
            <PackageSection />
            <Offer />
            <Footer />


        </div >
    )
}

export default App