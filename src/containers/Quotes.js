import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
import { bindActionCreators } from 'redux';


class Quotes extends Component {
  render() {
    console.log(this.props)
    const quoteList = this.props.quotes.map((quote,index) => {
    
      return <QuoteCard quote={quote} 
                        key={index} 
                        removeQuote = { removeQuote}
                        upvoteQuote = {upvoteQuote }
                        downvoteQuote = { downvoteQuote }

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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
                
               */}
               { quoteList }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.quotes);
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote
  }, dispatch)
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
