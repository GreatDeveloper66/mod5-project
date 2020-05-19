const AddAsanaAction = asana => {
	console.log('action', asana)
  return {
    type: 'addasana',
	asana: asana
  }
}

export default AddAsanaAction