import { useSelector } from 'react-redux';
import { selectGlowAmount, selectGlowColor, selectGlowColorOpacity } from '../../store/cube/cubeSlice';
import { GridLayout, GridBackground } from './grid.styles';

export const Grid = ({ children }) => {
	const glowAmount = useSelector(selectGlowAmount);
	const glowColorOpacity = useSelector(selectGlowColorOpacity);
	const glowColor = useSelector(selectGlowColor);

	Window.scroll = (e) => console.log(e);
	const colorStr = `rgba(${glowColor},${glowColorOpacity / 100})`;

	return (
		<GridLayout>
			<GridBackground color={colorStr} glowAmount={glowAmount} />
			{children}
		</GridLayout>
	);
};
