const SortAsanasReducer = (state='ATOZ',action) => {
  switch(action.type){
    case 'sortasanas':
      return action.sort
    default:
      return state
  }
}

export default SortAsanasReducer