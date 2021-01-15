import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
import quotesReducer from '../reducers/quotes';

class Quotes extends Component {

  render() {

    const quotesList = this.props.quotes.map( quote => <QuoteCard quote={quote} key={quote.id} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:
                  Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes - OK
               */}
               { quotesList }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Take stuff out of global state and structure in props like this. Only does for this component
const mapStateToProps = state => {
  return ({
    quotes: state.quote
  })
}
//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
