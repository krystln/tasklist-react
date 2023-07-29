import "./Components.css";
import Light from "../assets/lightThemeIcon.svg";
import Dark from "../assets/darkThemeIcon.svg";

import { theme, themeToggle } from "./Theme";

const NavBar = () => {
  const isDark = theme();
  const toggleIsDark = themeToggle();

  const styleTheme = {
    color: isDark ? "var(--TEXT_DARK)" : "var(--TEXT_LIGHT)",
    borderColor: isDark ? "var(--TEXT_DARK)" : "var(--TEXT_LIGHT)",
  };

  const source = isDark ? Light : Dark;

  return (
    <div className="NavBar" style={styleTheme}>
      <h1 className="NavBarTitle">TaskList</h1>
      <button
        className="ThemeButton"
        onClick={toggleIsDark}
        style={{ borderColor: isDark ? "white" : "black" }}>
        <img src={source} alt="Theme Toggle" width={40} />
      </button>
    </div>
  );
};

export default NavBar;
