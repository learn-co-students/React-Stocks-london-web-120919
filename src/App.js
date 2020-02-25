import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
// move the mainContainer as we won't need to pass Stocks to header - no point passing it down any further than need to
  // don't need to use constructor anymore can just declare state =
  

 

  render() {
    return (
      <div>
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
