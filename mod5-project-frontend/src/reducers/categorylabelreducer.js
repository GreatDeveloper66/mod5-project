const CategoryLabelReducer = (state='',action) => {
  switch(action.type){
    case 'setcategorylabel':
      return action.categorylabel
    default:
      return state
  }
}

export default CategoryLabelReducer