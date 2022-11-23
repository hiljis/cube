import styled from 'styled-components';

export const SettingsMenuContainer = styled.div`
	width: 100%;
	height: 0;
	grid-column: 1 / -1;
	position: absolute;
	bottom: 0;
	right: 0;

	background-color: white;
	border-top: 1px solid black;
	overflow: hidden;
	z-index: 11;

	display: flex;
	flex-direction: column;

	transition: all 0.4s ease-out;

	${({ isOpen }) =>
		isOpen &&
		`
			height: 100px;
		`}
`;

export const SettingsPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 50px;
	width: 100%;
	height: 100px;
	top: 0;
	overflow: hidden;
`;

export const PageButton = styled.button`
	position: absolute;
	top: 50px;
	right: 5rem;
	transform: translateY(-50%);
	border: none;
	background-color: white;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
	}

	path {
		stroke: black;
	}
`;
