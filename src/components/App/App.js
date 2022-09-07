import { Component } from 'react';
import getTrix from '../../apiCalls';
import Trix from './Trix';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      trix: [],
      error: ''
    }
  }

  getAllTrix = () => {
    getTrix.fetchTrixData('http://localhost:3001/api/v1/tricks')
      .then(data => {
        console.log("trix data: ", data)
        this.setState({trix: data})
      })
      .catch(error => {
        console.log(error)
        this.setState({error: `${error}`})
      })
  }

  componentDidMount = () => this.getAllTrix()


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Trix allTrix={this.state.trix}/>
      </div>
    );
  }
}

export default App;