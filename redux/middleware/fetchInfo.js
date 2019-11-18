import { FETCH_TOLL_INFO } from '../constants/action-types'
import { API_URL } from 'react-native-dotenv'
import { setTollInfo } from '../actions/toll'

const inits = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

const fetchInfo = ({ dispatch }) => next => async action => {

  if(action.type !== FETCH_TOLL_INFO)
    return next(action)
  try {
    const payload = await fetch(`${API_URL}/api/toll`, inits)
    const data = await payload.json()
    dispatch(setTollInfo(data))
  }
  catch (err) {
    console.log('ERROR:', err)
  }
}

export default fetchInfo