import React, { Component } from 'react';
import Navbar from './navbar';
import Errors from './errors';
import Insert from './insert';
import Iframe from './iframe';

export default class Index extends Component{

    render(){
        return(
            <div>
                <Navbar />
                <Errors />
                <Insert />
                <Iframe />
            </div>
       )
    }

}
