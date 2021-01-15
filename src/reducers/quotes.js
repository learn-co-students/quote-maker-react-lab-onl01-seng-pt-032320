import { ADD_QUOTE, REMOVE_QUOTE, UPVOTE_QUOTE, DOWNVOTE_QUOTE } from "../js/constants/action-types";

export default function quotesReducer(state = [], action) {
  let idx;
  switch(action.type) {
    case ADD_QUOTE:
      return [
        ...state,
        action.quote
      ];
    
    case REMOVE_QUOTE:
      //action.quoteId
      console.log(action.type);
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx +1)];
    
    case UPVOTE_QUOTE:
      //action.quoteId
      console.log(action.type);
      idx = state.findIndex(quote => quote.id === action.quoteId);
      const updootQuote = {...state[idx], votes: state[idx].votes + 1}
      return [...state.slice(0, idx), updootQuote, ...state.slice(idx +1)];

    case DOWNVOTE_QUOTE:
      //action.quoteId
      console.log(action.type);
      //otherway to do it
      return state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0){
          return {...quote, votes: quote.votes - 1}
        } else {
          return quote;
        }
      })
    default:
      return state;
  }
}