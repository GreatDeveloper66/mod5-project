const DeleteSequenceAction = sequencename => {
  return {
    type: 'deletesequence',
	sequencename: sequencename
  }
}

export default DeleteSequenceAction