export const fetchCatFact = async () => {
	try {
		const response = await fetch('https://catfact.ninja/fact');
		const data = await response.json();
		return data.fact;
	} catch (error) {
		alert('Error getting Cat');
		return null;
	}
};

//* Realizamos una solicitud a la API esta convierte la información a JSON y luego devuelve el dato curioso dsel gato
