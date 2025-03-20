import React from 'react';

const CatImage = ({ imageUrl }) => {
	// <-- Prop corregida a "imageUrl"
	return <img src={imageUrl} alt='Minino' style={{ maxWidth: '100%' }} />;
};

export default CatImage;
