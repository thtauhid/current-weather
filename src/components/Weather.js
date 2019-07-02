import React, {Component} from 'react'
import axios from 'axios'
import { geolocated } from "react-geolocated"

import SingleData from './SingleData'

export default class Weather extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weatherData: [],
			weatherDataMain: [],
			weatherDataWeather: []
		}
	}
	//Get Lat & Lon
	//Make API Call
	componentDidMount() {
		axios.get('https://api.openweathermap.org/data/2.5/weather?lat=24.8679221&lon=89.3570525&units=metric&appid=d117b2553459bbcfe3ddb5e8db0edfa4')
			.then(response => {
				this.setState({
					weatherData: response.data,
					weatherDataMain: response.data.main,
					weatherDataWeather: response.data.weather[0],
				})
				console.log(this.state.weatherDataWeather)
			})
			.catch(err => {
				console.log('Error: ' + err)
			})
	}



	//Display Data
	render() {
		return(
				<div>
					 {this.state.weatherDataMain.temp}
					 {this.state.weatherDataWeather.description}
					 {this.state.weatherData.name}
				</div>
			)

	}
}