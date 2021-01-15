import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    const quotesList = this.props.quotes.map( quote => 
    <QuoteCard
      quote={quote}
      key={quote.id}
      handleRemoveQuote={this.props.removeQuote}
      handleUpvoteQuote={this.props.upvoteQuote}
      handleDownvoteQuote={this.props.downvoteQuote} 
    />)
    
    if (this.props.quotes.length > 0){
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
    } else { 
      return <div>Empty!</div>
    }
  }
}
//Take stuff out of global state and structure in props like this. Only does for this component
const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}
//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
