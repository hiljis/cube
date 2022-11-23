import { useSelector } from 'react-redux';
import {
	selectWidthMain,
	selectHeightMain,
	selectOpacityMain,
	selectIsSolidMain,
	selectRenderSecondary,
	selectIsEdgeLockedMain,
	selectSpacingMain,
	selectIsRoundedMain,
	selectWidthSecondary,
	selectHeightSecondary,
	selectSpacingSecondary,
	selectOpacitySecondary,
	selectIsSolidSecondary,
	selectIsEdgeLockedSecondary,
	selectIsRoundedSecondary,
	selectShadeEffectMain,
	selectShadeEffectSecondary,
} from '../../store/cube/cubeSlice';
import { selectTheme } from '../../store/theme/themeSlice';
import { getThemeProps } from '../../utils/theme';

import {
	CubeContainer,
	CubeMain,
	CubeSideMain,
	CubeSecondary,
	CubeSideSecondary,
} from './cubes.styles.js';

export const Cubes = () => {
	const widthMain = useSelector(selectWidthMain);
	const heightMain = useSelector(selectHeightMain);
	const spacingMain = useSelector(selectSpacingMain);
	const opacityMain = useSelector(selectOpacityMain);
	const isSolidMain = useSelector(selectIsSolidMain);
	const edgeLockMain = useSelector(selectIsEdgeLockedMain);
	const isRoundedMain = useSelector(selectIsRoundedMain);
	const shadeEffectMain = useSelector(selectShadeEffectMain) / 100;

	const widthSecondary = useSelector(selectWidthSecondary);
	const heightSecondary = useSelector(selectHeightSecondary);
	const spacingSecondary = useSelector(selectSpacingSecondary);
	const opacitySecondary = useSelector(selectOpacitySecondary);
	const isSolidSecondary = useSelector(selectIsSolidSecondary);
	const edgeLockSecondary = useSelector(selectIsEdgeLockedSecondary);
	const isRoundedSecondary = useSelector(selectIsRoundedSecondary);
	const shadeEffectSecondary = useSelector(selectShadeEffectSecondary) / 100;

	const renderChild = useSelector(selectRenderSecondary);

	const theme = useSelector(selectTheme);
	const themeProps = getThemeProps(theme);
	const backgroundImage = themeProps.colors.backgroundImage;

	return (
		<CubeContainer>
			<CubeMain
				width={widthMain}
				height={heightMain}
				colors={themeProps.colors}
				backgroundImage={backgroundImage}
				isSolid={isSolidMain}
				opacity={opacityMain}
				isRounded={isRoundedMain}
				shadeEffect={shadeEffectMain * heightMain}
			>
				<CubeSideMain
					className="cubeSideMain"
					side="top"
					width={widthMain}
					height={heightMain}
					margin={edgeLockMain ? -heightMain : -spacingMain}
					backgroundImage={backgroundImage}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="bottom"
					width={widthMain}
					height={heightMain}
					margin={edgeLockMain ? heightMain : spacingMain}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="right"
					width={widthMain}
					height={heightMain}
					margin={edgeLockMain ? widthMain : spacingMain}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="left"
					width={widthMain}
					height={heightMain}
					margin={edgeLockMain ? -widthMain : -spacingMain}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="front"
					width={widthMain}
					height={heightMain}
					margin={edgeLockMain ? widthMain : spacingMain}
				/>
				<CubeSideMain
					className="cubeSideMain"
					side="back"
					width={widthMain}
					height={heightMain}
					margin={edgeLockMain ? -widthMain : -spacingMain}
				/>
				{renderChild ? (
					<CubeSecondary
						width={widthSecondary}
						height={heightSecondary}
						colors={themeProps.colors}
						backgroundImage={backgroundImage}
						isSolid={isSolidSecondary}
						opacity={opacitySecondary}
						isRounded={isRoundedSecondary}
						shadeEffect={shadeEffectSecondary * heightSecondary}
					>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="top"
							width={widthSecondary}
							height={heightSecondary}
							margin={
								edgeLockSecondary
									? -heightSecondary
									: -spacingSecondary
							}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="bottom"
							width={widthSecondary}
							height={heightSecondary}
							margin={
								edgeLockSecondary
									? heightSecondary
									: spacingSecondary
							}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="right"
							width={widthSecondary}
							height={heightSecondary}
							margin={
								edgeLockSecondary
									? widthSecondary
									: spacingSecondary
							}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="left"
							width={widthSecondary}
							height={heightSecondary}
							margin={
								edgeLockSecondary
									? -widthSecondary
									: -spacingSecondary
							}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="front"
							width={widthSecondary}
							height={heightSecondary}
							margin={
								edgeLockSecondary
									? widthSecondary
									: spacingSecondary
							}
						/>
						<CubeSideSecondary
							className="cubeSideSecondary"
							side="back"
							width={widthSecondary}
							height={heightSecondary}
							margin={
								edgeLockSecondary
									? -widthSecondary
									: -spacingSecondary
							}
						/>
					</CubeSecondary>
				) : (
					''
				)}
			</CubeMain>
		</CubeContainer>
	);
};
