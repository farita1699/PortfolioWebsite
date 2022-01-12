import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App(props) {
    console.log(props);
    return (
      <div style={{ display: 'block', width: "70vw", height: "70vh", padding: 30 }}>
        <Carousel interval={null} controls={props.show}>
          <Carousel.Item>
          <video controls style ={{width: "100%", height: 500, backgroundColor:"black"}}>
       <source src="../assets/crossyroad/CrossyRoad.mp4" type="video/mp4"></source>
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/crossyroad/Program.png"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/crossyroad/Game(1).png"
              alt="Image Two"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/crossyroad/Game(2).png"
              alt="Image Three"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/crossyroad/Win.png"
              alt="Image Four"
            />
        </Carousel.Item>
        </Carousel>
      </div>
    );
  }