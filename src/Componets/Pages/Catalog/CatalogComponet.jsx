import Menu from "../../Header/Menu";
import "../Catalog/Catalog.css";
import Catalog from "./Catalog";

// Lista de objetos com informações dos cards (substitua pelos dados reais)
const cardsData = [
  {
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/lab01-9ae04.appspot.com/o/Copy%20of%20Jose%20Vanderlei%20do%20Nascimento.jpg?alt=media&token=f425e902-8daf-4d72-bc86-589b60aa6ed1",
    photographer: "Vanderlei Neto",
    description: "Lorem, ipsum dolor sit amet.",
  },
  {
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/lab01-9ae04.appspot.com/o/Copy%20of%20Jose%20Vanderlei%20do%20Nascimento.jpg?alt=media&token=f425e902-8daf-4d72-bc86-589b60aa6ed1",
    photographer: "Outro Fotógrafo",
    description: "Outra descrição interessante.",
  },
  {
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/lab01-9ae04.appspot.com/o/Copy%20of%20Jose%20Vanderlei%20do%20Nascimento.jpg?alt=media&token=f425e902-8daf-4d72-bc86-589b60aa6ed1",
    photographer: "Outro Fotógrafo",
    description: "Outra descrição interessante.",
  },
  // Adicione mais objetos conforme necessário
];

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
                  box-card
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
