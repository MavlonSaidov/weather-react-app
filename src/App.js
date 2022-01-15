import React, { useState, useEffect } from 'react'
import './App.scss';

const App = () => {

	const apiKey = "96f6ba150dbfde1782395bffef95d6a2";
	const [weatherData, setWeatherData] = useState([{}]);
	const [city, setCity] = useState('');


	const getWeather = (event) => {
		if (event.key === 'Enter') {
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(res => res.json()).then(result => setWeatherData(result));
			setCity('');
			console.log(weatherData);
		}
	}

	// useEffect(() => {
	// 	getWeather();
	// }, [])

	const KtoC = (k) => {
		return (k - 273.15).toFixed(2);
	}

	return (
		<div>

			{typeof weatherData.main === 'undefined' ? (
				<p className='title'>Weather Temperature Finder</p>
			) : (
				<div>
					<div className="location">
						<h1 className="location__timezone">{weatherData.name}</h1>
						<p className="icon">
							<img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
								alt="weather-icon" /></p>
					</div>
					<div className="temperature">
						<div className="degree-section">
							<h2 className="temperature__degree">{KtoC(weatherData.main.temp)}</h2>
							<span>C°</span>
						</div>
						<p className="temperature__description">{weatherData.weather[0].description}</p>
					</div>
				</div>
			)}
			<div action="#" className="form">
				<input type="text"
					className="input"
					placeholder="Enter a city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					onKeyPress={getWeather}
				/>
			</div>
		</div>
	)
}

export default App
