import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: '',
    author: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State\
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    const quote = {...this.state, votes: 0, id: uuid() } //copy everything in this.state and also add votes, id
    // Pass quote object to action creator //send over to reducer to update state
      //as soon as we connect a component we get dispatch- or action creators
    //this.props.dispatch({type: "ADD_QUOTE", payload: quote}) ...we could do this but using a different pattern
    this.props.addQuote(quote)
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    console.log("props is", this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                        name="content"
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
                        onChange={this.handleOnChange}
                        name="author"
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
//if using action creators, need to put them in the second arguement in order to hit teh reducer
export default connect(null, { addQuote })(QuoteForm);
