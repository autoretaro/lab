import "../Footer/Footer.css";
import logoPatrocinioOrizonal from "../../assets/img/main/logo-orizontal.png";
import logoPatrocinioVertical from "../../assets/img/main/logo-vertical.png";
import logoRedeEparrei from "../../assets/img/main/Rede_eparrei.png";
import logoEparreiFilmes from "../../assets/img/main/Eparrei_filmes.png";
import logoKatende from "../../assets/img/main/Logo_katende.png";

const textAlt = "Logos Funaate, Ministerio da Cultura, Governo Federal";
const CreateLogoApoio = ({ imgSrc, alt }) => {
  return (
    <div className="container__footer">
      <img src={imgSrc} alt={alt} className="" />
      <div className=""></div>
    </div>
  );
};

const CreateLogoPatrocinio = ({ imgSrc, textAlt }) => {
  return (
    <footer className="footer">
      <div className="container__footer">
        <img src={imgSrc} alt={textAlt} />
        <div className=""></div>
      </div>
    </footer>
  );
};

const Footer = () => {
  return (
    <footer className="container__footer">
      <div className="footer__rede-parrei">
        <CreateLogoApoio imgSrc={logoRedeEparrei}  alt="Logo da Rede de Desenovolvimento Quilombola Eparrei"/>
      </div>
      <div className="footer__rede-parrei">
        <CreateLogoApoio imgSrc={logoEparreiFilmes} alt="Logo da Eaprrei Filmes"/>
      </div>
      <div className="footer_katende_filmes">
        <CreateLogoApoio imgSrc={logoKatende} />
      </div>
      <div className="footer__orizontal">
        <CreateLogoPatrocinio imgSrc={logoPatrocinioOrizonal}  className="logoPatrocinioOrizontal" />
      </div>
      <div className="footer__vertical">
        <CreateLogoPatrocinio imgSrc={logoPatrocinioVertical} alt={textAlt}/>
      </div>
      <div className="paragraph">
        <p>
          Esse projeto foi fomentado <strong>Programa Funarte Retomada 2023 - Artes Visuais</strong>
        </p>
        <p className="paragraph"><strong>© Todos os direitos reservados à Rede de Desenvolvimento Quilombola Eparrei.</strong></p>
        <a className="dev" href="https://vanderleineto.tech/" target="_blank" rel="noopener noreferrer">
          {new Date().getFullYear()} Feito por Vanderlei Neto
        </a>
        <p className="paragraph">
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;

