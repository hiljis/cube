import styled from 'styled-components';

export const SelectionGroupContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	height: 100px;
`;

export const Selection = styled.button`
	position: relative;
	width: 50px;
	height: 50px;
	display: flex;
	cursor: pointer;
	border: none;
	border-radius: 1000px;
	background-color: white;
	color: black;

	transition: box-shadow 0.2s, background-color 1s;

	&:hover {
		box-shadow: inset 0 0 0 1px black;
	}

	&:active {
		background-color: blue;
	}
`;

export const SelectionLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	text-align: center;
	width: 100%;
	font-size: 8px;
	font-weight: 400;
	letter-spacing: 2px;
	color: #777;
	margin-top: 5px;
	text-transform: uppercase;
`;
