import React, { Component } from 'react';

export default class Insert extends Component{

    constructor(props){
        super(props)

        this.state = {
            message:""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    /*Setando valores do campo*/
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    /*Enviando mensagens para o iframe*/
    handleSubmit(e){
        e.preventDefault();
        if(!this.handleValidation())
        return;
        
        /*Recebendo o iframe em uma variavel*/
        let remoteframe = document.getElementById("remotepage");
        let message = this.state.message;

        if (message !== "")
            /*Disparando Mensagem*/ 
            remoteframe.contentWindow.postMessage(message, 'https://crebsvas.000webhostapp.com');
        else
            console.log("erro");
    }

     /*Validação simples para os campos*/
     handleValidation(){
        document.getElementById("erros").style.display = "none";
        let message =  this.state.message;
        let errors = "";

        if(message === "") errors += '<p>Mensagem não pode ser vazia</p>';
    
        if(errors != ""){
            document.getElementById("erros").style.display = "block";
            document.getElementById("erros").innerHTML = errors;
            return 0;
        }else
            return 1;
    
    }

    render(){
        return(
            <section id="hero">
                <div className="container-fluid">
                    <h3>Envie uma Mensagem</h3>
                    <div id="controls">
                        <form onSubmit={this.handleSubmit}>
                            <label for="message">Mensagem:</label>
                            <input type="text" name="message" id="message" onChange={this.handleChange} />
                            <button id="sendmessage">Enviar Message</button>
                        </form>
                    </div>
                </div>
            </section>
       )
    }

}
