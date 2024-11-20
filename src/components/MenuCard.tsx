import React from 'react'
import Image from 'next/image';
import"@/app/style/menucard.css"

interface propstype{
    img:string;
    title:string;
    desc:string;
    price:string;
}


export const MenuCard:React.FC<propstype> = ({img,title,desc,price}) => {
  return (
    <div className='mc-continer'>
        <Image 
        className="mc-img"
        src={img}
        width={80}
        height={80}
        alt="dish"
        />
        <div className='mc-div'>
            <div>
                <h2>{title}</h2>
                <p className='mc-p'>{desc}</p>
            </div>

            <p className='mc-p1'>{price}</p>
        </div>
    </div>
  )
}
