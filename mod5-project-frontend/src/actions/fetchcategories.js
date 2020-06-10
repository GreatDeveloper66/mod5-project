export default fetchCategories(jwt) {
  dispatch(LoadingCategoriesAction())
  fetch(`${process.env.REACT_APP_API_URL}/api/v1/categories`,{headers: {Authorization: `Bearer ${jwt}`}})
    .then(resp => resp.json())
    .then(data => {
      dispatch(LoadCategoriesAction(data))
  })
}
