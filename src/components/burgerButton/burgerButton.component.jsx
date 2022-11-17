import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectThemeMenuIsOpen } from '../../store/menues/menuesSlice';

import { toggleThemeMenu } from '../../store/menues/menuesSlice';

import {
	BurgerButtonContainer,
	LineTop,
	LineMiddle,
	LineBottom,
} from './burgerButton.styles';

export const BurgerButton = () => {
	const isOpen = useSelector(selectThemeMenuIsOpen);
	const dispatch = useDispatch();

	return (
		<BurgerButtonContainer
			isOpen={isOpen}
			onClick={() => dispatch(toggleThemeMenu())}
		>
			<LineTop />
			<LineMiddle />
			<LineBottom />
		</BurgerButtonContainer>
	);
};
