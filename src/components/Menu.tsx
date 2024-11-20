import Dash from './Dash'
import Image from 'next/image'
import { MenuCard } from './MenuCard'
import"@/app/style/menu.css"

const menuData =[
    {
        img:"/Image/cake.jpeg",
        title:"Yummy cake",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$29.50"
    },
    {
        img:"/Image/chocolate Macrons.jpeg",
        title:"Chocolate Macrons",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$14.50"
    },
    {
        img:"/Image/BBQ.jpeg",
        title:"BBQ pizza fires",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$13.50"
    },
    {
        img:"/Image/bEAD.avif",
        title:"cheeze Beaf Burger",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$19.50"
    },
    {
        img:"/Image/zinger.jpeg",
        title:"Zinger Burger",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$18.50"
    },
    {
        img:"/Image/Tandori Mushroom pizza.jpeg",
        title:"Tendori Pizza",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$13.50"
    },
    {
        img:"/Image/pepperoni pizza roll.jpeg",
        title:"Tpepperoni pizza roll",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$23.50"
    },
    {
        
        img:"/Image/fish.jpeg",
        title:"Fish",
        desc: "2x tuma sehmi, 2x noodles",
        price:"$25.50"
    }
]


export  default function Menu ()  {
  return (
     <div className='menu-container'>
        <div className='menu-div'>
        <h2 className='menu-heading'>
            Our <span className='menu-span'>Menu</span>
        </h2>
        <p className='menu-para'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsa!
            <br/>
            quidem esse enum aninmal?
        </p>
        <div className='menu-div1'>
            <Dash/>
        </div>
         </div>


        <ul className='menu-ul'>
            <li className='menu-li1'>Appetizers</li>
            <li className='menu-li'>Breakfast</li>
            <li className='menu-li'>Slads</li>
            <li className='menu-li'>Soup</li>
            <li className='menu-li'>Meat&Fish</li>
            <li className='menu-li'>Desert</li>
            <li className='menu-li'>Drinks</li>
        </ul>

        <div className='menu-div2'>
            <div className='menu-div3'>
                <Image className="menu-img" 
                src="/Image/FOOD.avif"
                width={500}
                height={500}
                alt="dish"
                />
            </div>


            <div className='menu-div4'>
             {menuData.map((item,index)=>
                 <MenuCard key={index} 
                 img={item.img}
                  title={item.title}
                   desc={item.desc} 
                   price={item.price}
                   />
                   )}
            </div>
        </div>
         
          



         </div>
  )
}
