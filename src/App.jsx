
import { useState, useEffect, useRef } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Basic from './components/Basic'
import Header from './components/Header';

import WeatherCard from './components/WeatherCard';

import { Button } from 'react-bootstrap';


import { Typeahead } from 'react-bootstrap-typeahead';

//const API_KEY = process.env.REACT_APP_API_KEY




function App() {
  //console.log(API_KEY);
  // const [count, setCount] = useState(0)

  // https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=fda9934c5db06f040978dbd1d0810295
  const [weatherData, setWeatherData] = useState()
  const [searchTerm, setSearchTerm] = useState("Boston")
  const [currentCards, setCards] = useState([])

  useEffect(() => {
    const API_KEY = '6bd1df1aa8404235c293ee98ad44fee7';
    const API_Page = `https://api.openweathermap.org`
    const API_URL = `${API_Page}/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`;
    
    console.log("SEARCHING:" + searchTerm)
    if (searchTerm) {
      fetch(API_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then(data => {
          
          console.log(data);
          setWeatherData(data);

        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [searchTerm]);


  useEffect(() => {
    const tempArry = [...currentCards, weatherData]
    console.log("here")
    setCards(tempArry);
  }, [weatherData])



  function RemoveCard(index) {
    const synth = window.speechSynthesis;
    const utterance1 = new SpeechSynthesisUtterance(
      "isspay outyay assmyay"
    );
    synth.speak(utterance1);


    const newArray = [...currentCards]
    newArray.splice(index,1);
    console.log(newArray);
    setCards(newArray);
  }

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

  const [arry, setArry] = useState([1, 2, 3, 4, 5]);

  const removeItem = (index) => {
    const newArray = [...arry];
    newArray.splice(index, 1);
    setArry(newArray);
  }

  function addItem() {
    console.log("CRINGE")
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * 1000) + 1;
    } while (arry.includes(randomNum));
    const newArray = [...arry, randomNum];
    console.log(newArray);
    setArry(newArray);
  }


  const [inputText, setInputText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(inputText);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [inputText]);


  const handleInputChange = (event) => {
    setInputText(event.target.value);
    console.log(event.target.value)
  };

  const handleSubmit = () => {
    console.log(inputText);
    setInputText('');
    setSearchTerm(inputText)
    inputRef.current.focus();
  };




  const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
      fetch('src/assets/city_names.just.names.min.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setJsonData(data)
          }
        )
        .catch(error => console.error(error));
    }, []);




  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Row id="current-weather-selections" className='flex-wrap'>
          <Basic props={ddddd}></Basic>
          <Basic props={ddddd}></Basic>
          <WeatherCard props={ddddd}></WeatherCard>
        </Row>

        <div>
          <input type="text" value={inputText} onChange={handleInputChange} ref={inputRef} />
          <Button onClick={handleSubmit}>bootan foram city qwerty, yes</Button>
        </div>

        {
          currentCards.map((e, i) => (
            <div key={i}>
              <WeatherCard wd={e} idx={i} func={RemoveCard} />
            </div>
          ))
          
        }

          <Typeahead
            onChange={(selected) => {
              // it kind of works need a better way to filter and get the 
              // id maybe from the options should also show states.
              //the python book is included to show you how I did it
              // Handle selections...
              console.log("SELECTED:" + selected )
              setSearchTerm(encodeURIComponent(selected));
            }}
            options={jsonData}
          />

        <Button variant="primary" onClick={addItem}>Submit</Button>
        {arry.map((e, i) => (
          <div key={i}>
            <p id={"p_id_" + e}>{e}</p>
            <Button variant="danger" onClick={() => removeItem(i)}>Remove</Button>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default App
