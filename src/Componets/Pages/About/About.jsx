import Menu from "../../Header/Menu";
import "../About/About.css";

const AboutComponets = ({ paragraph, imgSrc }) => {
    return (
      <div>
        {/* <img src={imgSrc} alt="" className="photoCard" /> */}
        <div className="textContainer">
          <p className="paragraph-about" >{paragraph}</p>
        </div>
      </div>
    );
  };
  
  
const About = () => {
  return (
    <div>
        <Menu />
      <article  className="container">
        <div className="about">
            <h1 className="title">Autoretrato Lab</h1>
            <div >
            <AboutComponets  paragraph="O Autorretrato se encontra na  segunda edição é um projeto de fotografia contemporânea que prevê a realização do Laboratório de Fotografia Quilombola que visa formar 60 jovens quilombolas para produção de fotografias experimentais, conceituais e documentais. O curso é direcionado à jovens estudantes do ensino médio em três  comunidades remanescentes de quilombo, banhadas pelo rio paraguaçu: Santiago do Iguape, São Francisco do Paraguaçu ambas distrito de Cachoeira e a comunidade quilombola Santo Antônio que fica na zona rural de São Félix. Em cada localidade serão ofertadas 20 vagas em um processo de seleção lúdico nas escolas de cada comunidade. Ao final do projeto, serão realizadas três instalações com suportes diversos nas localidades onde "/>
            {/* <Cards  imgSrc={autoretratoSegundaEdicao} paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/> */}
            </div>
            </div>
      </article>
    </div>
  );
};

export default About;