import React, { Component } from 'react'
import Futbolcu from './components/Futbolcu';
class App extends Component {
 
  state={
      players:[ 
        {
          "id" :1,
          "name" :"atiba",
          "team" :"Besiktas",
        },
        {
          "id" :2,
          "name":"messi",
          "team" : "psg"
        }

      ],
      gorunurluk : false
  }

 render() {
    return (
      <div>
        <Futbolcu
          players={this.state.players}
        />
      </div>
    )
  }
}
export default App;