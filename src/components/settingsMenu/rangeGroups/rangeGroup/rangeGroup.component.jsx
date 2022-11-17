import { PieIndicator } from '../../pieIndicator/pieIndicator.component';
import { RangeGroupContainer, RangeLabel } from './rangeGroup.styles';

const getRangeProperies = (type) => {
	switch (type) {
		case 'opacity':
			return {
				labelText: 'opacity',
				min: 0,
				max: 100,
				initValue: 100,
				target: 'opacity',
			};
		case 'spacing':
			return {
				labelText: 'spacing',
				min: -100,
				max: 100,
				initValue: 0,
				target: 'spacing',
			};
		case 'shadeEffect':
			return {
				labelText: 'shade',
				min: 0,
				max: 100,
				initValue: 0,
				target: 'shadeEffect',
			};
		case 'glow':
			return {
				labelText: 'glow',
				min: 0,
				max: 100,
				initValue: 0,
				target: 'glow',
			};
		default:
			return { labelText: null, min: null, max: null, target: null };
	}
};

export const RangeGroup = ({ type }) => {
	const { labelText, min, max, initValue, target } = getRangeProperies(type);
	return (
		<RangeGroupContainer>
			<RangeLabel>{labelText}</RangeLabel>
			<PieIndicator
				min={min}
				max={max}
				initValue={initValue}
				target={target}
			/>
		</RangeGroupContainer>
	);
};
