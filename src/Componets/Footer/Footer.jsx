import "../Footer/Footer.css";
import logoPatrocinioOrizonal from "../../assets/img/main/logo-orizontal.png";
import logoPatrocinioVertical from "../../assets/img/main/logo-vertical.png"


// eslint-disable-next-line react/prop-types, no-unused-vars
const CreateFooter = ({ paragraph, imgSrc }) => {
    return (
      <footer>
      <div className="container__footer">
        <img src={imgSrc} alt="" className="" />
        <div className="">
        </div>
       
      </div>
      <div className="paragraph">
        <p >Esse projeto foi fomentado <strong>Programa Funarte Retomada 2023 - Artes Visuais</strong></p>
        <a  className="paragraph" href="https://vanderleineto.tech/" target="_blank">Feito por Vanderlei Neto</a>
        </div>
      </footer>
    );
  };

const Footer = () => {
    return(
        <div className="container__footer">
            <div className="footer__orizontal">
            <CreateFooter imgSrc={logoPatrocinioOrizonal} />
            </div>
            <div className="footer__vertical">
            <CreateFooter imgSrc={logoPatrocinioVertical}/>
            </div>
        </div>
    )
}

export default Footer;

