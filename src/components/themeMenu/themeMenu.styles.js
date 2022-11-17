import styled from 'styled-components';

export const ThemeMenuContent = styled.div`
	width: 400px;
	padding: 100px 50px;
`;

export const ThemeMenuSectionTitle = styled.h2`
	color: white;
	font-weight: 500;
	font-size: 24px;
	margin-bottom: 20px;
	font-family: 'Raleway';
`;

export const ThemeMenuContainer = styled.div`
	width: 0;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	background-color: blue;
	overflow: hidden;
	z-index: 10;

	transition: all 0.4s ease-out;

	${({ isOpen }) =>
		isOpen &&
		`
	width: 400px;
	`}
`;

export const SectionBreak = styled.div`
	width: 100%;
	height: 1px;
	background-color: white;
	margin: 50px 10px;
`;

export const SettingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const SettingsLabel = styled.span`
	color: white;
	font-weight: 400;
	font-size: 12px;
	margin-left: 15px;
`;
