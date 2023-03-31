import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function kelvinToFahrenheit(K) {
    return (1.8 * (K - 273) + 32).toFixed(2);
  }



export default function WeatherCard({props}) {
  const idName="card-name-"+props.name
  return (
    <Card id={idName}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}