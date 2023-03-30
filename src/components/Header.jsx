import React from 'react';

import './Header.css'

export default function Header() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="jumbotron">
                        <img src='src/assets/logo.png' class="img-fluid" alt="Responsive image"/>
                        <p id='slug-text'>
                           You want da weather? Well come and get it!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}