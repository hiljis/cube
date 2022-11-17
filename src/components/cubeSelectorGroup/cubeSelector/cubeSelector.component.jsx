import { useSelector } from 'react-redux';
import { selectActiveCube } from '../../../store/cube/cubeSlice';

import './cubeSelector.styles.css';
import activeImg from '../../../assets/icons/pngs/cube-black.png';
import inactiveImg from '../../../assets/icons/pngs/cube-white.png';

export const CubeSelector = ({ type }) => {
	const active = useSelector(selectActiveCube);
	const imgSrc = active === type ? activeImg : inactiveImg;
	const activeClass = active === type && 'active';

	return (
		<div className={activeClass + ' cubeSelector ' + type}>
			<img src={imgSrc} alt="Cube Icon" />
		</div>
	);
};
