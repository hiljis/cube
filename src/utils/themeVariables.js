import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../store/theme/themeSlice';

const initialState = {
	primaryColor: '',
	secondaryColor: '',
	tertiaryColor: '',
	headerColor: '',
	textColor: '',
};

const blueTheme = {
	primaryColor: '',
	secondaryColor: '',
	tertiaryColor: '',
	headerColor: '',
	textColor: '',
};

const redTheme = {
	primaryColor: '',
	secondaryColor: '',
	tertiaryColor: '',
	headerColor: '',
	textColor: '',
};

const lightTheme = {
	primaryColor: '',
	secondaryColor: '',
	tertiaryColor: '',
	headerColor: '',
	textColor: '',
};

const darkTheme = {
	primaryColor: '',
	secondaryColor: '',
	tertiaryColor: '',
	headerColor: '',
	textColor: '',
};

const pinkTheme = {
	primaryColor: '',
	secondaryColor: '',
	tertiaryColor: '',
	headerColor: '',
	textColor: '',
};

const yellowTheme = {
	primaryColor: '',
	secondaryColor: '',
	tertiaryColor: '',
	headerColor: '',
	textColor: '',
};

const generateNewState = (theme) => {
	switch (theme) {
		case 'blue':
			return blueTheme;
		case 'red':
			return redTheme;
		case 'light':
			return redTheme;
		case 'dark':
			return redTheme;
		case 'pink':
			return redTheme;
		case 'yellow':
			return redTheme;
	}
};

export const ThemeVariables = () => {
	const [state, setState] = useState(initialState);
	const theme = useSelector(selectTheme);

	const updateTheme = () => {
		setState(generateNewState(theme));
		console.log(state);
	};

	useEffect(() => {
		updateTheme();
	}, [theme]);
};
