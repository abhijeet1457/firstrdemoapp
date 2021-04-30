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
  }
}
handleClick(i)
{
  const squares=this.state.Squares.slice();
  squares[i]='X';
  this.setState({Squares:squares});

}

  renderSquare(i)
{
  return <Square value={this.state.Squares[i]}
  onClick={()=>this.handleClick(i)}/>;
}
render()
{
  const status="next player x";
  return(
    
    <div >
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
  )
}
}

class Square extends React.Component
{

  render() {
  return (
    <button className="square" onClick={()=>this.props.onClick()}>
      {this.props.value}
    </button>
  )
  }
}