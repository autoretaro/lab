import Menu from "../../Header/Menu";
import "../Catalog/Catalog.css";
import Catalog from "./Catalog";
import cardsData from '../../../assets/cardsData.json'; // Importando os dados do arquivo JSON

const CatalogComponent = () => {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <h1 className="title">Autoretrato Lab</h1>
        <div className="cards-container">
          <div className="cards">
            {cardsData.map((card, index) => (
              <div className="cards-box" key={index}>
                <Catalog
                  key={index}
                  photo={card.imageUrl}
                  photographer={card.photographer}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CatalogComponent;
