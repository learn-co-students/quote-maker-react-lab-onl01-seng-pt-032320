import React, { Component } from 'react';
import QuoteCard from './components/QuoteCard';
import QuoteForm from './components/QuoteForm'
import Quotes from './containers/Quotes';
import Quote from './containers/Quotes'
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        {/*
          TODO:
          <
          Render QuoteForm and Quotes Components
         */}
        <QuoteForm/>
        <Quotes/>
      </div>
    );
  }
}

export default App;
