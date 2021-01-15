import { ADD_QUOTE, REMOVE_QUOTE, UPVOTE_QUOTE, DOWNVOTE_QUOTE } from "../js/constants/action-types";

export default function quotesReducer(state = [], action) {
  let idx;
  switch(action.type) {
    case ADD_QUOTE:
      return {
        ...state,
        id: action.uuid,
        content: action.content,
        votes: 0,
        author: action.author
      };
    
    case REMOVE_QUOTE:
      //action.quoteId
      console.log(action.type);
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx +1)];
    
    case UPVOTE_QUOTE:
      //action.quoteId
      console.log(action.type);
      break;

    case DOWNVOTE_QUOTE:
      //action.quoteId
      console.log(action.type);
      break;

    default:
      return state;
  }
}