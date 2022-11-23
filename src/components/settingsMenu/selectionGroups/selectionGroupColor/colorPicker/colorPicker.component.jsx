import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveColorTargetColor, setActiveColorTargetColor } from '../../../../../store/cube/cubeSlice';
import './colorPicker.styles';
import { BtnLeft, BtnRight, ColorOption, ColorOptionsPage } from './colorPicker.styles';
import './colorPicker.scss';

const colorOptionsPages = [
	['34,34,59', '74,78,105', '154,140,152', '201,173,167', '242,233,228'],
	['134,19,136', '225,90,151', '238,171,196', '199,153,166', '75,40,64'],
	['229,61,0', '255,234,0', '252,255,247', '33,160,160', '4,104,101'],
	['120,193,224', '68,157,209', '20,5,120', '14,14,82', '57,68,183'],
	['255,0,0', '255,162,0', '0,255,60', '0,0,255', '255,0,200'],
];

const getCurrentColorOptionsPage = (colorStr) => {
	let index = 0;
	colorOptionsPages.every((page, i) => {
		if (page.includes(colorStr)) {
			index = i;
			return false;
		}
		return true;
	});
	return index;
};

export const ColorPicker = () => {
	const dispatch = useDispatch();
	const currentColor = useSelector(selectActiveColorTargetColor);
	const [currentPage, setCurrentPage] = useState(getCurrentColorOptionsPage(currentColor));

	const incrementCurrentPage = () => {
		if (currentPage !== colorOptionsPages.length - 1) setCurrentPage((prev) => prev + 1);
	};

	const decrementCurrentPage = () => {
		if (currentPage !== 0) setCurrentPage((prev) => prev - 1);
	};

	const handleSelect = (e) => {
		const color = e.target.getAttribute('color');
		dispatch(setActiveColorTargetColor(color));
	};

	return (
		<div className="colorPickerContainer" id="colorPicker">
			<BtnLeft onClick={decrementCurrentPage}>&larr;</BtnLeft>
			<ColorOptionsPage onClick={handleSelect}>
				{colorOptionsPages[currentPage].map((color, i) => (
					<ColorOption key={i} bgColor={`rgb(${color})`} color={color} active={currentColor === color} />
				))}
			</ColorOptionsPage>
			<BtnRight onClick={incrementCurrentPage}>&rarr;</BtnRight>
		</div>
	);
};
