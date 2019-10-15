import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends Component {
 
  render() {
    return (
      <div>
      <Hello firstname="Franck" note="bgbbbbbbbbbbbbbbbbbbbbbbbbbbbbgbggnn
      ggjjgjjjhjhjhjhjhjhjjhjhjjhjhjhhhhhhjhjhjjhjhjhjjjhjhjhjhjhjhjjhjhjhjjhjhjhjhjhjjhjhjhjjjhjhjhjjjhjhjjhjjhjhjhjjhjhj" email="gfggfggf@yahoo.com"/>
      <Hello firstname="John" note="mmmmmmmmmhhhhhhhhhhhhhhhhmmmfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfhhhhjgjgjgjgjjjg" email="tettrtr@gmail.com"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
