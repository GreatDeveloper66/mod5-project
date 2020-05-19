const DeleteSequenceAction = sequencename => {
  return {
    type: 'delete',
	sequencename: sequencename
  }
}

export default DeleteSequenceAction