import { ToggleButton } from '../../../styles/toggleButton.styles';

import styled, { keyframes } from 'styled-components';
import { StyledSettingsIconFilled } from '../../../styles/icons.components';

const spinning = keyframes`
100% {
	transform: rotate(180deg);
}
`;

export const ToggleSettingsBtn = styled(ToggleButton)`
	grid-row: 5 / 5;
	grid-column: 1 / 1;
	align-self: start;
	aria-label: 'Settings button';

	transition: all 0.2s;

	&:hover ${StyledSettingsIconFilled} {
		animation: ${spinning} 1s ease-out 1;
	}
`;
