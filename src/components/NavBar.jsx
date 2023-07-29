import "./Components.css";

import { theme, themeToggle } from "./Theme";

const NavBar = () => {
  const isDark = theme();
  const toggleIsDark = themeToggle();

  const styleTheme = {
    color: isDark ? "var(--TEXT_DARK)" : "var(--TEXT_LIGHT)",
    borderColor: isDark ? "var(--TEXT_DARK)" : "var(--TEXT_LIGHT)",
  };

  const source = isDark ? "/lightThemeIcon.svg" : "/darkThemeIcon.svg";

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
