
import './App.css'
import Header from './components/Header/Header'
import Product from './components/Product/Product'





function App() {
 
const logo ="./print.png"


  return (
    <>

    <Header
    Logo={logo}
    Cart="Cart 0"

    CartButton="0"
  
    />
    
    <div className='Card-Container'>
    <Product
      title="A sign of Four"
      author="Sir Arthur Conan Doyle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quisquam accusamus sint dolorem."

  />
  <Product
      title="A Study in Scarlet"
      author="Sir Arthur Conan Doyle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quisquam accusamus sint dolorem."

  />
  <Product
      title="A Study in Scarlet"
      author="Sir Arthur Conan Doyle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quisquam accusamus sint dolorem."

  />
  <Product
      title="A Study in Scarlet"
      author="Sir Arthur Conan Doyle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quisquam accusamus sint dolorem."

  />
  </div>
    </>
  )
}

export default App

