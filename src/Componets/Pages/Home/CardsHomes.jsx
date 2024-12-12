import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cardHomeData from "../../../assets/cargHome.json";

const Cards = ({ description, imgSrc, textAlt }) => {
  return (
    <div className="card mb-4 shadow-lg card-responsive">
      <div className="row g-0">
        {/* Imagem */}
        <div className="col-md-4">
          <img 
            src={imgSrc} 
            className="img-fluid h-100 rounded-start card-image" 
            alt={textAlt} 
          />
        </div>
        {/* Texto */}
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsHomes = () => {
  return (
    <article className="container-fluid min-vh-100 py-4">
      {/* Título */}
      <div className="text-center mb-4">
        <h1 className="display-5">Autorrtrato Lab</h1>
      </div>

      {/* Lista de Cards */}
      <div className="row justify-content-center">
        {cardHomeData.map((data, index) => (
          <div key={index} className="col-12 col-md-10 col-lg-8">
            <Cards 
              description={data.Description} 
              imgSrc={data.imgSrc} 
            />
          </div>
        ))}
      </div>
    </article>
  );
};

export default CardsHomes;
