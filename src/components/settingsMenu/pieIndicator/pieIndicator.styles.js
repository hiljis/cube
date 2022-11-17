import styled, { keyframes, css } from 'styled-components';

export const spin = keyframes`
	to {
		transform: rotate(0.5turn);
	}
`;

export const bg = keyframes`
	50% {
		background: blue;
	}
`;

export const bgNegative = keyframes`
	50% {
		background: white;
	}
`;

export const PieContainer = styled.div`
	position: relative;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
	border: 1px solid blue;
`;

export const Pie = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: white;
	cursor: ${(props) => props.cursor};

	background-image: linear-gradient(to right, transparent 50%, blue 0);

	${(props) =>
		props.value < 0 &&
		`
		background: blue;
		background-image: linear-gradient(to right, blue 50%, transparent 0);
	`}

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;

		width: 70%;
		height: 70%;
		border-radius: 50%;
		background-color: inherit;
	}

	&::after {
		content: '';
		display: block;
		margin-left: 50%;
		height: 100%;
		background-color: inherit;
		transform-origin: left;

		animation: ${spin} 50s linear infinite, ${bg} 100s step-end infinite;
		animation-play-state: paused;
		animation-delay: -${(props) => props.value}s;

		${(props) =>
			props.value < 0 &&
			css`
				animation: ${spin} 50s linear infinite,
					${bgNegative} 100s step-end infinite;
				animation-delay: ${(props) => props.value}s;
			`}
	}

	& > span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		color: black;
		font-size: 12px;
		font-weight: 400;
	}
`;

export const DraggableInvisibleOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
	opacity: 0.5;
	z-index: 3;
	cursor: ${(props) => props.cursor};
`;
