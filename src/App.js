import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    
    <div className="App">
        <ShoppingList/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
<Board/>
    </div>
  );
}

export default App
class ShoppingList extends React.Component
{
 render()
  {
    return(
    <div className="Shoppng-List">
   <h1>Shopping List for {this.props.name}</h1>
   <ul>
     <li>Instagram---social media app</li>
     <li>Whatsapp</li>
     <li>Facebook</li>
     <li>Facebook</li>
     <li>Facebook</li>
     <li>Facebook</li>
     <li>Facebook</li>
   </ul>
    </div>
    );
  }
}


class Board extends React.Component
{
constructor(props)
{
  super(props);
  this.state={
    Squares:Array(9).fill(null),
    xIsNext:true,
  };
}
handleClick(i)
{
  const squares = this.state.Squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = this.state.xIsNext ? 'X' : 'O';

  this.setState({
    Squares:squares,
  xIsNext:!this.state.xIsNext,
  });

}

  renderSquare(i)
{
  return <Square value={this.state.Squares[i]}
  onClick={()=>this.handleClick(i)}/>;
}
render() {
  const winner = calculateWinner(this.state.Squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
  );
}
}


function Square(props)
{
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
  
}



function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
