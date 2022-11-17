import { useState } from 'react';
import {
	StyledBackgroundWelcome,
	StyledAnimatedText,
} from './welcome.styles.js';

export const Welcome = () => {
	const [show, setShow] = useState(true);
	let opacity = 1;

	const removeWelcome = () => {
		setShow(false);
	};
	return (
		<StyledBackgroundWelcome show={show}>
			<StyledAnimatedText onClick={removeWelcome} show={show}>
				Welcome
			</StyledAnimatedText>
		</StyledBackgroundWelcome>
	);
};
