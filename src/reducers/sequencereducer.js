const SequenceReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequence':
      return action.sequence
    default:
      return state
  }
}

export default SequenceReducer

