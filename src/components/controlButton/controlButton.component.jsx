import { useDispatch } from 'react-redux';
import {
	incrementWidth,
	decrementWidth,
	incrementHeight,
	decrementHeight,
} from '../../store/cube/cubeSlice';

import {
	LeftButton,
	RightButton,
	UpButton,
	DownButton,
} from './controlButton.styles';

const getDirectionIcon = (control) => {
	switch (control) {
		case 'left':
			return <span>&larr;</span>;
		case 'right':
			return <span>&rarr;</span>;
		case 'up':
			return <span>&uarr;</span>;
		case 'down':
			return <span>&darr;</span>;
		default:
			return '';
	}
};

export const ControlButton = ({ control }) => {
	const dispatch = useDispatch();
	const icon = getDirectionIcon(control);

	if (control === 'left')
		return (
			<LeftButton onClick={() => dispatch(decrementWidth())}>
				{icon}
			</LeftButton>
		);
	if (control === 'right')
		return (
			<RightButton onClick={() => dispatch(incrementWidth())}>
				{icon}
			</RightButton>
		);
	if (control === 'up')
		return (
			<UpButton onClick={() => dispatch(incrementHeight())}>
				{icon}
			</UpButton>
		);
	if (control === 'down')
		return (
			<DownButton onClick={() => dispatch(decrementHeight())}>
				{icon}
			</DownButton>
		);
};
