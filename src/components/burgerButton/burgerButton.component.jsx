import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectMenuIsOpen } from '../../store/menu/menuSlice';

import { toggleMenu } from '../../store/menu/menuSlice';

import {
	BurgerButtonContainer,
	LineTop,
	LineMiddle,
	LineBottom,
} from './burgerButton.styles';

export const BurgerButton = () => {
	const isOpen = useSelector(selectMenuIsOpen);
	const dispatch = useDispatch();

	return (
		<BurgerButtonContainer
			isOpen={isOpen}
			onClick={() => dispatch(toggleMenu())}
		>
			<LineTop />
			<LineMiddle />
			<LineBottom />
		</BurgerButtonContainer>
	);
};
