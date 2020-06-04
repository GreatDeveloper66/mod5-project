const DeleteSequenceAction = sequenceid => {
  return {
    type: 'deletesequence',
	sequenceid: sequenceid
  }
}

export default DeleteSequenceAction