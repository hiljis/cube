import { useSelector } from 'react-redux';
import { selectSettingsMenuIsOpen } from '../../store/menues/menuesSlice';
import {
	Pagination,
	PaginationButton,
	PaginationText,
	SettingsMenuContainer,
	SettingsPage,
} from './settingsMenu.styles';
import { SelectionGroupSolid } from './selectionGroups/selectionGroupSolid/selectionGroupSolid.component';
import { SelectionGroupActive } from './selectionGroups/selectionGroupActive/selectionGroupActive.component';
import { SelectionGroupShape } from './selectionGroups/selectionGroupShape/selectionGroupShape.component';
import { SelectionGroupEdgeLock } from './selectionGroups/selectionGroupEdgeLock/selectionGroupEdgeLock.component';
import { SliderOpacity } from '../slider/sliderOpacity.component';
import { SliderSpacing } from '../slider/sliderSpacing.component';
import { SliderShade } from '../slider/sliderShade.component';
import { SliderGlow } from '../slider/sliderGlow.component';
import { useState } from 'react';
import { SelectionGroupColor } from './selectionGroups/selectionGroupColor/selectionGroupColor.component';
import { SelectionGroupColorTarget } from './selectionGroups/selectionGroupColorTarget/selectionGroupColorTarget.component';
import { SliderColorTargetOpacity } from '../slider/sliderColorTargetOpacity';

export const SettingsMenu = () => {
	const isOpen = useSelector(selectSettingsMenuIsOpen);
	const [currentPage, setCurrentPage] = useState(1);

	const decrementPage = () => {
		if (currentPage !== 1) setCurrentPage((prev) => prev - 1);
	};

	const incrementPage = () => {
		if (currentPage !== 3) setCurrentPage((prev) => prev + 1);
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
				''
			)}

			{currentPage === 2 ? (
				<SettingsPage page={2} currentPage={currentPage}>
					<SliderOpacity />
					<SliderSpacing />
					<SliderShade />
					<SliderGlow />
				</SettingsPage>
			) : (
				''
			)}

			{currentPage === 3 ? (
				<SettingsPage page={3} currentPage={currentPage}>
					<SelectionGroupColorTarget />
					<SelectionGroupColor />
					<SliderColorTargetOpacity />
				</SettingsPage>
			) : (
				''
			)}

			<Pagination>
				<PaginationButton onClick={decrementPage} hide={currentPage === 1}>
					&uarr;
				</PaginationButton>
				<PaginationText>{currentPage} / 3</PaginationText>
				<PaginationButton onClick={incrementPage} hide={currentPage === 3}>
					&darr;
				</PaginationButton>
			</Pagination>
		</SettingsMenuContainer>
	);
};
