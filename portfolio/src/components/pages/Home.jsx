import React from 'react'
import Intro from "../intro/Intro"
import Portfolio from "../portfolio/Portfolio"
import "./Home.scss"

export default function Home() {
    return (
    <div className="sections">
        <Intro/>
        <Portfolio/>
    </div>
    )
}
