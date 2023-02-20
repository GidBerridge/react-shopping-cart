import { useContext } from 'react'

import classes from './GuitarItem.module.css'
import GuitarItemForm from './GuitarItemForm'
import CartContext from '../../../store/cart-context'

const GuitarItem = (props) => {
    const cartCtx = useContext(CartContext)

    const price = `£${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    }

    return ( <
        li className = { classes.Guitar } >
        <
        div >
        <
        h3 > { props.name } < /h3> <
        div className = { classes.description } > { props.description } < /div> <
        div className = { classes.price } > { price } < /div> <
        /div> <
        div >
        <
        GuitarItemForm onAddToCart = { addToCartHandler }
        /> <
        /div> <
        /li>
    )
}

export default GuitarItem