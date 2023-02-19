import { useState } from 'react'
import Header from './components/Layout/Header'
import Guitars from './components/Guitars/Guitars'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
    const [cartIsShown, setCartIsShown] = useState(false)

    const showCarthandler = () => {
        setCartIsShown(true)
    }
    const hideCarthandler = () => {
        setCartIsShown(false)
    }

    return ( <
        CartProvider > {
            cartIsShown && < Cart onClose = { hideCarthandler }
            />} <
            Header onShowCart = { showCarthandler }
            /> <
            main >
            <
            Guitars / >
            <
            /main> <
            /CartProvider>
        )
    }

    export default App