import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import header from "../assets/img/editedboj.png";

const Banner = () => {
  const [Loopnum, setLoopnum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = ["web devloper","web designer","UI/UX designer"];
  const [text, SetText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = Loopnum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, fullText.length - 1)
      : fullText.substring(0, text.length + 1);
    SetText(updatedText);

    if(isDeleting){
       setDelta(prevDelta => prevDelta / 2)
    }
     if (!deleting && updatedText === fullText) {
       setisDeleting(true)
       setIndex(prevIndex => prevIndex - 1);
       setDelta(period)
     }else if(isDeleting && updatedText === ""){
      setisDeleting(false)
      setLoopnum(Loopnum + 1 )
      setIndex(1);
      setDelta(500)
     }
     else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };




  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col className="xs{12} md{6} xl{7}">
            <span className="tagline">welcome to my portfolio</span>
            <h1>
              {"Hi, am truce-tech"}
              <br></br>
              <span>{text}</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicig elit. Non
                iusto, qui deleniti obcaecati nihil doloribus molestias natus
                fuga optio quas.
              </p>
              <button onClick={() => console.log(connect)}>
                {" "}
                letconnect <ArrowRightCircle size={25} />
              </button>
            </h1>
          </Col>
          <Col className="xs{12} md{6} xl{5}">
            <img src={header} alt="header img" className="headi" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
