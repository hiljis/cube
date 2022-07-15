import './slider.styles.css';

export const Slider = ({ value, handler }) => {
	console.log(value);
	return (
		<div className="slidecontainer">
			<input
				type="range"
				min="1"
				max="100"
				value={value}
				className="slider"
				id="myRange"
				onInput={handler}
			/>
		</div>
	);
};
