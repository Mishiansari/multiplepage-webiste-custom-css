import Dash from "./Dash"
import ServiceCard from "./ServiceCard"
import"@/app/style/service.css"


const servicesData=[
    {
        img:"/Image/chef.jpg",
        title:"chef",
        desc:"lorem ispum dolor sit amet consectetur adipiscing elit. Atque, odio"
    },
    {
        img:"/Image/dlivery.jpeg",
        title:"Delivery",
        desc:"orem ispum dolor sit amet consectetur adipiscing elit. Atque, odio"
    },
    {
        img:"/Image/Drinks.png",
        title:"Drink list",
        desc:"orem ispum dolor sit amet consectetur adipiscing elit. Atque, odio"
    },
    {
        img:"/Image/WIFI.png",
        title:"Free wifi",
        desc:"orem ispum dolor sit amet consectetur adipiscing elit. Atque, odio"
    }
]


export default function Services  ()  {
  return (
    <div className="serv-continer">
        <div className="serv-div">
            <h2 className="serv-heading">
                Choose Best <span className="serv-span">Service</span>
            </h2>
            <p className="serv-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/>
            Quiem aesse enum animi?
           
            </p>
            <div className="serv-div1">
                <Dash/>

            </div>
        </div>



        <div className="serv-div2">
            {servicesData.map((item, index) =>
                 <ServiceCard key={index}
                  img={item.img} 
                  title={item.title} 
                 desc={item.desc}
                 />
                 )}
            
        </div>
    
    </div>
  )
}
