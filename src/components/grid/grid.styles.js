import styled from 'styled-components';

export const Grid3by3 = styled.div`
	display: grid;
	width: 100%;
	height: 100vh;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 100px repeat(3, 1fr) 50px;
	justify-items: center;
	align-items: center;
`;
