import React, { useState, useContext } from "react";

import "./ThemeButtons.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themes } from "../../data/themeData";

function ThemeButtons() {
  const { setTheme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(themes[9]);
  return (
    <div className="buttons">
      {themes.map((item) => (
        <button
          className="button-circle"
          onClick={() => {
            setTheme(item.theme);
            setSelectedTheme(item);
          }}
          style={{
            background: `linear-gradient( 90deg, ${item.color1}, ${item.color1} 49%, white 49%, white 51%, ${item.color2} 51% )`,
            border: `${
              item.name === selectedTheme.name
                ? "3px solid blue"
                : "1px solid white"
            } `,
          }}
        ></button>
      ))}
    </div>
  );
}

export default ThemeButtons;
