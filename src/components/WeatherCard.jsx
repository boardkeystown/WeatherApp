import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./WeatherCard.css";

export default function WeatherCard({wd, idx, func}) {

  // why in the heck does it return undefined the first go around!?!?!?
  if (typeof wd === 'undefined' || 
      typeof idx === 'undefined' ||
       typeof func === 'undefined') {
    return (<></>);
  }

  //console.log("in card")
  //console.log(wd)
  //console.log(wd.name)
  //console.log(idx)
  //console.log(wd.weather[0].description)

  const wdIconURL = "https://openweathermap.org/img/wn/"+wd.weather[0].icon+"@2x.png"

  function kelvinToFahrenheit(K) {
    return (1.8 * (K - 273) + 32).toFixed(2);
  }
  return (
    <Card className="cardStyle">
      <Card.Body>
        <Card.Title className='card-heading'>{"City: "+wd.name}</Card.Title>
        <Card.Img src={wdIconURL}
          style={{ width: '100px', height: '100px' }}
        ></Card.Img>
        <Card.Text>
          {"      Temperature: "+kelvinToFahrenheit(wd.main.temp)}°F{" "}<br/>
          {"Weather Condition: "+wd.weather[0].description}{" "}<br/>
          {"       Wind Speed: "+wd.wind.speed}{"km/h"}<br/>
          {"         Humidity: "+wd.wind.speed}{"%"}<br/>
        </Card.Text>
        <Button variant="danger" onClick={() => func(idx)}>Remove</Button>
      </Card.Body>
    </Card>
  )
}