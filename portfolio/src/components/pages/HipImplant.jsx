import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./hipimplant.scss";

export default function HipImplant() {

    return (
        <div className='containers'>
            <div className='header'>
                <div className="slider">
                    <Carousel />
                </div>
                <div className='info'>
                    <h2>Technology</h2>
                    <li>Autodesk Inventor</li>
                    <h2>Contributors</h2>
                    <li>Jerry Wan</li>
                    <li>Abby McEwan</li>
                    <li>Huzafa Hyde</li>
                    <li>Iqra Awan</li>
                    <h2>Date</h2>
                    <li>Sept 2020 ~ Oct 2020</li>
                </div>

            </div>
            <div className='body'>
                <h1>Background</h1>
                <p>This is a 4-people team project for my first year biomedical engineering design class. 
                    The objective is to create a custom hip implant design for a patient suffering from unique hip problems. 
                    As a roadmap, we first diagnosed the problem using our anatomical knowledge. 
                    Using Autodesk Inventor, we created a solid CAD model of the hip implant. 
                    This design was furthered refined through our material selection process, 
                    where we went through dozens of medical papers pertaining to potential biomaterials of the hip implant. 
                    Our project was presented in front of the entire faculty during the annual iBioMed showcase.</p>
                
                <h1>Challenges and lessons learned</h1>
                <p>A big challenge of the project lies in reflecting our design ideas on the Autodesk Inventor model of the hip implant. 
                    Several design choices, like grooves on the femoral stem and the asymmetrical shape of the acetabular cups, were immensely difficult to implement.
                    We had to teach ourselves advanced CADing techniques as we simultaneously worked on the research component of the project. This effort isn't without 
                    reward. I personally gained a much deeper understanding of CADing using Autodesk Inventor and learned a handful of tricks allowed me to be a more efficient
                    designer. 
                </p>
                <p>Looking in hindsight, it might've been wise to devise our design whilst considering the feasibility of the design in production.
                    We were lucky that the designs worked out this time, but in the future we should take additions steps in ensuring that the design is practical enough
                    to be executed.
                </p>
            </div>
        </div>
        
        // <div>
        // <Carousel />
        // </div>

    )
}
