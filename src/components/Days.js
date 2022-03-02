import React, { Component } from 'react'

class Days extends Component {
    constructor() {
        super();
        this.state = {
          weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        }
      }
    
  render() {
    return (
        <div>
            <ul>
            {this.state.weekDays.map((weekDay,index) => (
                <li key={index}>{weekDay}</li>
                ))
            }
            </ul>
        </div>
    )
  }
}
export default Days;