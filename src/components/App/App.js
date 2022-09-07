import { Component } from 'react';
import getTrix from '../../apiCalls';
import Trix from './Trix';
import Form from './Form';
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

  addTrix = (newTrix) => {
    this.setState({ trix: [...this.state.trix, newTrix ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trixx Wish List</h1>
        <Form addTrix={this.addTrix}/>
        {this.state.error && <p>{this.state.error}</p>}
        <Trix allTrix={this.state.trix}/>
      </div>
    );
  }
}

export default App;