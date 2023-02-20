import classes from './Cart.module.css'
import Modal from '../UI/Modal'


const Ordered = (props) => {
  console.log("ordered")
  return (
    <Modal >
      <h1>test</h1>
      <div className={classes.total}>
        <span>Total Ordered</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} >
          Close
        </button>
      </div>
    </Modal>
  )
}

export default Ordered
