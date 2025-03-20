export const fetchCatFact = async () => {
	try {
		const response = await fetch('https://catfact.ninja/fact');
		const data = await response.json();
		return data.fact;
	} catch (error) {
		alert('Error obteniendo el dato del gato');
		return null;
	}
};
