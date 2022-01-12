import React from 'react'
import Intro from "../intro/Intro"
import Portfolio from "../portfolio/Portfolio"
import Contact from "../contact/Contact"
import Works from '../works/Works'
import "./Home.scss"

export default function Home() {
    return (
    <div className="sections">
        <Intro/>
        <Portfolio/>
    </div>
    )
}
