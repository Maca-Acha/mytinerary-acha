import Logo from "../assets/logo-blanco.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";

export default function Footer() {
    return(
        <div className="footer">
            <div className="contacto-footer">
                <div className="logo-footer">
                    <img src= {Logo} className="logofooter" />
                </div>
                <nav className="nav-2">
                    <a className="nav2">Home</a>
                    <a href="/cities" className="nav2">Cities</a>
                    <a className="nav2">Log in</a>
                    <a className="nav2">Sing up</a>
                </nav>
                <div className="contacto">
                    <p>100-108 W Centre St, Baltimore, MD 21201, EE.UU.</p>
                    <a class="mail" href="mailto:mdhl@chihockey.org">info@mytinerary.com</a>
                    <p className="telefono">+44 20 3500 0202</p>
                </div>
                <div className="social-icons">
                    <MdOutlineFacebook className="social-icons2" />
                    <AiFillInstagram className="social-icons2" />
                    <AiFillTwitterCircle className="social-icons2" />
                    <RiWhatsappFill className="social-icons2" />
                </div>
            </div>
        </div>
    )
}