import Dash from "./Dash";
import Image from "next/image";
import"@/app/style/feature.css"

export default function Features () {
  return (
    <div className="feature-container">
        <h2 className="featureheading">Our</h2>
        <h2 className="featureheading1">
            Features <span className="f-span">Food</span>
        </h2>
        <p className="featurepara">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore repudiandae esse blanditiis aliquid hic odit repellendus, quas quasi quae minus dignissimos aperiam tenetur odio nesciunt voluptate quod. 
        </p>

        <Dash/>
        <div className="feature-div2">
          <div className="feature-div3">
            <Image 
            className="feature-img"
            src="/Image/spicy egges.avif"
            width={300}
            height={600}
            alt="grid-image"
            />

           <div className="feature-div4">
            <Dash/>
            <h2 className="feature-heading2">Spicy peservec Eggs</h2>
            <p className="feature-para1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, maxime!
            </p>
            </div> 
          </div>


          <div className="feacture-div5">
            <Image 
            className="feature-img2"
            src="/Image/french desert copy.jpg"
            width={500}
            height={900}
            alt="grid-image"
            />

           <div className="feature-div6">
            <Dash/>
            <h2 className="featureheading3">French Deserte</h2>
            <p className="featurpara2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, maxime!
            </p>
            </div> 
          </div>



          <div className="feature-div7">
            <Image 
            className="feature-img2"
            src="/Image/grid3.jpeg"
            width={300}
            height={600}
            alt="grid-image"
            />

           <div className="feature-div8">
            <Dash/>
            <h2 className="featureheading3">cherries beaf</h2>
            <p className="featurpara2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, maxime!
            </p>
            </div> 
          </div>



        </div>
    </div>
  )
}
