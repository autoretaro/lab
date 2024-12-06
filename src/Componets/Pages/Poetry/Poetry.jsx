import Menu from "../../Header/Menu";

const PoetryComponent = ({ title, paragraph }) => {
  return (
    <div className="mb-5">
      <div className="text-center mb-3">
        <h2 className="display-4 font-italic">{title}</h2>
      </div>
      <div className="poetry-paragraph">
        <p className="lead text-justify">{paragraph}</p>
      </div>
    </div>
  );
};

const Poetry = () => {
  return (
    <div>
      <header><Menu /></header>
      <main className="container py-5">
        <div className="poetry">
          <h1 className="text-center mb-4 display-3">Poesias</h1>
          <div>
            <PoetryComponent
              title="O Autorretrato"
              paragraph="O Autorretrato se encontra na segunda edição e é um projeto de fotografia contemporânea que prevê a realização do Laboratório de Fotografia Quilombola. O curso visa formar 60 jovens quilombolas para a produção de fotografias experimentais, conceituais e documentais. A formação será em três comunidades remanescentes de quilombo, banhadas pelo rio Paraguaçu: Santiago do Iguape, São Francisco do Paraguaçu, ambas distritos de Cachoeira, e a comunidade quilombola Santo Antônio, localizada na zona rural de São Félix. Em cada localidade serão ofertadas 20 vagas em um processo de seleção lúdico nas escolas dessas comunidades. Ao final do projeto, serão realizadas três instalações com suportes diversos nas localidades onde."
            />
            {/* Adicione mais componentes PoetryComponent conforme necessário */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Poetry;
