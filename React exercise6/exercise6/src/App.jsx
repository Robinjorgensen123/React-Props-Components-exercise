
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Product from './components/Product/Product'





function App() {
 
const logo ="./print.png"

const [CartCount, setCartCount ] = useState(0);

const handleAddToCart = () => {
  setCartCount(CartCount + 1)
}



  return (
    <>

    <Header
    Logo={logo}
    Cart="Cart 0"
    CartCount={CartCount}
    
  
    />
    
    <div className='Card-Container'>
    <Product
      title="A sign of Four"
      author="Sir Arthur Conan Doyle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quisquam accusamus sint dolorem."
      addToCartBtn={handleAddToCart}
      
  />
  <Product
      title="A Study in Scarlet"
      author="Sir Arthur Conan Doyle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quisquam accusamus sint dolorem."
      addToCartBtn={handleAddToCart}
  />
  <Product
      title="A Study in Scarlet"
      author="Sir Arthur Conan Doyle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quisquam accusamus sint dolorem."
      addToCartBtn={handleAddToCart}
  />
  <Product
      title="A Study in Scarlet"
      author="Sir Arthur Conan Doyle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quisquam accusamus sint dolorem."
      addToCartBtn={handleAddToCart}
  />
  </div>
    </>
  )
}

export default App

