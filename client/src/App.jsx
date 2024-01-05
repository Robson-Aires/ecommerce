import React from 'react';
import Canvas from './canvas/index';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Products from './pages/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css"
import TopProducts from './pages/TopProducts/TopProducts';
import Banner from './pages/Banner/Banner'

const App = () => {
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration:800,
      easing: "ease-in-sine",
      delay: 100,
    }, [])
  })
  return (
    <>
    <main className='app transition-all ease-in'>
    <Home />
    <Canvas />
    <Customizer />
    </main>
    <Products />
    <TopProducts />
    <Banner />
    </>
  )
}

export default App