export default (state = [], action) => {
//reducer updates state
//we always have to return state in reducers**

  switch(action.type) {
    case ("ADD_QUOTE"):
      return [...state, action.quote] 
  //.quote is found handoleonsubmit addquote and then action addquote in actions/quotes
        
    case ("REMOVE_QUOTE"):
      return state.filter(q => q.id != action.quoteId)

    case("UPVOTE_QUOTE"):
      //new state without mutating old state
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: quote.votes + 1}
        } else {
          return quote
        }
      })

    case("DOWNVOTE_QUOTE"):
    return state.map(quote => {
      if (quote.id === action.quoteId && quote.votes > 0) {
        return {...quote, votes: quote.votes - 1}
      } else {
        return quote
      }
    })
   
        default: 
    return state
  }
}