import React from 'react';
import '../Components/button.css';

const Button = ({ onClick }) => {
	return (
		<button className='New-Fact-Button' onClick={onClick}>
			New Fact
		</button>
	);
};

export default Button;
