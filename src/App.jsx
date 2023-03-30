
import { useState, useEffect } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Basic from './components/Basic'

//const API_KEY = process.env.REACT_APP_API_KEY

function App() {

  //console.log(API_KEY);
  // const [count, setCount] = useState(0)

    // https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=fda9934c5db06f040978dbd1d0810295
    const [weatherData,setWeatherData] = useState()
    const [searchTerm,setSearchTerm] = useState("Boston")

    useEffect(() => {
      const API_KEY = 'fda9934c5db06f040978dbd1d0810295';
      const API_Page = `https://api.openweathermap.org`
      const API_URL = `${API_Page}/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`;
    
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWeatherData(data);
          console.log(data)
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


  return (
    <div className="App">
      <Container>
        <Container>
          <Row className='flex-wrap'>
            <Col>
              <Card >
                <Basic props={weatherData}></Basic>
              </Card>
            </Col>
            <Col>
              <Card >
                <p>HI miii wife!</p>
              </Card>
            </Col>
            <Col>
              <Card >
                <p>HI miii wife!</p>
              </Card>
            </Col>
            <Col>
              <Card>
                <p>HI miii wife!</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default App
