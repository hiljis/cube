import { RangeLabel } from '../settingsMenu/rangeGroups/rangeGroup/rangeGroup.styles';
import './slider.styles.css';

export const Slider = ({ min, max, value, inputHandler, title, step }) => {
	return (
		<div className="slidecontainer">
			<RangeLabel>{title}</RangeLabel>
			<input
				style={{
					background: `linear-gradient(to right, blue 0%, blue ${(value * 100) / max}%, #d7d7ff ${
						value / max
					}%, #d7d7ff 100%)`,
				}}
				type="range"
				value={value}
				min={min}
				max={max}
				className="slider"
				id="myRange"
				onChange={inputHandler}
				step={step}
			/>
		</div>
	);
};
