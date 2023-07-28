import "./Components.css";

import { theme, themeToggle } from "./Theme";

const NavBar = () => {

  const isDark = theme();
  const toggleIsDark = themeToggle();

  const styleTheme = {
    backgroundColor: isDark ? "var(--BG_DARK)" : "var(--BG_LIGHT)",
    color: isDark ? "var(--TEXT_DARK)" : "var(--TEXT_LIGHT)",
  };

  const source = isDark ? "/lightThemeIcon.svg" : "/darkThemeIcon.svg";

  return (
    <div className="NavBar"  style={styleTheme} >
      <h1 className="NavBar_Title">TaskList</h1>
      <p className="NavBar_SideTitle">
        <button className="ThemeButton" onClick={toggleIsDark} style={{borderColor: isDark ? "white" : "black"}} >
          <img src={source} alt="Theme Toggle" width={40}/>
        </button>
      </p>
    </div>
  );
};

export default NavBar;
