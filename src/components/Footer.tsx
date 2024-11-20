import { BsPinterest, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import"@/app/style/footer.css"

export  default function Footer  ()  {
  return (
    <div className="footer-container">
        <div className="ft-div">
            <div className="ft-div1">
                <h2 className="ft-heading">About us</h2>
                <p className="ft-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste nisi veniam cum voluptates expedita, impedit deleniti hic consectetur neque, necessitatibus praesentium? Nulla sit beatae quas, id dolore qui, dolores aliquid dolorum error quod aut.

                </p>
            </div>


          <div className="ft-div1">
            <h2 className="ft-heading">The Resturant</h2>
            <ul className="ft-ul">
                <li>About US</li>
                <li>Chefs</li>
                <li>Evets</li>
                <li>Content</li>
            </ul>
          </div>
          <div>

            <div className="ft-div3">
              <FaFacebookF/>
              <BsTwitter/>
              <BsPinterest/>
              <FaLinkedinIn/>
            </div>
            
          </div>
        </div>
    </div>
  )
}
