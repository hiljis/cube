import styled, { keyframes } from 'styled-components';
import { Theme } from '../../utils/theme';

const rotate = keyframes`
0% {
		-webkit-transform: rotateX(-20deg) rotateY(20deg);
	}
	25% {
		-webkit-transform: rotateX(-110deg) rotateY(110deg);
	}
	50% {
		-webkit-transform: rotateX(-200deg) rotateY(200deg);
	}
	75% {
		-webkit-transform: rotateX(-290deg) rotateY(290deg);
	}
	100% {
		-webkit-transform: rotateX(-380deg) rotateY(380deg);
	}
`;

export const CubeContainer = styled.div`
	${'' /* position: relative; */}
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	grid-column: 4 / 6;
	grid-row: 3 / 4;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 1s;
`;

export const CubeSecondary = styled.div`
	transform-style: preserve-3d;
	animation: ${rotate} 8s infinite linear reverse;
	${'' /* position: absolute; */}
	width: 50px;
	height: 50px;
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 1s;

	/** CubeSideSecondary */
	.cubeSideSecondary {
		background: transparent;
		box-shadow: inset 0px 0px 0px 1px ${(props) => props.colors.secondary};
		opacity: ${(props) => props.opacity / 100};
		border-radius: ${(props) => (props.isRounded ? '1000px' : '0')};

		${(props) =>
			props.isSolid &&
			`
			background: ${props.colors.secondary};
			box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5);
		`}

		${(props) =>
			props.backgroundImage &&
			props.isSolid &&
			`
			background-image: ${props.backgroundImage};
		`}

		${(props) =>
			props.shadeEffect &&
			`
			box-shadow: inset 0px ${-props.shadeEffect}px ${props.shadeEffect}px ${
				props.shadeEffect / 100
			}px ${props.colors.primary};
		`}
	}
`;

export const CubeSideSecondary = styled.div`
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	line-height: ${(props) => props.width + 'px'};
	text-align: center;
	display: block;
	position: absolute;
	transition: all 1s;

	${(props) =>
		props.side === 'top' &&
		`
		height: ${props.width + 'px'};
		-webkit-transform: rotateX(90deg);
		transform: rotateX(90deg);
		margin-top: ${props.margin + 'px'};
	`}
	${(props) =>
		props.side === 'right' &&
		`
		-webkit-transform: rotateY(90deg);
		transform: rotateY(90deg);
		margin-left: ${props.margin + 'px'};
	`}
		${(props) =>
		props.side === 'bottom' &&
		`
		height: ${props.width + 'px'};
		-webkit-transform: rotateX(-90deg);
		transform: rotateX(-90deg);
		margin-top: ${props.margin + 'px'};
	`}
		${(props) =>
		props.side === 'left' &&
		`
		-webkit-transform: rotateY(-90deg);
		transform: rotateY(-90deg);
		margin-left: ${props.margin + 'px'};
	`}
		${(props) =>
		props.side === 'front' &&
		`
		-webkit-transform: translateZ(${props.margin / 2 + 'px'});
		transform: translateZ(${props.margin / 2 + 'px'});
	`}
		${(props) =>
		props.side === 'back' &&
		`
		-webkit-transform: translateZ(${props.margin / 2 + 'px'}) rotateX(180deg);
		transform: translateZ(${props.margin / 2 + 'px'}) rotateX(180deg);
	`};
`;

export const CubeMain = styled.div`
	transform-style: preserve-3d;
	animation: ${rotate} 9s infinite linear;
	${'' /* position: absolute; */}
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 1s;

	/**CubeSideMain */
	.cubeSideMain {
		background: transparent;
		box-shadow: inset 0px 0px 0px 1px ${(props) => props.colors.primary};
		opacity: ${(props) => props.opacity / 100};
		border-radius: ${(props) => (props.isRounded ? '1000px' : '0')};

		${(props) =>
			props.isSolid &&
			`
			background: ${props.colors.primary};
			box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.8);
		`}

		${(props) =>
			props.backgroundImage !== '' &&
			`
			background-image: ${props.backgroundImage};
		`}

		${(props) =>
			props.shadeEffect &&
			`
			box-shadow: inset 0px ${-props.shadeEffect}px ${props.shadeEffect}px ${
				props.shadeEffect / 100
			}px ${props.colors.secondary};
		`}
	}
`;

export const CubeSideMain = styled.div`
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	line-height: ${(props) => props.width + 'px'};
	text-align: center;
	display: block;
	position: absolute;
	border-radius: 0;
	transition: all 1s;

	${(props) =>
		props.side === 'top' &&
		`
		height: ${props.width + 'px'};
		-webkit-transform: rotateX(90deg);
		transform: rotateX(90deg);
		margin-top: ${props.margin + 'px'};
		${'' /* transition: margin-top 1s; */}
	`}
	${(props) =>
		props.side === 'right' &&
		`
		-webkit-transform: rotateY(90deg);
		transform: rotateY(90deg);
		margin-left: ${props.margin + 'px'};
	`}
		${(props) =>
		props.side === 'bottom' &&
		`
		height: ${props.width + 'px'};
		-webkit-transform: rotateX(-90deg);
		transform: rotateX(-90deg);
		margin-top: ${props.margin + 'px'};
	`}
		${(props) =>
		props.side === 'left' &&
		`
		-webkit-transform: rotateY(-90deg);
		transform: rotateY(-90deg);
		margin-left: ${props.margin + 'px'};
	`}
		${(props) =>
		props.side === 'front' &&
		`
		-webkit-transform: translateZ(${props.margin / 2 + 'px'});
		transform: translateZ(${props.margin / 2 + 'px'});
	`}
		${(props) =>
		props.side === 'back' &&
		`
		-webkit-transform: translateZ(${props.margin / 2 + 'px'}) rotateX(180deg);
		transform: translateZ(${props.margin / 2 + 'px'}) rotateX(180deg);
	`};
`;
