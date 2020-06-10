const CategoriesReducer = (state={categories: [], requesting: false},action) => {
  switch(action.type){
    case 'loadcategories':
      return {categories: action.categories, requesting: false}
    default:
      return state
  }
}

export default CategoriesReducer
