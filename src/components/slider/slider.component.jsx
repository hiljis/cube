import './slider.styles.scss';

export const Slider = ({ min, max, value, inputHandler, title, step, horizontal }) => {
	return (
		<div className={`sliderContainer ${horizontal ? 'horizontal' : 'vertical'}`}>
			<label className="sliderLabel">{title}</label>
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
