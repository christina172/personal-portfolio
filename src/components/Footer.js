import phone from "./images/phone-svgrepo-com.svg";
import mail from "./images/mail-svgrepo-com.svg";
import woman1 from "./images/woman-grey-640.png";
import woman2 from "./images/woman-grey-306.png";

function Footer() {
    return (
        <footer>
            <div className="contact-info">
                <h2>Contact me</h2>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <p>67 Main Road<br />City, Country, 220345</p>
                <p className="phone"><img src={phone} alt="phone" />+708 (25) 123-45-67 </p>
                <p className="mail"><img src={mail} alt="mail address" />name@mail.com</p>
            </div>
            <picture>
                <source media="(max-width: 1000px)" srcSet={woman2} />
                <img className="footer-image" src={woman1} alt="woman at the desk" />
            </picture>
        </footer>
    );
}

export default Footer;