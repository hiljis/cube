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
`;

export const Pagination = styled.div`
	position: absolute;
	top: 0;
	right: 80px;

	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 7px;
`;

export const PaginationText = styled.p`
	font-size: 8px;
	color: black;
`;

export const PaginationButton = styled.button`
	border: 1px solid transparent;
	width: 25px;
	height: 25px;
	border-radius: 50px;
	color: black;
	cursor: pointer;
	background-color: white;

	opacity: ${(props) => (props.hide ? 0 : 1)};
	pointer-events: ${(props) => (props.hide ? 'none' : 'default')};

	&:hover {
		border-color: black;
	}
`;
