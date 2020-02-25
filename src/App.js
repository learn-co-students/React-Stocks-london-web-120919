import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      stocks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(json => this.setState({
      stocks: json
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <MainContainer stocks={this.state.stocks}/>
      </React.Fragment>
    );
  }
}

export default App;
