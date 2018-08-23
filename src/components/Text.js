import React from 'react';
import Synonym from './Synonym';
import trex from '../images/trex.gif';
import quicktype from '../images/quicktype.jpg'; 

import axios from 'axios';

class Text extends React.Component {
  constructor() {
    super();

    this.state = {
      word: '',
      error: false,
      intro: true
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    const url = "https://words.bighugelabs.com/api/2/ae20e1ed4d471a357983df53d1e40ad2/" + this.state.word + "/json";

    axios.get(url)
      .then((response) => {  
        let adj = []
        let noun = []
        let verb = []

        let data = response.data;

        console.log(data);

        if(data.adjective){
          adj = (data.adjective.syn).slice(0, 5);
          adj = (data.adjective.sim).slice(0,4);  
        }

        if (data.noun) {
         noun = (data.noun.syn).slice(0, 5);
        }

        if(data.verb){
          verb = (data.verb.syn).slice(0, 5 );
        }

        var synonyms = adj.concat(noun, verb).join(', ');


        console.log(synonyms);

        this.setState({synonyms, error: false, intro: false, word: '',})

      })
      .catch(error => {
        this.setState({error: true, intro: false, synonyms: '', word: '',});
      })
  }

  render() {
    return (

      <div className="containter" id="container">

      <div id="body">

          <div className="row no-gutters">
            <div className="col">
              <Synonym 
                  synonyms={this.state.synonyms}
                  error={this.state.error}
                  intro={this.state.intro}/>      
          </div> 
         </div>  

        <div className="row no-gutters">
          <div className="col">
            <img id="trex" src={trex} alt="t-rex" /> 
          </div>
        </div>  
        </div>

      <div id="footer">
        <div className="row no-gutters">
          <div className="col-12" id="input">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group" >
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
              </div>
                <input 
                  onChange={this.onChange}
                  name="word"
                  value={this.state.word}
                  placeholder=" "
                  type="text" 
                  className="form-control" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"/>
            </div>
          </form>
          </div>  
        </div>
        <div className="row no-gutters">
          <div className="col-12" id="keyboard">
            <img src={quicktype} alt="quicktype" width="100%" height="253"/>
          </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Text;
