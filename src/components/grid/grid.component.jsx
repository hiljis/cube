import { useSelector } from 'react-redux';
import { selectGlow } from '../../store/cube/cubeSlice';
import { selectTheme } from '../../store/theme/themeSlice';
import { getThemeProps } from '../../utils/theme';
import { GridLayout, GridBackground } from './grid.styles';

export const Grid = ({ children }) => {
	const theme = useSelector(selectTheme);
	const themeProps = getThemeProps(theme);
	const glow = useSelector(selectGlow);

	Window.scroll = (e) => console.log(e);

	return (
		<GridLayout>
			<GridBackground theme={themeProps} glow={glow} />
			{children}
		</GridLayout>
	);
};
