import React, { Component } from 'react';

export default class Iframe extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <section id="iframe">
                <div className="container-fluid">
                    <iframe id="remotepage" src="https://crebsvas.000webhostapp.com/iframe.html"></iframe>
                </div>
            </section>
       )
    }

}
