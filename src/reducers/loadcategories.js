const CategoriesReducer = (state=[],action) => {
  switch(action.type){
    case 'loadcategories':
      return action.categories
    default:
      return state
  }
}

export default CategoriesReducer