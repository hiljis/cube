import { useSelector } from 'react-redux';
import { selectSettingsMenuIsOpen } from '../../store/menues/menuesSlice';
import {
	RangeGroups,
	SelectionGroups,
	SettingsMenuContainer,
} from './settingsMenu.styles';
import { CubeSelectorGroup } from '../cubeSelectorGroup/cubeSelectorGroup.component';
import { SelectionGroupSolid } from './selectionGroups/selectionGroupSolid/selectionGroupSolid.component';
import { SelectionGroupActive } from './selectionGroups/selectionGroupActive/selectionGroupActive.component';
import { SelectionGroupShape } from './selectionGroups/selectionGroupShape/selectionGroupShape.component';
import { SelectionGroupEdgeLock } from './selectionGroups/selectionGroupEdgeLock/selectionGroupEdgeLock.component';
import { RangeGroup } from './rangeGroups/rangeGroup/rangeGroup.component';

export const SettingsMenu = () => {
	const isOpen = useSelector(selectSettingsMenuIsOpen);

	return (
		<SettingsMenuContainer isOpen={isOpen}>
			<SelectionGroups>
				{/* <CubeSelectorGroup /> */}
				<SelectionGroupActive />
				<SelectionGroupSolid />
				<SelectionGroupShape />
				<SelectionGroupEdgeLock />
			</SelectionGroups>
			<RangeGroups>
				<RangeGroup type="opacity" />
				<RangeGroup type="spacing" />
				<RangeGroup type="shadeEffect" />
				<RangeGroup type="glow" />
			</RangeGroups>
		</SettingsMenuContainer>
	);
};
