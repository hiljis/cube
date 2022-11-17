import { useDispatch, useSelector } from 'react-redux';
import { selectRenderSecondary, setActive } from '../../store/cube/cubeSlice';
import { CubeSelector } from './cubeSelector/cubeSelector.component';

import './cubeSelectorGroup.styles.css';

export const CubeSelectorGroup = () => {
	const dispatch = useDispatch();
	const renderChild = useSelector(selectRenderSecondary);

	const handleClick = (e) => {
		if (e.target.classList.contains('main')) dispatch(setActive('main'));
		if (e.target.classList.contains('secondary'))
			dispatch(setActive('secondary'));
	};

	return (
		<div className="cubeSelector__group" onClick={handleClick}>
			<CubeSelector type="main" />
			{renderChild ? <CubeSelector type="secondary" /> : ''}
		</div>
	);
};
