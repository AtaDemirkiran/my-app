import React, { Component } from 'react'
// import Futbolcu from './components/Futbolcu';
import Sayac from './components/Sayac';
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
        {/* <Futbolcu
          players={this.state.players}
        /> */}
      <Sayac/>
      </div>
    )
  }
}
export default App;