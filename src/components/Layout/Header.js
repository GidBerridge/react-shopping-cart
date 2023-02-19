import React from 'react'
// import { Container, Row } from 'react-bootstrap'

import guitarsImage from '../../assets/electric_1.jpg'
import icon from '../../assets/wave.png'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header} >
        <div>
          <img src={icon} alt="wave icon" className={classes.headerIcon} />
        </div> 
        <h1 className="title"> Kahuna Guitars </h1> 
        <HeaderCartButton onClick={props.onShowCart}/> 
      </header> 
        <div className={classes['main-image']} >
          <img src={guitarsImage} alt="A selection of fine guitars" />
        </div> 
    </>
     )}

    export default Header