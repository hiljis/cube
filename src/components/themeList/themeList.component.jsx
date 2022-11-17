import { List } from './themeList.styles.js';
import { ThemeTag } from '../themeTag/themeTag.component.jsx';
import { getThemeNames } from '../../utils/theme.js';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/theme/themeSlice.js';

export const ThemeList = () => {
	const themeNames = getThemeNames();
	const currentTheme = useSelector(selectTheme);

	return (
		<List>
			{themeNames.map((themeName) => (
				<ThemeTag
					themeName={themeName}
					isCurrent={currentTheme === themeName}
					key={`themeChecker-` + themeName}
				/>
			))}
			{/* <ThemeChecker theme="blue" />
			<ThemeChecker theme="red" />
			<ThemeChecker theme="dark" />
			<ThemeChecker theme="light" />
			<ThemeChecker theme="green" />
			<ThemeChecker theme="pink" />
			<ThemeChecker theme="yellow" /> */}
		</List>
	);
};
