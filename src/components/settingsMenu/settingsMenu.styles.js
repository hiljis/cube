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
	justify-content: center;
	align-items: center;
	gap: 100px;

	transition: all 0.4s ease-out;

	${({ isOpen }) =>
		isOpen &&
		`
			height: 100px;
		`}
`;

export const SelectionGroups = styled.div`
	height: 100%;

	display: flex;
	gap: 50px;

	bottom: 0;
`;

export const RangeGroups = styled(SelectionGroups)`
	gap: 30px;
`;
