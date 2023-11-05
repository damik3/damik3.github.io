import './Footer.css'
import GithubLogo from './github-mark.png'
import LinkedinLogo from './LI-In-Bug.png'
import MailLogo from './mail_FILL0_wght400_GRAD-25_opsz24.svg'
function Footer() {
    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center my-5"}>
                <a href="https://youtu.be/1P5yyeeYF9o?si=g051NOaUyGCfbEpW   " target="_blank" rel="noopener noreferrer">
                    <img src={MailLogo} alt="Mail logo" className="footer-logo mx-2"></img>
                </a>
                <a href="https://youtu.be/YxjY_YTksKM?si=UbFshOlmZmsQfdxw" target="_blank" rel="noopener noreferrer">
                    <img src={GithubLogo} alt="Github logo" className="footer-logo mx-2"></img>
                </a>
                <a href="https://youtu.be/W5BxWMD8f_w?si=Lifz8EOedc0BT9vD" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinLogo} alt="Linkedin logo" className="footer-logo mx-2"></img>
                </a>
            </div>
        </div>
    )
}

export default Footer;