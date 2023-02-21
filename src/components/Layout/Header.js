import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import guitarsImage from '../../assets/electric_1.jpg'
import icon from '../../assets/wave.png'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
    <Container>
          <header className={classes.header}>
        {/* <div> */}
          {/* <Col className={classes.headerKahuna}> */}
            <div className={classes.headerKahuna}>
            <img src={icon} alt="wave icon" className={classes.headerIcon} />
          </div> 
          <h1 className={classes.headerTitle}> Kahuna Guitars </h1> 
        {/* </Col> */}
        {/* <Col>    */}
          <HeaderCartButton onClick={props.onShowCart}/> 
        {/* </Col> */}
            {/* </div> */}
        </header> 
    </Container>
        <div className={classes['main-image']} >
          <img src={guitarsImage} alt="A selection of fine guitars" />
        </div> 
    </>
     )}

    export default Header