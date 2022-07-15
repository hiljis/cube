import { useDispatch } from 'react-redux';
import { setTheme } from '../../store/theme/themeSlice';
import './themeChecker.styles.css';

export const ThemeChecker = ({ theme }) => {
	const dispatch = useDispatch();

	return (
		<div
			className={'themeChecker ' + theme}
			onClick={() => dispatch(setTheme(theme))}
		>
			{theme}
		</div>
	);
};
