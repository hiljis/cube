import { useDispatch, useSelector } from 'react-redux';
import { selectThemeMenuIsOpen } from '../../store/menues/menuesSlice';

import { ThemeList } from '../themeList/themeList.component';
import {
	ThemeMenuContainer,
	ThemeMenuSectionTitle,
	ThemeMenuContent,
	SettingWrapper,
	SectionBreak,
	SettingsLabel,
} from './themeMenu.styles';

export const ThemeMenu = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(selectThemeMenuIsOpen);

	return (
		<ThemeMenuContainer isOpen={isOpen}>
			<ThemeMenuContent>
				<ThemeMenuSectionTitle>Themes</ThemeMenuSectionTitle>
				<ThemeList />
				<SectionBreak />

				<ThemeMenuSectionTitle>Settings</ThemeMenuSectionTitle>

				<SettingWrapper>
					<SettingsLabel>Spacing: </SettingsLabel>
					{/* <Slider
						min={-500}
						max={500}
						value={activeCubeSpacing}
						handler={handleSpacingChange}
					/> */}
				</SettingWrapper>

				<SettingWrapper>
					<SettingsLabel>Opacity: </SettingsLabel>
					{/* <Slider
						min={0}
						max={100}
						value={activeCubeOpacity}
						handler={handleOpacityChange}
					/> */}
				</SettingWrapper>

				<SettingWrapper>
					<SettingsLabel>Shade Effect: </SettingsLabel>
					{/* <Slider
						min={0}
						max={50}
						value={activeCubeShadeEffect}
						handler={handleShadeEffectChange}
					/> */}
				</SettingWrapper>

				<SettingWrapper>
					<SettingsLabel>Glow: </SettingsLabel>
					{/* <Slider
						min={0}
						max={60}
						value={glow}
						handler={handleGlowChange}
					/> */}
				</SettingWrapper>
			</ThemeMenuContent>
		</ThemeMenuContainer>
	);
};
