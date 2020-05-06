import React, { Component } from 'react';
import Weather from './Components/Weather';
import Form from './Components/Form';

const API_KEY = "3fc9ac45d4145b121b1ccc5fc9978ed9"
class App extends Component {
  state = {
    temperature: '',
    temp_max: '',
    temp_min: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    main: '',
    error: ''
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json();
    console.log("App -> getWeather -> data", data)

    if (api.status >= 200 && api.status < 300 && city && country) {

      this.setState({
        temperature: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        main: data.weather[0].main,


        error: ''
      })

    } else {
      this.setState({
        temperature: '',
        temp_max: '',
        temp_min: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        main: '',
        error: 'please enter valid data'
      })
    }

  }
  render() {
    return (
      <div className="App">

        <h1 className="title">Weather App</h1>
        <Form
          getWeather={this.getWeather}
        />
        <Weather
          temperature={this.state.temperature}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          main={this.state.main}
          error={this.state.error} />
      </div>
    );
  }
}
export default App;
