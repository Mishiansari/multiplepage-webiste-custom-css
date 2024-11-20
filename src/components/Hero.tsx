import Image from "next/image"
import Navbar from "./Navbar"
import"@/app/style/hero.css"
export  default function  Hero  ()  {
  return (
    <div className="hero-container">
<Image  className="hero-img"
src="/Image/bg.jpg"
alt="hero image"
 width={500} 
 height={600}/>
 <Navbar/>

 <div className="hero-div">
    <div className="hero-div1">
        <p className="hero-para">Wide option of choice</p>
        <h2 className="hero-heading">
            Yummy <span className="hero-span">Food</span>
        </h2>
        <p className="hero-p1">
            Yummy Food color, aroma and test. <br/>
            What are you waiting for?
        </p>


        <button className="hero-btn">
            View More
            </button>
    </div>
 </div>
  </div>
  )
}
