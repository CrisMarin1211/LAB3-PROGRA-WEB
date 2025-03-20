import React from 'react';

const CatImage = ({ imageUrl }) => {
	return <img src={imageUrl} alt='Minino' style={{ maxWidth: '100%' }} />;
};

export default CatImage;
