import Carousel from "./Carousel-CR";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./crossyroad.scss";

export default function CrossyRoad() {
    const [controlShow, setControlShow] = useState(false);
    return (
        <div className='containers'>
            <div className='header'>
                <div className="slider">
                    <Carousel show={controlShow}/>
                </div>
                <div className='info'>
                    <h2>Technology</h2>
                    <li>C++</li>
                    <li>OpenGL</li>
                    <h2>Contributors</h2>
                    <li>Jerry Wan</li>
                    <h2>Date</h2>
                    <li>Jan 2020</li>
                    <h2>Carousel Settings</h2>
                    <button onClick={()=>setControlShow(!controlShow)}>
                    Hide/Shown Carousel Controls
                    </button>
                </div>

            </div>
            <div className='body'>
                <h1>Background</h1>
                <p>A recreation of the popular game "Crossy Road" by Hipster Whale in C++ and OpenGL. As the saying goes, "How does the chicken cross the road?",
                    this game takes answering that question in the most literal way -- by making the players cross the road as a pixelated chicken. Using the standard
                    WASD control, the objective is to make it to the end of the map without hitting the moving blocks. The terrain is generated through data stored 
                    inside of a text file, while the moving blocks are randomly generated. 
                </p>
                
                <h1>Challenges and lessons learned</h1>
                <p>I started this project knowing nothing about making a 3D game. I had to spend countless hours teaching myself the concepts of game development. Going
                    through various sources on the internet and finding the ones that worked was the hardest part, I had to use my every wits to put together foreign
                     concepts in the hopes of attaining what I wanted to achieve. 
                </p>  
                <p>As it turned out, this experience proved to be immensely useful in the future as I 
                     tried to teach myself web frameworks. It taught me to persevere in the face of adversity, when nothing seemed to be working. It taught me how and where
                     to find the resources I needed, while helping me distinguish their validity. Most importantly, it helped me realize that most of the things I want
                     to learn can be self-taught, that I don't have to rely on school to teach me everything.
                </p>
            </div>
        </div>
        
        // <div>
        // <Carousel />
        // </div>

    )
}