import { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCarthandler = () => {
    console.log(cartIsShown)
    setCartIsShown(true)
  }
  const hideCarthandler = () => {
    setCartIsShown(false)
  }

  return (
    <>
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App
