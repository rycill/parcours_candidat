import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ links }) {
  return (
    <div className="menu">
      <ul className="menu_items">
        {links.map((item) => (
          <li key={item.path} className="menu_item">
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
