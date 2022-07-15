import styled from 'styled-components';

export const MenuContent = styled.div`
	width: 100%;
	overflow: hidden;
	padding: 100px 50px;
`;

export const MenuSectionTitle = styled.h2`
	color: white;
	font-weight: 300;
	font-size: 20px;
	margin-bottom: 20px;
`;

export const MenuContainer = styled.div`
	width: 0;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	background-color: blue;
	z-index: 10;

	transition: all 0.2s ease-out;

	${({ isOpen }) =>
		isOpen &&
		`
	width: 30%;
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
	font-weight: 300;
	margin-left: 15px;
`;
