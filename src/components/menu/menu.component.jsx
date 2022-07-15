import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsSolid,
	selectOpacity,
	setOpacity,
	toggleSolid,
} from '../../store/cube/cubeSlice';
import { selectMenuIsOpen } from '../../store/menu/menuSlice';

import { ThemeList } from '../list/themeList.component';
import { Slider } from '../slider/slider.component';
import { Switch } from '../switch/switch.component';
import {
	MenuContainer,
	MenuSectionTitle,
	MenuContent,
	SettingWrapper,
	SectionBreak,
	SettingsLabel,
} from './menu.styles';

export const Menu = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(selectMenuIsOpen);
	const activeCubeIsSolid = useSelector(selectIsSolid);
	const activeCubeOpacity = useSelector(selectOpacity);

	const toggleCubeIsSolid = () => {
		dispatch(toggleSolid());
	};

	const handleOpacityChange = (e) => {
		const value = e.target.value;
		dispatch(setOpacity(value));
	};

	return (
		<MenuContainer isOpen={isOpen}>
			<MenuContent isOpen={isOpen}>
				<MenuSectionTitle>Themes</MenuSectionTitle>
				<ThemeList />
				{/* <div class="slidecontainer">
					<input
						type="range"
						min="1"
						max="100"
						value="50"
						class="slider"
						id="myRange"
					/>
				</div> */}
				<SectionBreak />
				<MenuSectionTitle>Settings</MenuSectionTitle>
				<SettingWrapper>
					<SettingsLabel>Solid: </SettingsLabel>
					<Switch
						labelText="Solid"
						checked={activeCubeIsSolid}
						handler={toggleCubeIsSolid}
					/>
				</SettingWrapper>
				<SettingWrapper>
					<SettingsLabel>Opacity: </SettingsLabel>
					<Slider
						value={activeCubeOpacity}
						handler={handleOpacityChange}
					/>
				</SettingWrapper>
			</MenuContent>
		</MenuContainer>
	);
};
