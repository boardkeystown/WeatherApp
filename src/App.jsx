
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
  const [searchTerm, setSearchTerm] = useState()
  const [currentCards, setCards] = useState([])

  useEffect(() => {
    const API_KEY = '053f2827f1fdb65f16e9161df49ac87b';
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
          console.log("data queried");
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [searchTerm]);


  useEffect(() => {
    const tempArry = [weatherData, ...currentCards]
    console.log("here")
    setCards(tempArry);
  }, [weatherData])



  function RemoveCard(index) {
    //const synth = window.speechSynthesis;
    //const utterance1 = new SpeechSynthesisUtterance(
    //  "isspay outyay assmyay"
   // );
    //synth.speak(utterance1);


    const newArray = [...currentCards]
    newArray.splice(index,1);
    console.log(newArray);
    setCards(newArray);
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
        <div>
          <input type="text" value={inputText} onChange={handleInputChange} ref={inputRef} />
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
          <Button onClick={handleSubmit}>bootan foram city qwerty, yes</Button>
        </div>
        <Row id="current-weather-selections" className='flex-wrap'>
          {
            currentCards.map((e, i) => (
              <div key={i}>
                <WeatherCard wd={e} idx={i} func={RemoveCard} />
              </div>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default App
