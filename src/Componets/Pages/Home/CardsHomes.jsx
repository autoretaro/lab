import autoretratoSegundaEdicao from "../../../assets/img/main/autoretrato-primeiraedicao.png";
import '../Home/Home.css';
import Cards from "./Cards";



  
const CardsHome = () => {
  return (
    <div>
    <Cards />
      <main>
            <h1 className="title">Autoretrato Lab</h1>
            <div className="cardsHome">
            <Cards  imgSrc={autoretratoSegundaEdicao} paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            <Cards  imgSrc={autoretratoSegundaEdicao} paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            </div>
      </main>
    </div>
  );
};

export default CardsHome;
