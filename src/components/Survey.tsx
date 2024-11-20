import Image from "next/image"
import"@/app/style/survey.css"

export default function Survey  ()  {
  return (
<div className="sur-continer">
  <div className="sur-div">
    <div>
      <Image 
      className="sur-img"
      src="/Image/food-quality-survey-1.webp"
      width={1000}
      height={600}
      alt="survey"
      />
    </div>
    <div className="sur-div1">
      <h2 className="sur-heading">Survery</h2>
      <h2 className="sur-heading">
        About Our <span className="sur-span">Food</span>
      </h2>
      <p className="sur-para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quod provident aliquid dolor fugiat totam, nostrum consequatur beatae incidunt! Deleniti itaque labore harum officiis maxime ipsam voluptates totam doloribus pariatur! Accusamus pariatur dicta voluptas perspiciatis!
         <br/> <br/>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quod provident aliquid dolor fugiat totam, nostrum consequatur beatae incidunt! Deleniti itaque labore harum officiis maxime ipsam voluptates totam doloribus pariatur! Accusamus pariatur dicta voluptas perspiciatis!
      </p>
    </div>
  </div>
</div>
) 
}
