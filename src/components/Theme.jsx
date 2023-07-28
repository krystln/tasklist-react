import { useState, createContext, useContext, useEffect } from "react";

const ThemeValue = createContext();
const ThemeValueToggle = createContext();


export const theme = () => {
	return useContext(ThemeValue);
}

export const themeToggle = () => {
	return useContext(ThemeValueToggle);
}


const Theme = ({ children }) => {

	const [isDark, setIsDark] = useState(true);
	const toggleIsDark = () => {
		setIsDark(prevValue => !prevValue);
	}

	useEffect(() => {
		//console.log("Theme changed");
		document.querySelector("html").style.backgroundColor = isDark ? 'var(--BG_DARK)' : 'var(--BG_LIGHT)';
	}, [isDark]);

  return (
    <ThemeValue.Provider value={isDark}>
      <ThemeValueToggle.Provider value={toggleIsDark}>
				{ children }
			</ThemeValueToggle.Provider>
    </ThemeValue.Provider>
  );
};

export default Theme;
