import Canvas from './canvas/index';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Products from './pages/Products/Products';

const App = () => {
  return (
    <>
    <main className='app transition-all ease-in'>
    <Home />
    <Canvas />
    <Customizer />
    </main>
    <Products />
    </>
  )
}

export default App