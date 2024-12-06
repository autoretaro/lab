import "../Footer/Footer.css";
import logoPatrocinioOrizonal from "../../assets/img/main/logo-orizontal.png";
import logoPatrocinioVertical from "../../assets/img/main/logo-vertical.png";
import logoRedeEparrei from "../../assets/img/main/Rede_eparrei.png";
import logoEparreiFilmes from "../../assets/img/main/Eparrei_filmes.png";
import logoKatende from "../../assets/img/main/Logo_katende.png";

const CreateLogoApoio = ({ imgSrc }) => {
  return (
    <div className="container__footer">
      <img src={imgSrc} alt="" className="" />
      <div className=""></div>
    </div>
  );
};

const CreateLogoPatrocinio = ({ imgSrc }) => {
  return (
    <div className="footer">
      <div className="container__footer">
        <img src={imgSrc} alt="" className="" />
        <div className=""></div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="container__footer">
      <div className="footer__rede-parrei">
        <CreateLogoApoio imgSrc={logoRedeEparrei} />
      </div>
      <div className="footer__rede-parrei">
        <CreateLogoApoio imgSrc={logoEparreiFilmes} />
      </div>
      <div className="footer_katende_filmes">
        <CreateLogoApoio imgSrc={logoKatende} />
      </div>
      <div className="footer__orizontal">
        <CreateLogoPatrocinio imgSrc={logoPatrocinioOrizonal} />
      </div>
      <div className="footer__vertical">
        <CreateLogoPatrocinio imgSrc={logoPatrocinioVertical} />
      </div>
      <div className="paragraph">
        <p>
          Esse projeto foi fomentado <strong>Programa Funarte Retomada 2023 - Artes Visuais</strong>
        </p>
        <a className="paragraph" href="https://vanderleineto.tech/" target="_blank" rel="noopener noreferrer">
          © {new Date().getFullYear()} Feito por Vanderlei Neto
        </a>
        <p className="paragraph">
          <strong>
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
              Licenciado sob a <strong>Licença MIT</strong>.
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;

