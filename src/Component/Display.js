import React from "react";
import Navbar from "./Navbar";
import "../css/Display.css";

class Display extends React.Component {
  render() {
    const { menuItems, menuState, selectedMenuName } = this.props.allData;
    return (
      <div className="display">
        <Navbar />
        {menuState === 0 ? (
          <ul className="verticalNav">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={item.isActive ? `active` : undefined}
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <h3 className="selectedMenuName">{selectedMenuName}</h3>
        )}
      </div>
    );
  }
}
export default Display;
