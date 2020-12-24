import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes' 
//importing action creators so we can reference them by name in this file


class Quotes extends Component {

  //need to have this container know quotes
  //connect to global state store

  render() {
    console.log("props is", this.props)

    //passing stuff down to quotecard
    //iterating over individual quotes an dynmaically rendering components
    const quotesList = this.props.quotes.map(quote => {
      return <QuoteCard 
          quote={quote} 
          key={quote.id} 
          handleRemoveQuote={this.props.removeQuote}
          handleUpvoteQuote={this.props.upvoteQuote}
          handleDownvoteQuote={this.props.downvoteQuote}
          />
    })

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

           {quotesList}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

//shpping at the store
const mapStateToProps = state => {
  //must return an object
  return {
    quotes: state.quotes
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
//first argument structure props based on state
//need to map our action creators to props in order to hit our reducer