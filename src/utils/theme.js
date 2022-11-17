import * as themes from './themeSchema.json';

const DEFAULT_THEME = 'blue';

export const getThemeProps = (theme) => {
	const themesData = { ...themes }.data;

	return themesData[theme];
};

export const getThemeNames = () => {
	const themesData = { ...themes }.data;
	const themeNames = Object.values(themesData).map((theme) => theme.name);
	return themeNames;
};

export const getPrimary = (themeName) => {
	const themesData = { ...themes }.data;
	const primary = themesData[themeName].colors.primary;
	return primary;
};

export const getDefaultPrimary = () => {
	const themesData = { ...themes }.data;
	const defaultPrimary = themesData[DEFAULT_THEME].colors.primary;
	return defaultPrimary;
}
