import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Product from '../Components/Product.js';
import data from '../data';

export default class HomeScreen extends Component{
    render(){
    return (
        
        <div>
            <div class="row center">

                {
                    data.products.map(product => (
                        <Product key={product._id} product={product}></Product>

                    ))
                }
            </div>
        </div>
    );
}
}