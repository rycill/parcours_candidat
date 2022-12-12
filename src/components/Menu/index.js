//import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ links }) {
  return (
    <div className="App-header">
      <div className="App-logo"></div>
      <div className="App-title">Parcours candidat</div>
      {/*<div className="menu">
        <ul className="menu_items">
          {links.map((item) => (
            <li key={item.path} className="menu_item">
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      */}
    </div>
  );
}
export default Menu;
