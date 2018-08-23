import React, { Component } from 'react';
import speechbubble from '../images/speechbubble.svg'; 

class Synonym extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      synonyms: this.props.synonyms,
      error: this.props.error,
      intro: this.props.intro
    }
  }
  render(){
    let intro;
    if(this.props.intro === true) {
      intro = (<div type="textbox" id="text">Hi, I'm Thesaurus-Rex. Type a word in the box below and I'll tell a synonym.</div>)
    }

    let error;
    if (this.props.error === true) {
     error = ( <div type="textbox" id="text">Hmm, I can't think of any synonyms for that word. Maybe it's spelled wrong or it isn't a word. Try again!</div>);
    }

    let synonyms;
    if (this.props.synonyms){
      synonyms = ( <div type="textbox" id="text">Here are some synonyms  - {this.props.synonyms}</div>);
    }  
    return(
      <div id="speech-area">
         <img src={speechbubble} alt="speech-bubble" id="bubble"/> 
        {intro}
        {error} 
        {synonyms}
      </div>
    )   
  }
}


  export default Synonym;
 
