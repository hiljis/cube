import styled, { keyframes } from 'styled-components';

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
	position: relative;
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	grid-column: 4 / 6;
	grid-row: 3 / 4;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 1s;
`;

export const CubeSmall = styled.div`
	transform-style: preserve-3d;
	animation: ${rotate} 9s infinite linear reverse;
	position: absolute;
	width: 50px;
	height: 50px;
	margin: 25px;
`;

const CubeSideSmall = styled.div`
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.8);
	background: rgba(50, 50, 255, 0.9);
	display: block;
	position: absolute;
`;

export const CubeSideSmallTop = styled(CubeSideSmall)`
	-webkit-transform: rotateX(90deg);
	transform: rotateX(90deg);
	margin-top: -25px;
`;

export const CubeSideSmallRight = styled(CubeSideSmall)`
	-webkit-transform: rotateY(90deg);
	transform: rotateY(90deg);
	margin-left: 25px;
`;

export const CubeSideSmallBottom = styled(CubeSideSmall)`
	-webkit-transform: rotateX(-90deg);
	transform: rotateX(-90deg);
	margin-top: 25px;
`;

export const CubeSideSmallLeft = styled(CubeSideSmall)`
	-webkit-transform: rotateY(-90deg);
	transform: rotateY(-90deg);
	margin-left: -25px;
`;

export const CubeSideSmallFront = styled(CubeSideSmall)`
	-webkit-transform: translateZ(25px);
	transform: translateZ(25px);
`;

export const CubeSideSmallBack = styled(CubeSideSmall)`
	-webkit-transform: translateZ(-25px) rotateX(180deg);
	transform: translateZ(-25px) rotateX(180deg);
`;

export const CubeBig = styled.div`
	transform-style: preserve-3d;
	animation: ${rotate} 9s infinite linear;
	position: absolute;
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	transition: all 1s;
`;

const CubeSideBig = styled.div`
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	line-height: ${(props) => props.width + 'px'};
	text-align: center;
	box-shadow: inset 0px 0px 0px 1px rgba(50, 50, 255, 1);
	display: block;
	position: absolute;
	transition: all 1s;

	${(props) =>
		props.isSolid &&
		`
	background: rgba(50, 50, 255, ${props.opacity / 100});
	box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.8);
	`}
`;

export const CubeSideBigTop = styled(CubeSideBig)`
	-webkit-transform: rotateX(90deg);
	transform: rotateX(90deg);
	margin-top: ${(props) => -props.width / 2 + 'px'};
	transition: margin-top 1s;
`;

export const CubeSideBigBottom = styled(CubeSideBig)`
	-webkit-transform: rotateX(-90deg);
	transform: rotateX(-90deg);
	margin-top: ${(props) => props.width / 2 + 'px'};
`;

export const CubeSideBigRight = styled(CubeSideBig)`
	-webkit-transform: rotateY(90deg);
	transform: rotateY(90deg);
	margin-left: ${(props) => props.width / 2 + 'px'};
`;

export const CubeSideBigLeft = styled(CubeSideBig)`
	-webkit-transform: rotateY(-90deg);
	transform: rotateY(-90deg);
	margin-left: ${(props) => -props.width / 2 + 'px'};
`;

export const CubeSideBigFront = styled(CubeSideBig)`
	-webkit-transform: translateZ(50px);
	transform: translateZ(${(props) => props.width / 2 + 'px'});
`;

export const CubeSideBigBack = styled(CubeSideBig)`
	-webkit-transform: translateZ(-50px) rotateX(180deg);
	transform: translateZ(${(props) => -props.width / 2 + 'px'}) rotateX(180deg);
`;
