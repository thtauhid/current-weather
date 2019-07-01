import React, {Component} from 'react'
import axios from 'axios'
import { geolocated } from "react-geolocated"

import SingleData from './SingleData'

export default class Weather extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weatherData: []
		}
	}
	//Get Lat & Lon
	//Make API Call
	componentDidMount() {
		axios.get('https://api.openweathermap.org/data/2.5/weather?lat=24.8679221&lon=89.3570525&appid=d117b2553459bbcfe3ddb5e8db0edfa4')
			.then(response => {
				this.setState({
					weatherData: response.data
				})
				console.log(this.state.weatherData)
			})
			.catch(err => {
				console.log('Error: ' + err)
			})
	}


dataDisplay() {
	return this.state.weatherData.map(data => {
		return <SingleData data={data} />
	})
}

	//Display Data
	render() {
		return(
				<div>
					<SingleData  />
				</div>
			)

	}
}