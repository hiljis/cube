import styled from 'styled-components';

export const GridLayout = styled.div`
	display: grid;
	width: 100%;
	height: 100vh;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 75px repeat(3, 1fr) 75px;
	justify-items: center;
	align-items: center;
	background: white;
`;

export const GridBackground = styled.div`
	grid-column: 1 / -1;
	grid-row: 1 / -1;
	width: 100%;
	height: 100%;
	background: radial-gradient(
		circle,
		${(props) => props.color} 0%,
		white ${(props) => props.glowAmount}%,
		white 100%
	);
`;
