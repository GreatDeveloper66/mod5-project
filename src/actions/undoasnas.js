const UndoAsanaAction = asana => {
  return {
    type: 'undoasana',
	asana: asana
  }
}

export default UndoAsanaAction