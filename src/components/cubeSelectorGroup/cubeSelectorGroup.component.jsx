import { useDispatch } from 'react-redux';
import { setActive } from '../../store/cube/cubeSlice';
import { CubeSelector } from './cubeSelector/cubeSelector.component';

import './cubeSelectorGroup.styles.css';

export const CubeSelectorGroup = () => {
	const dispatch = useDispatch();

	const handleClick = (e) => {
		if (e.target.classList.contains('parent'))
			dispatch(setActive('parent'));
		if (e.target.classList.contains('child')) dispatch(setActive('child'));
	};

	return (
		<div className="cubeSelector__group" onClick={handleClick}>
			<CubeSelector type="parent" />
			<CubeSelector type="child" />
		</div>
	);
};
