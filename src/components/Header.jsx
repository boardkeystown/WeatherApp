import React from 'react';

import './Header.css'

export default function Header() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron">
                        <img src='src/assets/logo.png' className="img-fluid" alt="Responsive image"/>
                        <p id='slug-text'>
                           You want da weather? Well come and get it!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}