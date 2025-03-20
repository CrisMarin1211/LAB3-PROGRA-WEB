export const fetchCatImage = async (text) => {
	try {
		const formatText = text.split(' ').slice(0, 4).join(' ');
		const url = `https://cataas.com/cat/cute/says/${encodeURIComponent(
			formatText
		)}?position=center&font=Impact&fontSize=20&fontColor=%23fff&width=300&height=300`;
		return url;
	} catch (error) {
		alert('Error obteniendo la imagen del gato');
		return null;
	}
};
