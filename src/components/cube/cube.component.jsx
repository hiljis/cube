import { useSelector } from 'react-redux';
import {
	selectWidth,
	selectHeight,
	selectMargin,
	selectOpacity,
	selectIsSolid,
} from '../../store/cube/cubeSlice';

import {
	CubeBig,
	CubeContainer,
	CubeSideBigBack,
	CubeSideBigFront,
	CubeSideBigBottom,
	CubeSideBigLeft,
	CubeSideBigRight,
	CubeSideBigTop,
	CubeSideSmallBack,
	CubeSideSmallBottom,
	CubeSideSmallFront,
	CubeSideSmallLeft,
	CubeSideSmallRight,
	CubeSideSmallTop,
	CubeSmall,
} from './cube.styles.js';

export const Cube = () => {
	const width = useSelector(selectWidth);
	const height = useSelector(selectHeight);
	const margin = 50;
	const opacity = useSelector(selectOpacity);
	const isSolid = useSelector(selectIsSolid);

	return (
		<CubeContainer width={width} height={height}>
			<CubeBig width={width} height={height}>
				<CubeSideBigTop
					width={width}
					height={height}
					isSolid={isSolid}
					opacity={opacity}
				/>
				<CubeSideBigBottom
					width={width}
					height={height}
					isSolid={isSolid}
					opacity={opacity}
				/>
				<CubeSideBigRight
					width={width}
					height={height}
					isSolid={isSolid}
					opacity={opacity}
				/>
				<CubeSideBigLeft
					width={width}
					height={height}
					isSolid={isSolid}
					opacity={opacity}
				/>
				<CubeSideBigFront
					width={width}
					height={height}
					isSolid={isSolid}
					opacity={opacity}
				/>
				<CubeSideBigBack
					width={width}
					height={height}
					isSolid={isSolid}
					opacity={opacity}
				/>
				{
					<CubeSmall>
						<CubeSideSmallTop></CubeSideSmallTop>
						<CubeSideSmallBottom></CubeSideSmallBottom>
						<CubeSideSmallRight></CubeSideSmallRight>
						<CubeSideSmallLeft></CubeSideSmallLeft>
						<CubeSideSmallFront></CubeSideSmallFront>
						<CubeSideSmallBack></CubeSideSmallBack>
					</CubeSmall>
				}
			</CubeBig>
		</CubeContainer>
	);
};
