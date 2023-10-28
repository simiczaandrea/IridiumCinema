import React, { useEffect, useRef, useState } from 'react';
import { SelectProps } from './SelectInterface';
import './Select.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Select = (props: SelectProps) => {
	const { options, selected, setSelected, defaultValue } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [focusIndex, setFocusIndex] = useState(-1);
	const containerRef = useRef<HTMLDivElement>(null);
	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = (option: string) => {
		if (option === 'All') {
			setSelected(defaultValue);
		} else {
			setSelected(option);
		}
		setIsOpen(false);
	};

	/**
	 * this part is to hide the drop down if the user clicks away
	 */
	useEffect(() => {
		const handler = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false);
				setFocusIndex(-1);
			}
		};
		document.addEventListener('mousedown', handler);
	}, []);

	const handleKeyDown = (event: React.KeyboardEvent) => {
		switch (event.key) {
			case 'Enter':
				if (isOpen) {
					handleClick(options[focusIndex].label);
				} else {
					setIsOpen(!isOpen);
				}
				break;
			case 'ArrowDown':
				isOpen
					? setFocusIndex((focusIndex) =>
							focusIndex < options.length - 1 ? focusIndex + 1 : focusIndex
					  )
					: setIsOpen(true);
				break;
			case 'ArrowUp':
				setFocusIndex((focusIndex) => (focusIndex > 0 ? focusIndex - 1 : 0));
				break;
			case 'Escape':
				setIsOpen(false);
				setFocusIndex(-1);
				break;
			case 'Tab':
				setIsOpen(false);
				setFocusIndex(-1);
				break;
		}
	};

	return (
		<div className='select' ref={containerRef}>
			<div
				className='select__box'
				onClick={handleOpen}
				onKeyDown={(event) => handleKeyDown(event)}
				tabIndex={0}>
				{selected}
				<FontAwesomeIcon icon={faChevronDown} className='select__icon' />
			</div>
			{isOpen && (
				<ul className='select__option'>
					{options.map((option, index) => {
						return (
							<li
								key={option.id}
								onClick={() => handleClick(option.label)}
								className={`select__option-item 
                ${focusIndex === index ? 'select__option-item--active' : ''}`}>
								{option.label}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Select;
