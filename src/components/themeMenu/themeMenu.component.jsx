import { useDispatch, useSelector } from 'react-redux';
import {
	selectGlow,
	setGlow,
	setOpacity,
	setSpacing,
	selectOpacityActive,
	selectSpacingActive,
	selectShadeEffectActive,
	setShadeEffect,
} from '../../store/cube/cubeSlice';
import { selectThemeMenuIsOpen } from '../../store/menues/menuesSlice';

import { ThemeList } from '../themeList/themeList.component';
import { Slider } from '../slider/slider.component';
import { Switch } from '../switch/switch.component';
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
	const activeCubeOpacity = useSelector(selectOpacityActive);
	const activeCubeSpacing = useSelector(selectSpacingActive);
	const activeCubeShadeEffect = useSelector(selectShadeEffectActive);
	const glow = useSelector(selectGlow);

	const handleOpacityChange = (e) => {
		const value = e.target.value;
		dispatch(setOpacity(value));
	};

	const handleGlowChange = (e) => {
		const value = e.target.value;
		dispatch(setGlow(value));
	};

	const handleSpacingChange = (e) => {
		const value = e.target.value;
		dispatch(setSpacing(value));
	};

	const handleShadeEffectChange = (e) => {
		const value = e.target.value;
		dispatch(setShadeEffect(value));
	};

	return (
		<ThemeMenuContainer isOpen={isOpen}>
			<ThemeMenuContent>
				<ThemeMenuSectionTitle>Themes</ThemeMenuSectionTitle>
				<ThemeList />
				<SectionBreak />

				<ThemeMenuSectionTitle>Settings</ThemeMenuSectionTitle>

				<SettingWrapper>
					<SettingsLabel>Spacing: </SettingsLabel>
					<Slider
						min={-500}
						max={500}
						value={activeCubeSpacing}
						handler={handleSpacingChange}
					/>
				</SettingWrapper>

				<SettingWrapper>
					<SettingsLabel>Opacity: </SettingsLabel>
					<Slider
						min={0}
						max={100}
						value={activeCubeOpacity}
						handler={handleOpacityChange}
					/>
				</SettingWrapper>

				<SettingWrapper>
					<SettingsLabel>Shade Effect: </SettingsLabel>
					<Slider
						min={0}
						max={50}
						value={activeCubeShadeEffect}
						handler={handleShadeEffectChange}
					/>
				</SettingWrapper>

				<SettingWrapper>
					<SettingsLabel>Glow: </SettingsLabel>
					<Slider
						min={0}
						max={60}
						value={glow}
						handler={handleGlowChange}
					/>
				</SettingWrapper>
			</ThemeMenuContent>
		</ThemeMenuContainer>
	);
};
