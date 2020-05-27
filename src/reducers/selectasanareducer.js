const SelectedAsanaReducer = (state=null,action) => {
  switch(action.type){
    case 'selectasana':
      return action.selectedasanaid
    default:
      return state
  }
}

export default SelectedAsanaReducer