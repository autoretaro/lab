
const Cards = ({ paragraph, imgSrc }) => {
    return (
      <div className="container">
        <img src={imgSrc} alt="" className="photoCard" />
        <div className="textContainer">
          <p className="paragraph-home" >{paragraph}</p>
        </div>
      </div>
    );
  };
  
  export default Cards;