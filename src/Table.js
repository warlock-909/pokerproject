import React, { Component } from 'react';
import './Table.css';
import Board from "./Board.js"
import User from "./User.js"
import Options from "./Options.js"



class Table extends Component{
	constructor(props){
		super(props)

	}
	render(){



		var array = []

		for (var i = 0; i < this.props.players.length; i++){
			array.push(<User player={this.props.players[i]}
							 clientSocketID={this.props.socketid}
							 flop={this.props.flop}
							 turn={this.props.turn}
							 river={this.props.river}/>)

		}




		return(
			
			<div className="table">




				
				<img src="/cardImages/table-1.png" id="tableImage"></img>

				<Options className="optionsBox" deal={this.props.deal.bind(this)}
                  call ={this.props.call.bind(this)}
                  fold={this.props.fold.bind(this)}
                  check={this.props.check.bind(this)}
                  raise={this.props.raise.bind(this)}
                  handleSubmit={this.props.handleSubmit.bind(this)}
                  handleChange={this.props.handleChange.bind(this)}
                  players={this.props.players}
                  phase={this.props.phase}
                  socketid={this.props.socketid}/>
			

        		
				
				<div className="User1">{array[0]}</div>
				<div className="User2">{array[1]}</div>
				<div className="User3">{array[2]}</div>
				<div className="User4">{array[3]}</div>
				<div className="User5">{array[4]}</div>
				<div className="User6">{array[5]}</div>
				<div className="User7">{array[6]}</div>
				<div className="User8">{array[7]}</div>



				<Board className="board"flop={this.props.flop}
										turn={this.props.turn}
										river={this.props.river}
										pot={this.props.pot}
										phase={this.props.phase}
										handNumber={this.props.handNumber}
										winners={this.props.winners}
										players={this.props.players}/>

        
        	

				</div>
			
			)



	}




}

export default Table;