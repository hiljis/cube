import { useState } from 'react';
import { StyledBackgroundWelcome, StyledAnimatedText } from './welcome.styles.js';

export const Welcome = () => {
	const [show, setShow] = useState(true);
	const [remove, setRemove] = useState(false);

	const removeWelcome = () => {
		setShow(false);
		setTimeout(() => {
			setRemove(true);
		}, 1000);
	};
	return (
		<StyledBackgroundWelcome show={show} remove={remove}>
			<StyledAnimatedText onClick={removeWelcome} show={show}>
				Welcome
			</StyledAnimatedText>
		</StyledBackgroundWelcome>
	);
};
