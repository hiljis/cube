import { useSelector } from 'react-redux';
import { selectRenderSecondary, selectMainCube, selectSecondaryCube } from '../../store/cube/cubeSlice';

import { CubeContainer, CubeMain, CubeSideMain, CubeSecondary, CubeSideSecondary } from './cubes.styles.js';

export const Cubes = () => {
	const mainCube = useSelector(selectMainCube);
	const secondaryCube = useSelector(selectSecondaryCube);

	const renderChild = useSelector(selectRenderSecondary);

	const mainBaseColor = `rgba(${mainCube.baseColor},${mainCube.baseColorOpacity / 100})`;
	const secondaryBaseColor = `rgba(${secondaryCube.baseColor},${secondaryCube.baseColorOpacity / 100})`;
	const mainEdgeColor = `rgba(${mainCube.edgeColor},${mainCube.edgeColorOpacity / 100})`;
	const secondaryEdgeColor = `rgba(${secondaryCube.edgeColor},${secondaryCube.edgeColorOpacity / 100})`;
	const mainShadeColor = `rgba(${mainCube.shadeColor},${mainCube.shadeColorOpacity / 100})`;
	const secondaryShadeColor = `rgba(${secondaryCube.shadeColor},${secondaryCube.shadeColorOpacity / 100})`;

	return (
		<CubeContainer>
			<CubeMain
				width={mainCube.width}
				height={mainCube.height}
				baseColor={mainBaseColor}
				edgeColor={mainEdgeColor}
				shadeColor={mainShadeColor}
				isSolid={mainCube.isSolid}
				opacity={mainCube.opacity}
				isRounded={mainCube.isRounded}
				shadeEffect={mainCube.shadeEffect * mainCube.height}
			>
				<CubeSideMain
					className="cubeSideMain"
					side="top"
					width={mainCube.width}
					height={mainCube.height}
					margin={mainCube.isEdgeLocked ? -mainCube.height : -mainCube.spacing}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="bottom"
					width={mainCube.width}
					height={mainCube.height}
					margin={mainCube.isEdgeLocked ? mainCube.height : mainCube.spacing}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="right"
					width={mainCube.width}
					height={mainCube.height}
					margin={mainCube.isEdgeLocked ? mainCube.width : mainCube.spacing}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="left"
					width={mainCube.width}
					height={mainCube.height}
					margin={mainCube.isEdgeLocked ? -mainCube.width : -mainCube.spacing}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="front"
					width={mainCube.width}
					height={mainCube.height}
					margin={mainCube.isEdgeLocked ? mainCube.width : mainCube.spacing}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="back"
					width={mainCube.width}
					height={mainCube.height}
					margin={mainCube.isEdgeLocked ? -mainCube.width : -mainCube.spacing}
				/>
				{renderChild ? (
					<CubeSecondary
						width={secondaryCube.width}
						height={secondaryCube.height}
						baseColor={secondaryBaseColor}
						edgeColor={secondaryEdgeColor}
						shadeColor={secondaryShadeColor}
						isSolid={secondaryCube.isSolid}
						opacity={secondaryCube.opacity}
						isRounded={secondaryCube.isRounded}
						shadeEffect={secondaryCube.shadeEffect * secondaryCube.height}
					>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="top"
							width={secondaryCube.width}
							height={secondaryCube.height}
							margin={secondaryCube.isEdgeLocked ? -secondaryCube.height : -secondaryCube.spacing}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="bottom"
							width={secondaryCube.width}
							height={secondaryCube.height}
							margin={secondaryCube.isEdgeLocked ? secondaryCube.height : secondaryCube.spacing}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="right"
							width={secondaryCube.width}
							height={secondaryCube.height}
							margin={secondaryCube.isEdgeLocked ? secondaryCube.width : secondaryCube.spacing}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="left"
							width={secondaryCube.width}
							height={secondaryCube.height}
							margin={secondaryCube.isEdgeLocked ? -secondaryCube.width : -secondaryCube.spacing}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="front"
							width={secondaryCube.width}
							height={secondaryCube.height}
							margin={secondaryCube.isEdgeLocked ? secondaryCube.width : secondaryCube.spacing}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="back"
							width={secondaryCube.width}
							height={secondaryCube.height}
							margin={secondaryCube.isEdgeLocked ? -secondaryCube.width : -secondaryCube.spacing}
						/>
					</CubeSecondary>
				) : (
					''
				)}
			</CubeMain>
		</CubeContainer>
	);
};
