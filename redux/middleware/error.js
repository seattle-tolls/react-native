const error = ({ dispatch }) => next => action => {
  if(!action.error)
    return next(action)

  // TODO: Make error middleware do something
  console.log('THERE WAS AN ERROR')
  // do not next() it
}

export default error