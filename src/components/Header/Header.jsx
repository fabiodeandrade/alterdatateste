import "./headerStyles.css";
import logoPic from "../../assets/Nuvem.png";
import { Link } from "react-router-dom";

export const MyHeader = () => {
  return (
    <header>
      <div className="headerInfo">
        <p>AREA ADMINISTRATIVA</p>
      </div>
      <div className="main">
        <Link to="/">
          <img
            src={logoPic}
            alt="
          Logo marca em formato de nuvem onde esta escrito nuvem alterdata
          "
          ></img>
        </Link>
      </div>
    </header>
  );
};
