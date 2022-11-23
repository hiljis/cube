import { useSelector } from 'react-redux';
import { selectSettingsMenuIsOpen } from '../../store/menues/menuesSlice';
import { PageButton, SettingsMenuContainer, SettingsPage } from './settingsMenu.styles';
import { SelectionGroupSolid } from './selectionGroups/selectionGroupSolid/selectionGroupSolid.component';
import { SelectionGroupActive } from './selectionGroups/selectionGroupActive/selectionGroupActive.component';
import { SelectionGroupShape } from './selectionGroups/selectionGroupShape/selectionGroupShape.component';
import { SelectionGroupEdgeLock } from './selectionGroups/selectionGroupEdgeLock/selectionGroupEdgeLock.component';
import { SliderOpacity } from '../slider/sliderOpacity.component';
import { SliderSpacing } from '../slider/sliderSpacing.component';
import { SliderShade } from '../slider/sliderShade.component';
import { SliderGlow } from '../slider/sliderGlow.component';
import { useState } from 'react';
import { ReactComponent as IconArrowUp } from '../../assets/icons/svgs/arrow-up-outline.svg';
import { ReactComponent as IconArrowDown } from '../../assets/icons/svgs/arrow-down-outline.svg';

export const SettingsMenu = () => {
	const isOpen = useSelector(selectSettingsMenuIsOpen);
	const [currentPage, setCurrentPage] = useState(1);

	const handleOnPageChangeDown = () => {
		setCurrentPage(2);
	};

	const handleOnPageChangeUp = () => {
		setCurrentPage(1);
	};

	return (
		<SettingsMenuContainer isOpen={isOpen}>
			{currentPage === 1 ? (
				<SettingsPage page={1} currentPage={currentPage}>
					<SelectionGroupActive />
					<SelectionGroupSolid />
					<SelectionGroupShape />
					<SelectionGroupEdgeLock />
				</SettingsPage>
			) : (
				<SettingsPage page={2} currentPage={currentPage}>
					<SliderOpacity />
					<SliderSpacing />
					<SliderShade />
					<SliderGlow />
				</SettingsPage>
			)}

			{currentPage === 1 ? (
				<PageButton onClick={handleOnPageChangeDown}>
					{/* <IconArrowUp /> */}
					&darr;
				</PageButton>
			) : (
				<PageButton onClick={handleOnPageChangeUp}>&uarr;</PageButton>
			)}
		</SettingsMenuContainer>
	);
};
