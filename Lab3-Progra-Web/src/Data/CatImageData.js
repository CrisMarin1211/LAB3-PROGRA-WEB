export const fetchCatImag = async (text) => {
	try {
		const formatText = text.split(' ').slice(0, 4).join(' ');
		const url = `https://cataas.com/cat/cute/says/${encodeURIComponent(
			formatText
		)}?position=center&font=Impact&fontSize=20&fontColor=%23fff&width=300&height=300`;
		return url;
	} catch (error) {
		alert('Error getting Cat Image');
		return null;
	}
};

//* Tomamos un texto y lo dividimos máximo en 4, genera una URL de la imagen y le agrega las primeras 4 palabras que unifico
