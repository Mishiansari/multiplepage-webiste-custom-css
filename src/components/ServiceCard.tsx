import React from 'react'
import Image from 'next/image';
import"@/app/style/servicecard.css"

interface propstype{
    img:string;
    title:string;
    desc:string;
}



const ServiceCard:React.FC<propstype> = ({img,title,desc}) => {
  return (
    <div className='ser-continer'>
        <Image className="ser-img"
        src={img}
        width={70}
        height={70}
        alt={title}
        />



        <div className='ser-div'>{title}
          <div className='ser-div1'>
           <div className='ser-dev2'/>
           <div className='ser-dev2'/>
           <div className='ser-dev2'/>
          </div>
        </div>
        <p className='ser-p'>{desc}</p>
    </div>
  )
}

export default ServiceCard