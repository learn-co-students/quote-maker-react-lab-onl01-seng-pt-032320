import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    text = ''
  }

  handleOnChange = event => {
    // Handle Updating Component State OK
    debugger; // check what event.target is
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default OK
    // Create quote object from state OK
    // Pass quote object to action creator OK
    // Update component state to return to default OK
    event.preventDefault();
    const quote = this.state;
    console.log("The quoteObj is", quote);
    this.props.addQuote(quote);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return { 
    content: state.content,
    author: state.author
  };
}
//is this something i need?
const mapDispatchToProps = dispatch => {
  return { addQuote: () => dispatch( {type: 'ADD_QUOTE'}) };
}
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
