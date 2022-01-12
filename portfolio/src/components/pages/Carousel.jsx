import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
    return (
      <div style={{ display: 'block', width: "70vw", height: "70vh", padding: 30 }}>
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/HipImplant.png"
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Custom Hip Implant Design</h3>
              <p>Poster and CAD model</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/NeedStatement.png"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/Diagnosis.png"
              alt="Image Three"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/DesignAspects.png"
              alt="Image Four"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/Conclusion.png"
              alt="Image Five"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/References.png"
              alt="Image Six"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/Poster.png"
              alt="Image Seven"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/FrontView.png"
              alt="Image Eight"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/SideView.png"
              alt="Image Nine"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100" style={{width: 800, height: 500, objectFit: "contain", backgroundColor:"black"}}
  src="../assets/hip-implant/TopView.png"
              alt="Image Ten"
            />
        </Carousel.Item>
        </Carousel>
      </div>
    );
  }

