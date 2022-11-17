import { useDispatch, useSelector } from 'react-redux';
import {
	selectSettingsMenuIsOpen,
	toggleSettingsMenu,
} from '../../../store/menues/menuesSlice';
import { StyledSettingsIconFilled } from '../../../styles/icons.components';
import { ToggleSettingsBtn } from './toggleSettingsButton.styles';

export const ToggleSettingsButton = () => {
	const isOpen = useSelector(selectSettingsMenuIsOpen);
	const dispatch = useDispatch();
	return (
		<ToggleSettingsBtn
			onClick={() => dispatch(toggleSettingsMenu())}
			isOpen={isOpen}
		>
			<StyledSettingsIconFilled
				height="23px"
				color="white"
				hovercolor="white"
			/>
		</ToggleSettingsBtn>
	);
};
