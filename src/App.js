import React, { Component } from 'react';
import './App.css';
import Flexi from './Flexi';

const flexiConfig = [{
  "name":"personname",
  "label":"Person's Name",
  "type":"TextField"
  },
 {
  "name":"states",
  "label":"Person's state",
  "type":"DropDown",
  "values":[
     "Maharashtra",
     "Kerala",
     "Tamil Nadu"
  ]
}
];

class App extends Component {
  onFlexiSubmit = () => {
    alert('Submit button clicked');
  }
  render(){
    return (
      <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig}/>
    );
  }
}
export default App;
