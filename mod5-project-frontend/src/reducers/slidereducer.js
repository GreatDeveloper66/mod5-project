const SlideReducer = (state=0,action) => {
  switch(action.type){
    case 'incslide':
      return state + 1
    default:
      return state
  }
}

export default SlideReducer