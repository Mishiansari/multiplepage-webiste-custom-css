import Image from 'next/image'
import { IoMdMenu } from 'react-icons/io'
import"@/app/style/nav.css"

export  default function Navbar () {
  return (
    <div className='nav-container'>
        <div className='nav-div'>
            <Image 
            className='img'
            src="/Image/logo y.png"
            width={80}
            height={80}
            alt="lgo"/>
            <ul className='nav-ul'>
                <li className='nav-li'>Home</li>
                <li className='nav-li'>About</li>
                <li className='nav-li'>Food</li>
                <li className='nav-li'>Dish</li>
                <li className='nav-li'>Contact</li>
                <button  className='nav-btn'>Signup</button>
            </ul>
            <IoMdMenu 
        className='nav-io' size={30}/>
        </div>
    </div>
  )
}
