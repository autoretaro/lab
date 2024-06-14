// Catalog.js

import React from 'react';
import '../Catalog/Catalog.css';

const Catalog = ({ photo, photographer, description }) => {
    return (
      <div className="box-cards">
            <img src={photo} alt="" className="photoCard" />
            <h4>{photographer}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Catalog;
