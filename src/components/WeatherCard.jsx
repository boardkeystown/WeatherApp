import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function WeatherCard({wd, idx, func}) {

  // why in the heck does it return undefined the first go around!?!?!?
  if (typeof wd === 'undefined' || 
      typeof idx === 'undefined' ||
       typeof func === 'undefined') {
    return (<></>);
  }

  console.log("in card")
  console.log(wd)
  console.log(wd.name)
  console.log(idx)


  const wdIconURL = "https://openweathermap.org/img/wn/"+wd.weather[0].icon+"@2x.png"

  function kelvinToFahrenheit(K) {
    return (1.8 * (K - 273) + 32).toFixed(2);
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>{"City: "+wd.name}</Card.Title>
        <Card.Text>
          {"      Temperature: "+kelvinToFahrenheit(wd.main.temp)}°F{" "}<br/>
          {"Weather Condition: "+wd.weather.description}{" "}<br/>
          {"       Wind Speed: "+wd.wind.speed}{"km/h"}<br/>
          {"         Humidity: "+wd.wind.speed}{"%"}<br/>
        </Card.Text>
        <Card.Img src={wdIconURL}
          style={{ width: '200px', height: '200px' }}
        ></Card.Img>
        <br/>
        <Button variant="danger" onClick={() => func(idx)}>ReeEEEeeeEmove</Button>
      </Card.Body>
    </Card>
  )
}