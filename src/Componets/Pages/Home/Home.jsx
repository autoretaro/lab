import Menu from "../../Header/Menu"; // Corrected relative path
import "../Home/Home.css";
import CardsHome from "./CardsHomes";

  
const Home = () => {
  return (
    <div>
      <Menu />
      <main>
           <CardsHome/>
      </main>
    </div>
  );
};

export default Home;
