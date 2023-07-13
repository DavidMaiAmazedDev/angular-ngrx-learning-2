import * as post from '../actions/post'


export function reducer(state = [], action: post.GetPostsUpdatedAction) {
  switch (action.type) {
    case post.POSTSUPDATED:
      console.log(action)
      // return [...state,action.payload ] 
      return action.payload  
    default:
      return state
  }
}