const RemoveAsanaAction = asana_id => {
  return {
    type: 'removeasana',
	asana_id: asana_id
  }
}

export default RemoveAsanaAction