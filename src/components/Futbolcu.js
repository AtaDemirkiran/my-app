import React, { Component } from 'react'

class Futbolcu extends Component {
    
    render() {
        return (
        <div>

            {
                this.props.players.map((player)=>(
                    
                    <div className='container' key={player.id}>
                        {
                            this.props.gorunurluk ?
                            <div>
                                <p>gorunmez</p>
                            </div>
                            : 
                                <div>burası gozukucek</div>
                        }
                        <div>
                            <p>Player name: {player.name} / Player Team : {player.team} </p>
                        </div>
                    </div>
                   
                ))
            }


        </div>
        )
    }
}
export default  Futbolcu;