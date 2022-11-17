import './slider.styles.css';

export const Slider = ({ min, max, value, handler }) => {
	return (
		<div className="slidecontainer">
			<input
				type="range"
				min={min}
				max={max}
				value={value}
				className="slider"
				id="myRange"
				onInput={handler}
			/>
		</div>
	);
};
