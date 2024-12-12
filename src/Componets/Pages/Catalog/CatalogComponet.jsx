import PropTypes from 'prop-types';
import Menu from "../../Header/Menu";
import "../Catalog/Catalog.css";
import cardsData from "../../../assets/catalog.json";

const Catalog = ({ photo, photographer, description }) => {
  return (
    <div className="box-cards">
      <img src={photo || '/path/to/placeholder.jpg'} alt={`${photographer || 'Unknown'}'s work`} className="photoCard" />
      <h4>{photographer || 'Unknown Photographer'}</h4>
      <p>{description || 'No description available.'}</p>
    </div>
  );
};

Catalog.propTypes = {
  photo: PropTypes.string.isRequired,
  photographer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CatalogComponent = () => {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <article>
        <h1 className="title">Autoretrato Lab</h1>
        <div className="container">
          <div className="row">
            {cardsData.map((card, index) => (
              <div className="col-12 col-md-6" key={index}>
                <Catalog
                  photo={card.imageUrl}
                  photographer={card.photographer}
                  description={card.description}
                  alt={`${card.texAlt}'s work`}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default CatalogComponent;
