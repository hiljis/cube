import './switch.styles.css';

export const Switch = ({ checked, handler }) => (
	<div>
		<label className="switch">
			<input type="checkbox" checked={checked} onChange={handler} />
			<span className="switch__slider"></span>
		</label>
	</div>
);
