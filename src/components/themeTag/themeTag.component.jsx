import { useDispatch } from 'react-redux';
import { setTheme } from '../../store/theme/themeSlice';
import { getDefaultPrimary, getPrimary } from '../../utils/theme';
import './themeTag.styles.css';

export const ThemeTag = ({ themeName, isCurrent }) => {
	const dispatch = useDispatch();
	let primaryColor = getDefaultPrimary();

	if (isCurrent) {
		primaryColor = getPrimary(themeName);
	}

	return (
		<div
			className={'themeTag '}
			style={{ backgroundColor: primaryColor }}
			onClick={() => dispatch(setTheme(themeName))}
		>
			{themeName}
		</div>
	);
};
