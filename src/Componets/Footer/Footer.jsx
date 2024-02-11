import "../Footer/Footer.css";
import logoPatrocinioOrizonal from "../../assets/img/main/logo-orizontal.png";
import logoPatrocinioVertical from "../../assets/img/main/logo-vertical.png"

// eslint-disable-next-line react/prop-types, no-unused-vars
const CreateFooter = ({ paragraph, imgSrc }) => {
    return (
      <div className="ontainer__footer">
        <img src={imgSrc} alt="" className="" />
        <div className="">
          <p className="paragraph">{paragraph}</p>
        </div>
      </div>
    );
  };

const Footer = () => {
    return(
        <div className="container__footer">
            <div className="footer__orizontal">
            <CreateFooter imgSrc={logoPatrocinioOrizonal} paragraph="Autoretrato"/>
            </div>
            <div className="footer__vertical">
            <CreateFooter imgSrc={logoPatrocinioVertical} paragraph="Autoretrato" />
            </div>
        </div>
    )
}

export default Footer;

