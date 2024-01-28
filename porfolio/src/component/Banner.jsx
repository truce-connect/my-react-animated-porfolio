import { useState } from 'react'
import React from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { Col, Container, Row } from 'react-bootstrap'
import headerimg from "../assets/img/header-img.svg"

const Banner = () => {
  return (
    <section className='banner' id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                     <span className='tagline'> welcome to portfolio</span>
                     <h1>{`hi  i am Truce` }<span className='wrap'> web-developer </span></h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est soluta consectetur enim ipsum autem, ducimus nam earum voluptate dolore.</p>
                     <button onclick ={() => console.log("let connect")}>let connect <ArrowRightCircle size={25}/> </button>

                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img src={headerimg} alt='header-img'/>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner