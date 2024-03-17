import { FaHeart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import './footer.styles.css';
const Footer = () =>{
    return(
        <div className="footer-container">
            <div><span> Created with <FaHeart /> by Amakiri Emmanuel</span></div>
            <div>
                <a href="https://github.com/Makiri-Code/Quote-generator.git" target="_blank">
                    Get Code Here<FaGithub className="icon"/>
                </a>
            </div>
        </div>
    )
};

export default Footer;