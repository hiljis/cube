import styled from 'styled-components';

export const RangeGroupContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
`;

export const RangeLabel = styled.label`
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
