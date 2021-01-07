export default (state = [], action) => {

  let idx
  let currentQuote  

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      currentQuote = state.find(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), Object.assign({}, currentQuote, {votes: currentQuote.votes += 1}),...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      currentQuote = state.find(quote => quote.id === action.quoteId)
      if (currentQuote.votes != 0) {
        return [...state.slice(0, idx), Object.assign({}, currentQuote, {votes: currentQuote.votes -= 1}),...state.slice(idx + 1)]
      }  
    }
  return state;
}
