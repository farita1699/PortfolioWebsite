import Carousel from "./Carousel-ID";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./id-displayer.scss";

export default function IDDisplayer() {
    const [controlShow, setControlShow] = useState(false);
    return (
        <div className='containers'>
            <div className='header'>
                <div className="slider">
                    <Carousel show={controlShow}/>
                </div>
                <div className='info'>
                    <h2>Technology</h2>
                    <li>Digital Circuits</li>
                    <h2>Contributors</h2>
                    <li>Jerry Wan</li>
                    <h2>Date</h2>
                    <li>Dec 2021</li>
                    <h2>Carousel Settings</h2>
                    <button onClick={()=>setControlShow(!controlShow)}>
                    Hide/Shown Carousel Controls
                    </button>
                </div>

            </div>
            <div className='body'>
                <h1>Background</h1>
                <p>A digital circuit that displays a seriers of numbers (in this case my student ID 400299988) in an infinite cycle. This was my first major project 
                    that involved digital circuits, which I had learned two weeks prior. I was very proud of myself for getting this to work.
                </p>
                
                <h1>Challenges and lessons learned</h1>
                <p>A big challenge came from doing the preparation for the assembly. To know the order that the numbers will be displayed, I had to determine all the
                    possible state transitions, then determine mathematical equations that sastify the specific order I want to get, and finally pick the logic chips
                    that suit this need. There is a bunch of work involved and this experience taught me the importance to be very attentive to details. 
                </p> 
                <p>There was also the challenge of making the circuit. Once again, this process can be very prone to errors, things like faulty equipment, incorrect 
                    math, and clumsy wiring can make the circuit not work, or in worse cases, break the circuit. After messing up a couple of times, I started building
                    the circuit in a more methodical manner, documenting every step, and testing the circuit immediately after each small change is applied. This experience
                    taught me how to design systems in methodical manners to prevent errors from building up and ruining all the progress.
                </p> 
            </div>
        </div>
        
        // <div>
        // <Carousel />
        // </div>

    )
}