import { useEffect, useState } from 'react';
import CatFact from './Components/CatFact.jsx';
import CatImage from './Components/CatImage.jsx';
import Button from './Components/Button.jsx';
import { fetchCatFact } from './Data/CatFactData.js';
import { fetchCatImage } from './Data/CatImageData.js';

import './App.css';

function App() {
	const [catFact, setCatFact] = useState('');
	const [imagUrl, setImagUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const getData = async () => {
			await fetchCatData();
		};
		getData();
	}, []);

	const fetchCatData = async () => {
		//*LLAMADO A LA API
		setLoading(true);
		setErrorMessage(null);
		try {
			const fact = await fetchCatFact();
			if (fact) {
				const image = await fetchCatImage(fact);
				setCatFact(fact); //* Guarda datos en el estado
				setImagUrl(image);
			}
		} catch (error) {
			console.error('Error fetching data', error);
			setErrorMessage(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='Main-Container'>
			<div className='title'>
				<h1>Datos Random's de Mininos</h1>
			</div>

			<div className='App-Container'>
				{loading && <p>Cargando...</p>}
				{!loading && !errorMessage && <CatFact fact={catFact} />}

				<div className='Image-Container'>
					{!loading && !errorMessage && <CatImage imageUrl={imagUrl} />}
					<div className='Button-Container'>
						<Button onClick={fetchCatData} />
					</div>
				</div>

				{errorMessage && (
					<p className='Message-Error' style={{ color: 'red' }}>
						Error: {errorMessage}
					</p>
				)}
			</div>
		</div>
	);
}

export default App;
