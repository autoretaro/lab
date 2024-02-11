import Menu from "../../Header/Menu";
import "../Catalog/Catalog.css"
import Catalog from "./Catalog";
import Vanderlei from "../../../assets/img/main/Exposição01/VanderleiNeto.jpg";



  
const CatalogComponet = () => {
  return (
    <div>
        <header>
            <Menu />
        </header>
      <main>
            <h1 className="title">Autoretrato Lab</h1>
            <div className="cards-container">
              <div className="cards">
                <div className="cards-box">
                    <Catalog  box-card photo={Vanderlei} photographer="Vanderlei Neto" description="Lorem, ipsum dolor sitt."/>
                </div>
                <div className="cards-box">
                    <Catalog  photo={Vanderlei} photographer="Vanderlei Neto" description="Lorem, ipsum dolor sit amet ."/>
                </div>
                <div className="cards-box">
                    <Catalog photo={Vanderlei} photographer="Vanderlei Neto" description="Lorem, ipsum dolor sit amet ."/>
                </div>
               </div>
            </div>
      </main>
    </div>
  );
};

export default CatalogComponet;
