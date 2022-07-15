import { List } from './themeList.styles.js';
import { ThemeChecker } from '../themeChecker/themeChecker.component.jsx';

export const ThemeList = () => {
	return (
		<List>
			<ThemeChecker theme="blue" />
			<ThemeChecker theme="red" />
			<ThemeChecker theme="dark" />
			<ThemeChecker theme="light" />
			<ThemeChecker theme="green" />
			<ThemeChecker theme="pink" />
			<ThemeChecker theme="yellow" />
		</List>
	);
};
