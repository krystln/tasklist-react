import { useState, createContext, useContext } from "react";

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

  return (
    <ThemeValue.Provider value={isDark}>
      <ThemeValueToggle.Provider value={toggleIsDark}>
				{ children }
			</ThemeValueToggle.Provider>
    </ThemeValue.Provider>
  );
};

export default Theme;
