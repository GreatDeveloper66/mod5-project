const CategoriesReducer = (state={categories: [], requesting: false},action) => {
  switch(action.type){
    case 'loadcategories':
      return {categories: action.categories, requesting: false}
    case 'loadingcategories':
      return {categories: [], requesting: true}
    default:
      return state
  }
}

export default CategoriesReducer
