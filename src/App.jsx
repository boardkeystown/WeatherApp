
import { useState, useEffect } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Basic from './components/Basic'
import Header from './components/Header';

//const API_KEY = process.env.REACT_APP_API_KEY

function App() {

  //console.log(API_KEY);
  // const [count, setCount] = useState(0)

    // https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=fda9934c5db06f040978dbd1d0810295
    const [weatherData,setWeatherData] = useState()
    const [searchTerm,setSearchTerm] = useState("Boston")

    useEffect(() => {
      const API_KEY = '';
      const API_Page = `https://api.openweathermap.org`
      const API_URL = `${API_Page}/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`;

      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      if (searchTerm) {
        fetchData();
      }
    }, [searchTerm]);

    // setSearchTerm("Boston")
    console.log("cringe?")
    console.log(weatherData)


  const ddddd = {
    coord: {
      lon: -71.0598,
      lat: 42.3584
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04n"
      }
    ],
    base: "stations",
    main: {
      temp: 278.46,
      feels_like: 274.37,
      temp_min: 276.85,
      temp_max: 279.73,
      pressure: 1015,
      humidity: 66
    },
    visibility: 10000,
    wind: {
      speed: 6.17,
      deg: 200
    },
    clouds: {
      all: 75
    },
    dt: 1680142761,
    sys: {
      type: 2,
      id: 2013408,
      country: "US",
      sunrise: 1680085935,
      sunset: 1680131138
    },
    timezone: -14400,
    id: 4930956,
    name: "Boston",
    cod: 200
  }

  
  return (
    <div className="App">
    <Container>
      <Header></Header>
      <Row id="current-weather-selections" className='flex-wrap'>
        <Col>
          <Card >
            <Basic props={ddddd}></Basic>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default App
