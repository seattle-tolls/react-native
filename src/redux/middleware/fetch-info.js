import { FETCH_TOLL_INFO } from '../constants/action-types'
import { API_URL, AWS_API_KEY } from 'react-native-dotenv'
import { setTollInfo } from '../actions/toll'
import fetcher from '../../lib/fetcher'

const inits = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': AWS_API_KEY,
  },
}

// TODO: check if there are info coming from the db
const fetchInfo = ({ dispatch }) => next => async action => {
  if(action.type !== FETCH_TOLL_INFO)
    return next(action)
  try {
    const dataArr = await fetcher(`${API_URL}/api/v1/tolls`, inits)

    if (!Array.isArray(dataArr)){
      console.log('ERROR:', dataArr.message)
      return next(action)
    }

    const dataObj = dataArr.reduce((curr, next) => {
      let { toll, name, date, data } = next
      return curr = { ...curr, [toll]:{ name, date, data } }
    }, {})
    dispatch(setTollInfo(dataObj))
  }
  catch (err) {
    console.log('ERROR:', err)
  }
}

export default fetchInfo