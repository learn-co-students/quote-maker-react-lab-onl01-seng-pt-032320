import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    const quotesList =  this.props.quotes.quotes.map(quote =>  { 
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

const mapStateToProps = state => {
  return {
    quotes: state
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
